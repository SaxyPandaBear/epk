import type { NextConfig } from "next";
import { BASE_PATH } from "./basePath";

const nextConfig: NextConfig = {
  /**
   * Enable static exports.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  basePath: BASE_PATH,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
