<script setup lang="ts">
const navLinks = [
  { label: "首頁", to: "/" },
  { label: "作者簡介", to: "/about" },
  { label: "書籍介紹", to: "/services" },
  { label: "販售連結", to: "/portfolio" },
  // { label: "聯絡我們", to: "/contact" },
];

const menuOpen = ref(false);
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink to="/" class="logo">誰在幫助台灣<br />誰在拯救個世界</NuxtLink>

      <!-- 桌機導覽 -->
      <nav class="nav-desktop">
        <NuxtLink
          v-for="(link, i) in navLinks"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
          exact-active-class="nav-link--active"
          :style="{ '--i': i }"
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
        v-for="(link, i) in navLinks"
        :key="link.to"
        :to="link.to"
        class="nav-link"
        active-class="nav-link--active"
        :style="{ '--i': i }"
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
  background: rgb(253, 253, 252);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--c-border);
  animation: header-drop 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
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
  font-size: 15px;
  font-weight: 700;
  color: rgb(252, 210, 0);
  line-height: 1.2;
  text-decoration: none;
  letter-spacing: 0.02em;
  opacity: 0;
  animation: fade-in-left 0.5s ease-out 0.15s both;
}

.nav-desktop {
  display: flex;
  gap: 4px;
}

.nav-desktop .nav-link {
  opacity: 0;
  animation: fade-in-down 0.45s ease-out both;
  animation-delay: calc(0.2s + var(--i) * 0.08s);
}

.nav-link {
  padding: 6px 14px;
  border-radius: 6px;
  border: 2px solid transparent;
  font-size: 18px;
  font-weight: 500;
  color: rgb(255, 200, 0) !important;
  text-decoration: none;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    transform 0.2s;
}
.nav-link:hover {
  color: rgb(255, 183, 3) !important;
  border-radius: 6px;
  border-color: rgb(255, 183, 3);
  background: rgb(253, 252, 252) !important;
  transform: translateY(-1px);
}

.nav-link--active {
  color: rgb(255, 183, 3) !important;
  background: rgb(253, 252, 252) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  opacity: 0;
  animation: fade-in-left 0.5s ease-out 0.15s both;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: rgb(255, 200, 0);
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
  overflow: hidden;
}
.nav-mobile--open {
  display: flex;
  animation: menu-expand 0.3s ease-out both;
}
.nav-mobile--open .nav-link {
  opacity: 0;
  animation: fade-in-down 0.35s ease-out both;
  animation-delay: calc(0.05s + var(--i) * 0.06s);
}

@media (max-width: 768px) {
  .nav-desktop {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

/* ===== 進場動畫關鍵影格 ===== */
@keyframes header-drop {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-12px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes menu-expand {
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 300px;
  }
}

/* 尊重使用者的減少動態偏好設定 */
@media (prefers-reduced-motion: reduce) {
  .site-header,
  .logo,
  .hamburger,
  .nav-desktop .nav-link,
  .nav-mobile--open,
  .nav-mobile--open .nav-link {
    animation: none;
    opacity: 1;
  }
}
</style>
