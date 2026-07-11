// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app/",
  serverDir: 'app/server', 
  modules: ["@nuxtjs/sitemap"],
  site: {
    url: "https://your-domain.com", // ← 換成你的網域
  },
  sitemap: {
    urls: [
      { loc: "/", priority: 1.0, changefreq: "weekly" },
      { loc: "/about", priority: 0.8, changefreq: "monthly" },
      { loc: "/services", priority: 0.8, changefreq: "monthly" },
      { loc: "/portfolio", priority: 0.8, changefreq: "monthly" },
      { loc: "/contact", priority: 0.7, changefreq: "monthly" },
    ],
  },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
});
