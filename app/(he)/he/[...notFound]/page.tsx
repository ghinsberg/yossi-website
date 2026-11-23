import { notFound } from "next/navigation";

// Unknown Hebrew addresses land here so they render he/not-found.tsx
// inside the Hebrew layout.
export default function HeCatchAll() {
  notFound();
}
