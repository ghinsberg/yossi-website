import { notFound } from "next/navigation";

// Unknown addresses land here so they render (en)/not-found.tsx
// inside the English layout (needed once multiple root layouts exist).
export default function CatchAll() {
  notFound();
}
