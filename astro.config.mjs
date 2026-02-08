import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://vanthuirmaia.github.io",
  base: "/portfolio2026",
  integrations: [mdx()],
  output: "static",
  trailingSlash: "always",
});
