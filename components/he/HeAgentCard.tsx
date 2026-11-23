import type { Agent } from "@/data/he/agents";
import { heBooking } from "@/data/he/booking";

// Shows the resolved agent. Takes a resolved Agent, never a raw URL tag.
// Phone and email render only once the agent has confirmed them (not null).
export default function HeAgentCard({ agent }: { agent: Agent }) {
  const c = heBooking.agentCard;
  return (
    <aside
      data-agent-card
      className="rounded-2xl border border-brand-gold/30 bg-brand-surface/40 px-5 py-4 mb-8"
    >
      <p className="text-sm text-brand-text-secondary">{c.title}</p>
      <p className="text-xl font-heading font-bold text-brand-text">{agent.nameHe}</p>
      {agent.agency ? <p className="text-brand-text-secondary">{agent.agency}</p> : null}
      {agent.phone ? (
        <p className="mt-2 text-brand-text-secondary">
          {c.phoneLabel}: <bdi dir="ltr">{agent.phone}</bdi>
        </p>
      ) : null}
      {agent.email ? (
        <p className="text-brand-text-secondary">
          {c.emailLabel}: <bdi dir="ltr">{agent.email}</bdi>
        </p>
      ) : null}
    </aside>
  );
}
