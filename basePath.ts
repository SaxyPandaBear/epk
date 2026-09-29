// Shared between next.config.ts and app code so both agree on the prefix.
// next/image does not auto-prefix raw string `src` values when
// `images.unoptimized` is true, so public-folder asset URLs need this
// applied manually.
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/epk" : "";
