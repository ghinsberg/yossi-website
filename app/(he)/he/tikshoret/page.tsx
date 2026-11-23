import Placeholder from "@/components/he/Placeholder";
import { heSite } from "@/data/he/site";

// Stub. A later task replaces this with the real page.
export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Placeholder>{heSite.pageNames.tikshoret}: {heSite.placeholder.stub}</Placeholder>
    </div>
  );
}
