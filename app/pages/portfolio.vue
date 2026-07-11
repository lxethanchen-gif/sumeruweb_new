<script setup lang="ts">
useHead({ title: "作品集 | MySite" });

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
</script>

<template>
  <div class="page">
    <h1>📁 作品集</h1>
    <p>以下是我們部分代表作品，歡迎參考。</p>
    <div class="grid">
      <div v-for="w in works" :key="w.title" class="card">
        <span class="tag">{{ w.tag }}</span>
        <h3>{{ w.title }}</h3>
        <p>{{ w.desc }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  animation: fadeIn 0.3s ease;
}
h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}
p {
  color: #a0a0c0;
  line-height: 1.7;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  margin-top: 28px;
}
.card {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #2a2d3a;
  background: #1a1d27;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.card:hover {
  border-color: #7c6df0;
  transform: translateY(-2px);
}
.tag {
  display: inline-block;
  font-size: 0.72rem;
  padding: 2px 10px;
  border-radius: 20px;
  background: rgba(124, 109, 240, 0.15);
  color: #a99bf5;
  margin-bottom: 10px;
  letter-spacing: 0.05em;
}
.card h3 {
  margin-bottom: 6px;
}
.card p {
  font-size: 0.88rem;
  color: #7a7a9a;
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
</style>
