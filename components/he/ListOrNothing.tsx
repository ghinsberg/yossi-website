// Renders the list only when it has items. An empty list renders nothing at
// all: no placeholder, no empty section, no lonely heading. The page reads as
// finished, and the data keeps its shape so the list can be filled later.
export default function ListOrNothing<T>({
  items,
  children,
}: {
  items: readonly T[];
  children: (items: readonly T[]) => React.ReactNode;
}) {
  if (items.length === 0) return null;
  return <>{children(items)}</>;
}
