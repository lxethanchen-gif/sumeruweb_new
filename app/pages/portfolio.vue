<script setup lang="ts">
useHead({
  title: "作品集 | MySite",
  meta: [
    {
      name: "description",
      content:
        "瀏覽 MySite 的代表作品，包含電商平台、健康App、企業官網等專案。",
    },
    { property: "og:title", content: "作品集 | MySite" },
    {
      property: "og:description",
      content:
        "瀏覽 MySite 的代表作品，包含電商平台、健康App、企業官網等專案。",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
    },
  ],
});

const works = [
  {
    title: "專案 A",
    tag: "Web",
    desc: "電商平台開發，整合金流與後台管理系統。",
  },
  {
    title: "專案 B",
    tag: "App",
    desc: "健康管理 App，串接穿戴裝置數據即時顯示。",
  },
  {
    title: "專案 C",
    tag: "UI/UX",
    desc: "SaaS 後台介面重設計，提升操作效率 40%。",
  },
  {
    title: "專案 D",
    tag: "Web",
    desc: "企業官網建置，支援多語系與 SEO 優化。",
  },
  {
    title: "專案 E",
    tag: "App",
    desc: "社群平台 App，具備即時聊天與動態推送功能。",
  },
  {
    title: "專案 F",
    tag: "Cloud",
    desc: "雲端架構規劃與 CI/CD 流程自動化建置。",
  },
];

const tagColor: Record<string, string> = {
  Web: "web",
  App: "app",
  "UI/UX": "ui",
  Cloud: "cloud",
};
</script>

<template>
  <div class="page">
    <span class="crop crop--tl" aria-hidden="true" />
    <span class="crop crop--tr" aria-hidden="true" />
    <span class="crop crop--bl" aria-hidden="true" />
    <span class="crop crop--br" aria-hidden="true" />

    <section class="intro">
      <p class="eyebrow">// 作品集</p>
      <h1>做過的<span class="accent">六個代表案例</span></h1>
      <p class="lead">類型涵蓋電商、健康、SaaS、企業官網、社群與雲端架構。</p>
    </section>

    <div class="grid">
      <div v-for="w in works" :key="w.title" class="card">
        <div class="card__head">
          <span class="tag" :class="'tag--' + tagColor[w.tag]">{{ w.tag }}</span>
        </div>
        <h3>{{ w.title }}</h3>
        <p>{{ w.desc }}</p>
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
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
.card {
  padding: 22px;
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
  margin-bottom: 14px;
}
.tag {
  display: inline-block;
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  padding: 3px 10px;
  border-radius: 12px;
}
.tag--web { background: rgba(15, 143, 126, 0.12); color: var(--accent-2); }
.tag--app { background: rgba(201, 122, 27, 0.12); color: var(--accent); }
.tag--ui { background: rgba(23, 25, 35, 0.07); color: var(--ink-dim); }
.tag--cloud { background: rgba(59, 85, 196, 0.12); color: #3b55c4; }

.card h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.05rem;
  margin-bottom: 8px;
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