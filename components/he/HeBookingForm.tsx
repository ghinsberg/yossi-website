"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ChangeEvent, type FormEvent } from "react";
import HeAgentCard from "@/components/he/HeAgentCard";
import { DEFAULT_AGENT_TAG, resolveAgent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";
import { EMAIL_RE, HE_HONEYPOT_FIELD, HE_MIN_FILL_MS } from "@/lib/contact";
import { captureAgentTag } from "@/lib/he/agentTag";
import { captureAndGetUTM, clearUTM } from "@/lib/utm";

type FieldName = keyof typeof heBooking.form.fields;
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "failed";

const EMPTY: Values = {
  name: "",
  organisation: "",
  phone: "",
  email: "",
  eventDate: "",
  eventLocation: "",
  audienceSize: "",
  message: "",
};
const REQUIRED: FieldName[] = ["name", "organisation", "phone"];
const ORDER: FieldName[] = ["name", "organisation", "phone", "email", "eventDate", "eventLocation", "audienceSize", "message"];

const inputStyles =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-text-secondary/70 focus:outline-hidden focus:border-brand-gold-light focus:ring-2 focus:ring-brand-gold-light transition";
const labelStyles = "block text-sm font-medium text-brand-text-secondary mb-2";

const subscribeNever = () => () => {};

export function validateHeForm(v: Values): Errors {
  const e = heBooking.form.errors;
  const errs: Errors = {};
  for (const f of REQUIRED) if (!v[f].trim()) errs[f] = e.required;
  if (v.email.trim() && !EMAIL_RE.test(v.email.trim())) errs.email = e.invalidEmail;
  return errs;
}

/** The one line above the fields when validation fails. Announced once
 *  (role="alert"); the per-field messages are not alerts of their own. */
export function errorSummaryText(count: number): string {
  const e = heBooking.form.errors;
  return count === 1 ? e.summaryOne : e.summaryMany.replace("{count}", String(count));
}

/** Waits out what is left of the minimum fill time, so a person who submits
 *  fast is never under the server's threshold and never silently dropped. The
 *  server rule stays; this only makes sure a person always passes it. */
export async function waitForMinimumFill(renderedAt: number | null): Promise<void> {
  const wait = HE_MIN_FILL_MS - (Date.now() - (renderedAt ?? Date.now()));
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
}

/** The summary for one submit attempt. Keyed by the attempt, so a second
 *  failed submit with the same count remounts the alert and is announced again. */
export function errorSummaryFor(attempt: number, count: number) {
  return count > 0 ? <ErrorSummary key={attempt} count={count} /> : null;
}

export function ErrorSummary({ count }: { count: number }) {
  return (
    <p id="form-error-summary" role="alert" className="mb-6 rounded-lg border border-red-400/60 px-4 py-3 text-red-300">
      {errorSummaryText(count)}
    </p>
  );
}

/** A field's message, tied to its input by aria-describedby. Not an alert. */
export function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <p id={id} className="text-red-400 text-sm mt-1">
      {children}
    </p>
  );
}

/** Hidden trap for bots: off-screen (logical inset, not display:none, which
 *  some bots skip), out of the tab order and hidden from assistive tech. */
export function Honeypot({ value, onChange }: { value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div aria-hidden="true" data-honeypot className="absolute -start-[10000px] top-auto w-px h-px overflow-hidden">
      <label htmlFor={HE_HONEYPOT_FIELD}>{heBooking.form.honeypotLabel}</label>
      <input
        id={HE_HONEYPOT_FIELD}
        name={HE_HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default function HeBookingForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [summaryCount, setSummaryCount] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [trap, setTrap] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  // When the form appeared in the browser, sent with the submit time (both from
  // the browser's clock) so the server can drop submissions under 3 seconds.
  const renderedAt = useRef<number | null>(null);
  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);
  const f = heBooking.form;

  // The tag lives in the URL or sessionStorage, which the server cannot see, so
  // the server snapshot is null (no agent rendered) and the browser resolves it
  // on hydration. Unknown or missing tags fall back to the default agent.
  const tag = useSyncExternalStore(subscribeNever, () => captureAgentTag() || DEFAULT_AGENT_TAG, () => null);
  const agent = tag === null ? null : resolveAgent(tag);

  function onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValues((p) => ({ ...p, [name]: value }));
    if (errors[name as FieldName]) setErrors((p) => ({ ...p, [name]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setAttempt((a) => a + 1);
    const errs = validateHeForm(values);
    setErrors(errs);
    const first = ORDER.find((k) => errs[k]);
    setSummaryCount(Object.keys(errs).length);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      // The button shows its sending state while this waits.
      await waitForMinimumFill(renderedAt.current);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          ...captureAndGetUTM(),
          site: "he",
          agentTag: captureAgentTag(),
          [HE_HONEYPOT_FIELD]: trap,
          formRenderedAt: renderedAt.current,
          formSubmittedAt: Date.now(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        clearUTM();
        window.location.href = "/toda";
        return;
      }
      setStatus("failed");
    } catch {
      setStatus("failed");
    }
  }

  const field = (name: FieldName, opts: { type?: string; ltr?: boolean; area?: boolean; autoComplete?: string; inputMode?: "tel" | "email" } = {}) => {
    const required = REQUIRED.includes(name);
    const meta = f.fields[name];
    const err = errors[name];
    const errId = `${name}-error`;
    const common = {
      id: name,
      name,
      value: values[name],
      onChange,
      placeholder: meta.placeholder,
      required,
      "aria-required": required ? true : undefined,
      "aria-invalid": err ? true : undefined,
      "aria-describedby": err ? errId : undefined,
      autoComplete: opts.autoComplete,
    };
    const cls = `${inputStyles}${opts.ltr ? " text-end" : ""}`;
    return (
      <div className={opts.area ? "md:col-span-2" : undefined}>
        <label htmlFor={name} className={labelStyles}>
          {meta.label}
          {required ? (
            <span aria-hidden="true" className="text-brand-gold ms-1">*</span>
          ) : (
            <span className="ms-2 text-xs font-normal text-brand-text-secondary/70">({f.optionalMark})</span>
          )}
        </label>
        {opts.area ? (
          <textarea {...common} rows={5} className={cls} />
        ) : (
          <input {...common} type={opts.type ?? "text"} inputMode={opts.inputMode} dir={opts.ltr ? "ltr" : undefined} className={cls} />
        )}
        {err ? <FieldError id={errId}>{err}</FieldError> : null}
      </div>
    );
  };

  return (
    <div>
      {agent ? <HeAgentCard agent={agent} /> : null}
      <form ref={formRef} method="post" onSubmit={onSubmit} noValidate aria-label={f.ariaLabel} className="relative">
        <p className="text-sm text-brand-text-secondary mb-6">{f.requiredNote}</p>
        {errorSummaryFor(attempt, summaryCount)}
        <Honeypot value={trap} onChange={(e) => setTrap(e.target.value)} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {field("name", { autoComplete: "name" })}
          {field("organisation", { autoComplete: "organization" })}
          {field("phone", { type: "tel", ltr: true, autoComplete: "tel", inputMode: "tel" })}
          {field("email", { type: "email", ltr: true, autoComplete: "email", inputMode: "email" })}
          {field("eventDate")}
          {field("eventLocation")}
          {field("audienceSize")}
          {field("message", { area: true })}
        </div>
        {status === "failed" ? (
          <p role="alert" className="mt-6 text-red-400">
            {f.errors.submitFailed}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-8 rounded-full bg-brand-gold text-black font-semibold px-8 py-4 min-h-[44px] hover:bg-brand-gold-light transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? f.sending : f.submit}
        </button>
      </form>
    </div>
  );
}
