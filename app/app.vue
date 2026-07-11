<script setup>
useHead({
  meta: [
    {
      name: "google-site-verification",
      content: "E4ERzqObbzfLJlXDRFvnmDcA9Kyy2WgcdNf47ptAAWo",
    },
  ],
});
</script>

<template>
  <div class="site-wrapper">
    <AppHeader />
    <main class="site-main">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --c-bg: #0f1117;
  --c-surface: #1a1d27;
  --c-border: #2a2d3a;
  --c-accent: #7c6df0;
  --c-accent-light: #a99bf5;
  --c-text: #e8e8f0;
  --c-muted: #7a7a9a;
  --header-h: 64px;
}

body {
  background: #0f1117;
}
</style>

<style scoped>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--c-bg);
  color: var(--c-text);
  font-family: "Segoe UI", "PingFang TC", "Noto Sans TC", sans-serif;
}

.site-main {
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 48px 24px;
}
</style>
