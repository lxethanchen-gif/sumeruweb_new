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
});
</script>

<template>
  <div class="page">
    <h1>ℹ️ 關於我們</h1>
    <p>這是一個介紹頁面。在這裡您可以放上公司的簡介、團隊成員或是聯絡資訊。</p>
    <p style="margin-top: 12px">目前網址顯示為 <code>/about</code>。</p>
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
code {
  background: #2a2d3a;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9em;
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
