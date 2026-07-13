<script setup lang="ts">
useHead({
  title: '服務項目 | MySite',
  meta: [
    { name: 'description', content: '我們提供網站開發、App開發、UI/UX設計、雲端部署等全方位數位服務。' },
    { property: 'og:title', content: '服務項目 | MySite' },
    { property: 'og:description', content: '我們提供網站開發、App開發、UI/UX設計、雲端部署等全方位數位服務。' },
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap',
    },
  ],
})

const services = [
  {
    code: "UI",
    icon: "🎨",
    title: "UI / UX 設計",
    desc: "打造直覺且美觀的使用者介面，提升用戶體驗。",
  },
  {
    code: "WEB",
    icon: "💻",
    title: "網站開發",
    desc: "使用 Vue、Nuxt 等現代框架建立高效能網站。",
  },
  {
    code: "APP",
    icon: "📱",
    title: "App 開發",
    desc: "跨平台行動應用程式開發，iOS 與 Android 一次搞定。",
  },
  {
    code: "OPS",
    icon: "☁️",
    title: "雲端部署",
    desc: "協助專案上線部署，確保穩定運行與安全性。",
  },
];
</script>

<template>
  <div class="page">
    <span class="crop crop--tl" aria-hidden="true" />
    <span class="crop crop--tr" aria-hidden="true" />
    <span class="crop crop--bl" aria-hidden="true" />
    <span class="crop crop--br" aria-hidden="true" />

    <section class="intro">
      <p class="eyebrow">// 服務項目</p>
      <h1>從介面到部署，<span class="accent">一條產線</span>做完</h1>
      <p class="lead">四個環環相扣的能力，通常會一起用上，也可以單獨委託。</p>
    </section>

    <div class="grid">
      <div v-for="s in services" :key="s.title" class="card">
        <div class="card__head">
          <span class="icon">{{ s.icon }}</span>
          <span class="code">{{ s.code }}</span>
        </div>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  --bg: #eef1f6;
  --surface: #eef1f6;
  --surface-2: #eef1f6;
  --ink: #171923;
  --ink-dim: #5b6072;
  --accent: #c97a1b;
  --accent-2: #0f8f7e;
  --line: #d7dce6;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: "IBM Plex Sans", sans-serif;
  padding: 44px 20px 64px;
  animation: fadeIn 0.4s ease;
  min-height: 100vh;
}

.crop {
  position: fixed;
  width: 14px;
  height: 14px;
  pointer-events: none;
  z-index: 40;
  opacity: 0.55;
}
.crop::before, .crop::after { content: ""; position: absolute; background: var(--accent); }
.crop::before { width: 100%; height: 1px; top: 50%; }
.crop::after { height: 100%; width: 1px; left: 50%; }
.crop--tl { top: 14px; left: 14px; }
.crop--tr { top: 14px; right: 14px; }
.crop--bl { bottom: 14px; left: 14px; }
.crop--br { bottom: 14px; right: 14px; }


.intro {
  max-width: 640px;
  padding: 12px 0 44px;
}
.eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.8rem;
  color: var(--accent-2);
  margin-bottom: 18px;
}
.intro h1 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(1.9rem, 4.5vw, 2.6rem);
  line-height: 1.24;
  margin-bottom: 18px;
}
.accent { color: var(--accent); }
.lead {
  color: var(--ink-dim);
  font-size: 1rem;
  line-height: 1.75;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 16px;
}
.card {
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: var(--surface);
  transition: border-color 0.2s, transform 0.2s;
}
.card:hover {
  border-color: var(--accent-2);
  transform: translateY(-3px);
}
.card__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}
.icon { font-size: 1.7rem; }
.code {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  color: var(--accent);
  border: 1px solid var(--line);
  padding: 3px 8px;
  border-radius: 12px;
}
.card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.08rem;
  margin-bottom: 8px;
  color: var(--ink);
}
.card p {
  font-size: 0.88rem;
  color: var(--ink-dim);
  line-height: 1.6;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 960px) {
  .page { padding: 36px 16px 48px; }
}
@media (max-width: 640px) {
  .crop { display: none; }
  .grid { grid-template-columns: 1fr; }
}
</style>

<style>
html,
body {
  background: #eef1f6;
  margin: 0;
}
</style>