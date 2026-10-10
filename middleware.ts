import { NextResponse, type NextRequest } from "next/server";

// The production site must live on exactly one host. The bare Vercel alias
// serves a full duplicate that Google indexes, splitting search authority.
const CANONICAL_HOST = "yossighinsberg.com";
const DUPLICATE_HOSTS = new Set([
  "yossi-website.vercel.app",
  "www.yossighinsberg.com",
]);

export function middleware(req: NextRequest) {
  const host = req.headers.get("host")?.toLowerCase() ?? "";
  if (DUPLICATE_HOSTS.has(host)) {
    const url = req.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Skip static assets; redirecting pages and data routes is enough.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
