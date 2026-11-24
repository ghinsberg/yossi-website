import Placeholder from "@/components/he/Placeholder";

// Renders the list only when it has items. An empty list becomes a visible
// Placeholder: never an empty section, never an empty heading.
export default function ListOrPlaceholder<T>({
  items,
  empty,
  children,
}: {
  items: readonly T[];
  empty: string;
  children: (items: readonly T[]) => React.ReactNode;
}) {
  if (items.length === 0) return <Placeholder>{empty}</Placeholder>;
  return <>{children(items)}</>;
}
