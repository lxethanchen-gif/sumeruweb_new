<script setup lang="ts">
const navLinks = [
  { label: "首頁", to: "/" },
  { label: "作者簡介", to: "/about" },
  { label: "書籍介紹", to: "/services" },
  { label: "販售連結", to: "/portfolio" },
  // { label: '聯絡我們', to: '/contact' },
];

const socialLinks = [
  {
    type: "youtube",
    href: "https://www.youtube.com/@Dishenbuddha",
    label: "須彌山佛國網",
  },
  {
    type: "youtube",
    href: "https://www.youtube.com/@dishendashi",
    label: "諦深大師開示錄",
  },
  {
    type: "youtube",
    href: "https://www.youtube.com/@KNT-ex1bu/featured",
    label: "與如來接水",
  },
  {
    type: "website",
    href: "https://www.dishendashitw.org/",
    label: "南無燃燈台上諦深佛陀",
  },
  {
    type: "website",
    href: "https://sumeruweb.vercel.app/",
    label: "須彌山佛國網",
  },
];
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- <span class="footer-brand">誰在拯救這個世界</span> -->
      <span class="footer-copy"
        >© {{ new Date().getFullYear() }} All rights reserved.</span
      >

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

      <div class="footer-socials">
        <a
          v-for="(item, idx) in socialLinks"
          :key="idx"
          :href="item.href"
          :aria-label="item.label"
          class="social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <!-- YouTube icon -->
          <svg
            v-if="item.type === 'youtube'"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6-6.4 3.6Z"
            />
          </svg>

          <!-- Website icon (link) -->
          <svg
            v-else
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M9.5 14.5 14.5 9.5" />
            <path d="M11 6.5 12.4 5.1a3.5 3.5 0 0 1 4.95 4.95L15.9 11.4" />
            <path d="M13 17.5 11.6 18.9a3.5 3.5 0 0 1-4.95-4.95L8.1 12.6" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  /* border-top: 1px solid var(--c-border); */
  /* background: var(--c-surface); */
  z-index: 100;
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
  color: rgb(255, 183, 3);
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
  font-size: 16px;
  color: rgb(255, 183, 3);
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600;
}
.footer-link:hover {
  color: rgb(244, 207, 115);
}
.footer-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgb(255, 183, 3);
  transition:
    color 0.2s,
    transform 0.2s;
}
.social-icon:hover {
  color: rgb(244, 207, 115);
  transform: translateY(-2px);
}
</style>
