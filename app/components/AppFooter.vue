<script setup lang="ts">
const navLinks = [
  { label: '首頁', to: '/' },
  { label: '關於我們', to: '/about' },
  { label: '服務項目', to: '/services' },
  { label: '作品集', to: '/portfolio' },
  { label: '聯絡我們', to: '/contact' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-brand">⬡ MySite</span>
      <span class="footer-copy">© {{ new Date().getFullYear() }} All rights reserved.</span>
      <nav class="footer-nav">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="footer-link"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--c-border);
  background: var(--c-surface);
}
.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.footer-brand {
  font-weight: 700;
  color: var(--c-accent-light);
}
.footer-copy {
  font-size: 0.82rem;
  color: var(--c-muted);
}
.footer-nav {
  display: flex;
  gap: 16px;
}
.footer-link {
  font-size: 0.82rem;
  color: var(--c-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-link:hover {
  color: var(--c-accent-light);
}
</style>