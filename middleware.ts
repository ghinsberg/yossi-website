import { NextResponse, type NextRequest } from "next/server";
import { decideRoute, readSiteEnv, redirectUrl } from "@/lib/site";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const d = decideRoute(host, req.nextUrl.pathname, readSiteEnv());
  // Clone keeps the query string; only the pathname changes.
  const url = req.nextUrl.clone();
  switch (d.action) {
    case "redirect":
      return NextResponse.redirect(redirectUrl(new URL(url.href), host, d), 308);
    case "rewrite":
      url.pathname = d.pathname;
      return NextResponse.rewrite(url);
    case "notFound":
      if (d.bare) {
        return new NextResponse("Not Found", {
          status: 404,
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      }
      // No route matches /__blocked except the English catch-all, which 404s.
      // The explicit status covers RSC and segment requests too, which Next
      // would otherwise answer 200 with the not-found payload.
      url.pathname = "/__blocked";
      return NextResponse.rewrite(url, { status: 404 });
    default:
      return NextResponse.next();
  }
}

export const config = {
  // Skip static assets; redirecting pages and data routes is enough.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
