import { NextResponse, type NextRequest } from "next/server";
import { decideRoute, readSiteEnv } from "@/lib/site";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const d = decideRoute(host, req.nextUrl.pathname, readSiteEnv());
  // Clone keeps the query string; only host and pathname change.
  const url = req.nextUrl.clone();
  switch (d.action) {
    case "redirect":
      if (d.host.toLowerCase() !== host.toLowerCase()) url.protocol = "https:";
      url.host = d.host;
      if (!d.host.includes(":")) url.port = "";
      url.pathname = d.pathname;
      return NextResponse.redirect(url, 308);
    case "rewrite":
      url.pathname = d.pathname;
      return NextResponse.rewrite(url);
    case "notFound":
      // No route matches /__blocked except the English catch-all, which 404s.
      url.pathname = "/__blocked";
      return NextResponse.rewrite(url);
    default:
      return NextResponse.next();
  }
}

export const config = {
  // Skip static assets; redirecting pages and data routes is enough.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
