<script setup lang="ts">
useHead({
  title: "關於我們 | MySite",
  meta: [
    { name: "description", content: "了解 MySite 團隊背景、理念與服務宗旨。" },
    { property: "og:title", content: "關於我們 | MySite" },
    {
      property: "og:description",
      content: "了解 MySite 團隊背景、理念與服務宗旨。",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
    },
  ],
});

const principles = [
  {
    label: "小而完整",
    desc: "團隊維持精簡，每個專案都由核心成員從頭跟到尾，不層層轉包。",
  },
  {
    label: "先能用，再好看",
    desc: "介面設計服務於功能與流程，視覺是最後一哩，不是唯一標準。",
  },
  {
    label: "交付看得到的東西",
    desc: "每個階段都有可運作的版本可以檢視，不是等到最後才見真章。",
  },
];

const stack = [
  "Vue / Nuxt",
  "React / TypeScript",
  "Flutter",
  "Node.js",
  "MongoDB",
];
</script>

<template>
  <div class="page">
    <section class="intro">
      <p class="eyebrow">關於我們</p>
      <h1>一個負責把東西<br /><span class="accent">做完</span>的團隊</h1>
      <p class="lead">
        MySite 是一間提供網站開發、App 開發與 UI/UX
        設計的小型工作室。我們不追求成為最大的團隊，只在意每個交付出去的專案，
        自己看了也覺得站得住腳。
      </p>
    </section>

    <section class="principles">
      <p class="section-label">我們如何做事</p>
      <div class="principle-list">
        <div v-for="p in principles" :key="p.label" class="principle">
          <h3>{{ p.label }}</h3>
          <p>{{ p.desc }}</p>
        </div>
      </div>
    </section>

    <section class="stack-section">
      <p class="section-label">常用技術</p>
      <div class="stack-row">
        <span v-for="s in stack" :key="s" class="stack-chip">{{ s }}</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page {
  --bg: #ffffff;
  --surface: #ffffff;
  --surface-2: #f0f4fb;
  --ink: #8C6E1B;
  --ink-dim: #5c6c88;
  --accent: #FFFFFF;
  --accent-2: #0891b2;
  --line: #dbe4f2;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: "IBM Plex Sans", sans-serif;
  padding: 44px 20px 64px;
  animation: fadeIn 0.4s ease;
  min-height: 100vh;
}

.intro {
  max-width: 680px;
  padding: 12px 0 48px;
}
.eyebrow {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  color: var(--accent-2);
  margin-bottom: 18px;
}
.intro h1 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.18;
  margin-bottom: 22px;
}
.accent {
  color: var(--accent);
}
.lead {
  color: var(--ink-dim);
  font-size: 1.02rem;
  line-height: 1.8;
  max-width: 56ch;
}

.section-label {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.72rem;
  color: var(--accent-2);
  letter-spacing: 0.06em;
  margin-bottom: 20px;
}

.principles {
  padding: 36px 0;
  border-top: 1px solid var(--line);
}
.principle-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.principle {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px;
  background: var(--surface);
}
.principle h3 {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.05rem;
  margin-bottom: 10px;
  color: var(--ink);
}
.principle p {
  color: var(--ink-dim);
  font-size: 0.88rem;
  line-height: 1.65;
}

.stack-section {
  padding: 36px 0 12px;
  border-top: 1px solid var(--line);
}
.stack-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.stack-chip {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 20px;
  color: var(--ink-dim);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}

@media (max-width: 960px) {
  .page {
    padding: 36px 16px 48px;
  }
  .principle-list {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 640px) {
  .principle-list {
    grid-template-columns: 1fr;
  }
}
</style>

<style>
html,
body {
  background: #ffffff;
  margin: 0;
}
</style>
