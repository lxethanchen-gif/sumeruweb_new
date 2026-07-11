import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

const baseUrl = "https://your-domain.com"; // ← 換成你的網域

const routes = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/services", priority: "0.8", changefreq: "monthly" },
  { loc: "/portfolio", priority: "0.8", changefreq: "monthly" },
  { loc: "/contact", priority: "0.7", changefreq: "monthly" },
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${baseUrl}${r.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

const outDir = resolve(".output/public");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "sitemap.xml"), xml, "utf-8");
console.log("✅ sitemap.xml 已產生");
