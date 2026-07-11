<script setup lang="ts">
useHead({ title: "服務項目 | MySite" });

const services = [
  {
    icon: "🎨",
    title: "UI / UX 設計",
    desc: "打造直覺且美觀的使用者介面，提升用戶體驗。",
  },
  {
    icon: "💻",
    title: "網站開發",
    desc: "使用 Vue、Nuxt 等現代框架建立高效能網站。",
  },
  {
    icon: "📱",
    title: "App 開發",
    desc: "跨平台行動應用程式開發，iOS 與 Android 一次搞定。",
  },
  {
    icon: "☁️",
    title: "雲端部署",
    desc: "協助專案上線部署，確保穩定運行與安全性。",
  },
];
</script>

<template>
  <div class="page">
    <h1>🛠 服務項目</h1>
    <p>我們提供全方位的數位解決方案，從設計到部署一條龍服務。</p>
    <div class="grid">
      <div v-for="s in services" :key="s.title" class="card">
        <span class="icon">{{ s.icon }}</span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 28px;
}
.card {
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #2a2d3a;
  background: #1a1d27;
  transition: border-color 0.2s;
}
.card:hover {
  border-color: #7c6df0;
}
.icon {
  font-size: 1.8rem;
}
.card h3 {
  margin: 10px 0 6px;
  color: #a99bf5;
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
