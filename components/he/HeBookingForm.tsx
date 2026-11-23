"use client";

import { useRef, useState, useSyncExternalStore, type ChangeEvent, type FormEvent } from "react";
import HeAgentCard from "@/components/he/HeAgentCard";
import { DEFAULT_AGENT_TAG, resolveAgent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";
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
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ORDER: FieldName[] = ["name", "organisation", "phone", "email", "eventDate", "eventLocation", "audienceSize", "message"];

const inputStyles =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition";
const labelStyles = "block text-sm font-medium text-brand-text-secondary mb-2";

const subscribeNever = () => () => {};

export function validateHeForm(v: Values): Errors {
  const e = heBooking.form.errors;
  const errs: Errors = {};
  for (const f of REQUIRED) if (!v[f].trim()) errs[f] = e.required;
  if (v.email.trim() && !EMAIL_RE.test(v.email.trim())) errs.email = e.invalidEmail;
  return errs;
}

export default function HeBookingForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);
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
    const errs = validateHeForm(values);
    setErrors(errs);
    const first = ORDER.find((k) => errs[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...captureAndGetUTM(), site: "he", agentTag: captureAgentTag() }),
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

  const field = (name: FieldName, opts: { type?: string; ltr?: boolean; area?: boolean; autoComplete?: string } = {}) => {
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
          <input {...common} type={opts.type ?? "text"} dir={opts.ltr ? "ltr" : undefined} className={cls} />
        )}
        {err ? (
          <p id={errId} role="alert" className="text-red-400 text-sm mt-1">
            {err}
          </p>
        ) : null}
      </div>
    );
  };

  return (
    <div>
      {agent ? <HeAgentCard agent={agent} /> : null}
      <form ref={formRef} onSubmit={onSubmit} noValidate aria-label={f.ariaLabel}>
        <p className="text-sm text-brand-text-secondary mb-6">{f.requiredNote}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {field("name", { autoComplete: "name" })}
          {field("organisation", { autoComplete: "organization" })}
          {field("phone", { type: "tel", ltr: true, autoComplete: "tel" })}
          {field("email", { type: "email", ltr: true, autoComplete: "email" })}
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
