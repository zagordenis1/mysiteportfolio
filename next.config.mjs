/**
 * When deploying to GitHub Pages, the site is served from
 * https://<user>.github.io/<repo>, so Next.js needs to know the subpath.
 * `NEXT_PUBLIC_BASE_PATH` is set by the GitHub Actions workflow (.github/workflows/deploy.yml).
 * Locally (npm run dev / build) it is unset and the site runs at the root.
 *
 * `output: "export"` turns Next into a pure static exporter — everything is
 * prerendered to HTML/CSS/JS in `out/`, which is exactly what GitHub Pages serves.
 *
 * @type {import('next').NextConfig}
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
