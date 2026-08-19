import type { NextConfig } from "next";

import { validatePublicAssets } from "./src/content/validate-public-assets";

validatePublicAssets();

const nextConfig: NextConfig = {
  poweredByHeader: false,
};

export default nextConfig;
