<script setup lang="ts">
const navLinks = [
  { label: "首頁", to: "/" },
  { label: "關於我們", to: "/about" },
  { label: "服務項目", to: "/services" },
  { label: "作品集", to: "/portfolio" },
  { label: "聯絡我們", to: "/contact" },
];

const menuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">⬡ MySite</NuxtLink>

      <!-- 桌機導覽 -->
      <nav class="nav-desktop">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
          exact-active-class="nav-link--active"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- 手機漢堡 -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="選單">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- 手機選單 -->
    <nav class="nav-mobile" :class="{ 'nav-mobile--open': menuOpen }">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        active-class="nav-link--active"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 17, 23, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--c-accent-light);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.nav-desktop {
  display: flex;
  gap: 4px;
}

.nav-link {
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--c-muted);
  text-decoration: none;
  transition:
    color 0.2s,
    background 0.2s;
}
.nav-link:hover {
  color: var(--c-text);
  background: var(--c-surface);
}
.nav-link--active {
  color: var(--c-accent-light) !important;
  background: rgba(124, 109, 240, 0.12) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--c-text);
  border-radius: 2px;
  transition:
    transform 0.25s,
    opacity 0.25s;
}
.hamburger span:nth-child(1).open {
  transform: translateY(7px) rotate(45deg);
}
.hamburger span:nth-child(2).open {
  opacity: 0;
}
.hamburger span:nth-child(3).open {
  transform: translateY(-7px) rotate(-45deg);
}

.nav-mobile {
  display: none;
  flex-direction: column;
  padding: 0 24px 16px;
  gap: 4px;
}
.nav-mobile--open {
  display: flex;
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}
</style>
