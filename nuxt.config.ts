// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app/",
  serverDir: "app/server",
  modules: ['@nuxtjs/sitemap'],
  site: {
    url: 'https://sumeruweb-new-gmeh.vercel.app'
  },
  // hooks: {
  //   "build:done": async () => {
  //     const { writeFileSync, mkdirSync } = await import("fs");
  //     const { resolve } = await import("path");

  //     const baseUrl = "https://sumeruweb-new-gmeh.vercel.app";

  //     const routes = [
  //       { loc: "/", priority: "1.0", changefreq: "weekly" },
  //       { loc: "/about", priority: "0.8", changefreq: "monthly" },
  //       { loc: "/services", priority: "0.8", changefreq: "monthly" },
  //       { loc: "/portfolio", priority: "0.8", changefreq: "monthly" },
  //       { loc: "/contact", priority: "0.7", changefreq: "monthly" },
  //     ];

  //     const today = new Date().toISOString().split("T")[0];

  //     const xml = `<?xml version="1.0" encoding="UTF-8"?>
  //     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  //     ${routes.map(r => `  <url>
  //         <loc>${baseUrl}${r.loc}</loc>
  //         <lastmod>${today}</lastmod>
  //         <changefreq>${r.changefreq}</changefreq>
  //         <priority>${r.priority}</priority>
  //       </url>`).join("\n")}
  //     </urlset>`;

  //     const outDir = resolve(".output/public");
  //     mkdirSync(outDir, { recursive: true });
  //     writeFileSync(resolve(outDir, "sitemap.xml"), xml, "utf-8");
  //     console.log("✅ sitemap.xml 已產生");
  //   },
  // },

  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});