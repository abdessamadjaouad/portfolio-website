export function resolveSiteOrigin(
  value: string | undefined,
): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if (
    (url.protocol !== "https:" && !(local && url.protocol === "http:")) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without credentials, a path, or query parameters.",
    );
  }
  return url.origin;
}

const host =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const siteOrigin = resolveSiteOrigin(
  process.env.SITE_URL || (host ? `https://${host}` : undefined),
);
export const allowIndexing =
  Boolean(siteOrigin) && process.env.VERCEL_ENV !== "preview";

export function absoluteUrl(path: string) {
  return siteOrigin ? new URL(path, siteOrigin).href : undefined;
}
