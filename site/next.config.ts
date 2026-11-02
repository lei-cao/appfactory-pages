import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // appfactory.sg/popline was the URL the first store-listing draft named
    // (404 on 2026-11-01); send it to the app's own site (HQ-104).
    const apex = [{ type: "host" as const, value: "appfactory.sg" }];
    return [
      { source: "/popline", has: apex, destination: "https://popline.appfactory.sg", permanent: true },
      { source: "/:locale(zh-cn|zh-tw)/popline", has: apex, destination: "https://popline.appfactory.sg/:locale", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Apple fetches this file without an extension and wants JSON.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
