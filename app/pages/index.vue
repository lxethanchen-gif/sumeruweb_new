<script setup lang="ts">
useHead({ title: "首頁 | MySite" });
</script>

<template>
  <div class="page">
    <h1>🏠 歡迎來到首頁</h1>
    <p>這是透過 Nuxt 3 自動串聯產生的首頁內容。</p>
    <div class="card">
      <h3>最新消息</h3>
      <p>我們的 Nuxt 專案已經成功跑起來並建立路由連結了！</p>
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
.card {
  margin-top: 28px;
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid #2a2d3a;
  background: #1a1d27;
}
.card h3 {
  margin-bottom: 8px;
  color: #a99bf5;
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
