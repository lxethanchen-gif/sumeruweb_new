<script setup lang="ts">
useHead({
  title: "呂合 誰在幫助台灣 誰在拯救這個世界",
  meta: [
    {
      name: "description",
      content: "作者呂合先生1962年12月14日生於中國遼寧省瓦房店。"
    },
    { property: "og:title", content: "首頁 | MySite" },
    {
      property: "og:description",
      content: "1984年畢業於青島建工學院應用物理學材料力學系。<br />現擔任WEAA董事長，旅歐各地，免費對各類侵犯人權、人身傷害等的事件、案件梳理幫助！"
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
    },
  ],
});

interface UserItem {
  id: string;
  name: string;
  email: string;
}

interface UsersResponse {
  data: UserItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

const currentPage = ref(1);
const limit = 40;

const { data, pending, error, refresh } = await useFetch<UsersResponse>(
  "/api/users",
  {
    query: computed(() => ({ page: currentPage.value, limit })),
    watch: [currentPage],
  },
);

const users = computed(() => data.value?.data ?? []);
const totalPages = computed(() => data.value?.totalPages ?? 1);
const total = computed(() => data.value?.total ?? 0);

function goToPage(p: number) {
  if (p < 1 || p > totalPages.value || p === currentPage.value) return;
  currentPage.value = p;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const pageNumbers = computed(() => {
  const totalP = totalPages.value;
  const current = currentPage.value;
  const pages: (number | string)[] = [];

  if (totalP <= 7) {
    for (let i = 1; i <= totalP; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(totalP - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < totalP - 2) pages.push("...");
  pages.push(totalP);

  return pages;
});

// const capabilities = [
//   { code: "WEB", label: "網站開發" },
//   { code: "APP", label: "App 開發" },
//   { code: "UI", label: "介面設計" },
//   { code: "OPS", label: "雲端部署" },
// ];

const authorPhotos = [
  "/images/author/author-1.jpg",
  "/images/author/author-2.jpg",
  "/images/author/author-3.jpg",
];

// 書封輪播
const coverImages = [
  "/images/book/cover.webp",
  "/images/book/cover1.webp",
  "/images/book/cover2.webp",
  "/images/book/cover3.webp",
  "/images/book/cover4.webp",
];

const activeCover = ref(0);
const coverAutoplayMs = 3500;
let coverTimer: ReturnType<typeof setInterval> | null = null;

function stopCoverAutoplay() {
  if (coverTimer) {
    clearInterval(coverTimer);
    coverTimer = null;
  }
}

function startCoverAutoplay() {
  stopCoverAutoplay();
  coverTimer = setInterval(() => {
    activeCover.value = (activeCover.value + 1) % coverImages.length;
  }, coverAutoplayMs);
}

function goToCover(idx: number) {
  activeCover.value = idx;
  startCoverAutoplay();
}

onMounted(() => {
  startCoverAutoplay();
});
onBeforeUnmount(() => {
  stopCoverAutoplay();
});
</script>

<template>
  <div class="page">
    <section class="hero">
      <div class="hero__content">
        <!-- <p class="eyebrow">網站・App・介面設計工作室</p> -->
        <h1 class="hero__title">
          誰在幫助台灣<br />
          <span class="hero__accent">誰在拯救這個世界</span><br />
          <span class="hero__accent1">呂合 著</span>
        </h1>

        <div class="author-photos">
          <img
            v-for="(photo, idx) in authorPhotos"
            :key="idx"
            :src="photo"
            alt="呂合先生"
            class="author-photos__img"
          />
        </div>

        <p class="hero__desc">
          作者呂合先生1962年12月14日生於中國遼寧省瓦房店。<br />
          1984年畢業於青島建工學院應用物理學材料力學系。<br />
          現擔任WEAA董事長，旅歐各地，免費對各類侵犯人權、人身傷害等的事件、案件梳理幫助！
        </p>
        <div class="hero__actions">
          <NuxtLink to="/portfolio" class="btn btn--primary"
            >進入書籍連結<link></NuxtLink
          >
          <!-- <NuxtLink to="/contact" class="btn btn--ghost">聊聊你的專案</NuxtLink> -->
        </div>
<!-- 
        <div class="cap-row">
          <span v-for="c in capabilities" :key="c.code" class="cap-chip">
            <span class="cap-chip__code">{{ c.code }}</span
            >{{ c.label }}
          </span>
        </div> -->
      </div>

      <div
        class="hero__cover"
        @mouseenter="stopCoverAutoplay"
        @mouseleave="startCoverAutoplay"
      >
        <div class="cover-carousel">
          <img
            v-for="(cover, idx) in coverImages"
            :key="cover"
            :src="cover"
            alt="《誰在幫助台灣 誰在拯救這個世界》書籍封面"
            class="hero__cover-img"
            :class="{ 'hero__cover-img--active': idx === activeCover }"
          />
        </div>

        <div class="cover-dots">
          <button
            v-for="(cover, idx) in coverImages"
            :key="cover"
            type="button"
            class="cover-dot"
            :class="{ 'cover-dot--active': idx === activeCover }"
            :aria-label="`切換至封面 ${idx + 1}`"
            @click="goToCover(idx)"
          ></button>
        </div>
      </div>
    </section>

    <!-- <section class="users-section">
      <div class="section-head">
        <p class="section-head__label">DATA — 會員資料連線示範</p>
        <h2>使用者列表</h2>
        <p class="section-head__meta" v-if="!pending && !error">
          共 {{ total }} 筆・第 {{ currentPage }} / {{ totalPages }} 頁
        </p>
      </div>

      <p v-if="pending" class="status">載入中...</p>
      <p v-else-if="error" class="status status--error">
        載入失敗，請稍後再試。
      </p>

      <template v-else>
        <div class="users-grid">
          <div v-for="user in users" :key="user.id" class="user-card">
            <div class="avatar">{{ user.name?.charAt(0) }}</div>
            <h4>{{ user.name }}</h4>
            <p>{{ user.email }}</p>
          </div>
        </div>

        <p v-if="users.length === 0" class="empty">目前沒有使用者資料。</p>

        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="goToPage(currentPage - 1)"
          >
            上一頁
          </button>

          <template v-for="(p, idx) in pageNumbers" :key="idx">
            <span v-if="p === '...'" class="ellipsis">···</span>
            <button
              v-else
              class="page-btn"
              :class="{ active: p === currentPage }"
              @click="goToPage(p as number)"
            >
              {{ p }}
            </button>
          </template>

          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            下一頁
          </button>
        </div>
      </template>
    </section> -->
  </div>
</template>

<style scoped>
.page {
  --bg: #ffffff;
  --surface: #ffffff;
  --surface-2: #f0f4fb;
  --ink: #b18f15;
  --ink-dim: #5c6c88;
  --accent: #1d5fe0;
  --accent-2: #0891b2;
  --line: #dbe4f2;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: "IBM Plex Sans", sans-serif;
  padding: clamp(24px, 5vw, 44px) clamp(16px, 4vw, 20px) clamp(40px, 8vw, 64px);
  animation: fadeIn 0.4s ease;
  min-height: 100vh;
}

/* corner registration marks — signature device across all pages */

/* Hero */
.hero {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 0 40px;
  display: flex;
  align-items: flex-start;
  gap: clamp(24px, 4vw, 48px);
}
.hero__content {
  flex: 1 1 420px;
  min-width: 0;
}
.hero__cover {
  flex: 0 1 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.cover-carousel {
  position: relative;
  width: 100%;
  max-width: 320px;
  aspect-ratio: 3 / 4;
  border-radius: 6px;
  overflow: hidden;
  background: var(--surface-2);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
}
.hero__cover-img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  color: transparent;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.hero__cover-img--active {
  opacity: 1;
}
.cover-dots {
  display: flex;
  gap: 8px;
}
.cover-dot {
  width: 8px;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--line);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;
}
.cover-dot--active {
  background: rgb(255, 183, 3);
  transform: scale(1.3);
}
.eyebrow {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  color: rgb(255, 183, 3);
  margin-bottom: 18px;
  letter-spacing: 0.03em;
}
.hero__title {
  font-family: "Space Grotesk", sans-serif;
  color: rgb(255, 183, 3);
  font-weight: 700;
  font-size: clamp(1.9rem, 5.5vw, 3.6rem);
  /* line-height: 1.52; */
  letter-spacing: 0.06em;
  margin-bottom: 22px;
}
.hero__accent {
  color: rgb(255, 183, 3);
}
.hero__accent1 {
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  line-height: 1.52;
  /* font-weight: 500; */
  color: rgb(255, 183, 3);
}
.author-photos {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.author-photos__img {
  display: block;
  width: clamp(88px, 12vw, 140px);
  height: clamp(88px, 12vw, 140px);
  object-fit: cover;
  background: var(--surface-2);
  color: transparent;
  border-radius: 8px;
  border: 1px solid var(--line);
}
.hero__desc {
  color: var(--ink-dim);
  font-size: clamp(0.92rem, 2vw, 1.02rem);
  line-height: 1.75;
  max-width: 52ch;
  margin-bottom: 32px;
}
.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.btn {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 0.92rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}
.btn--primary {
  background: rgb(255, 183, 3);
  color: #ffffff;
  letter-spacing: 0.2em;
}
.btn--primary:hover {
  background: #ffffff;
  border-color: rgb(255, 183, 3);
  color: rgb(255, 183, 3);
}
.btn--ghost {
  border-color: var(--line);
  color: var(--ink);
}
.btn--ghost:hover {
  border-color: var(--accent-2);
  color: var(--accent-2);
}

.cap-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.cap-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 6px;
  border: 1px solid var(--line);
  border-radius: 20px;
  font-size: 0.82rem;
  color: var(--ink-dim);
}
.cap-chip__code {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.68rem;
  background: var(--surface-2);
  color: var(--accent-2);
  padding: 3px 8px;
  border-radius: 14px;
  letter-spacing: 0.04em;
}

/* Users demo section */
.users-section {
  max-width: 1100px;
  margin: 24px auto 0;
  padding-top: 40px;
  border-top: 1px solid var(--line);
}
.section-head {
  margin-bottom: 28px;
}
.section-head__label {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.72rem;
  color: var(--accent-2);
  letter-spacing: 0.06em;
  margin-bottom: 8px;
}
.section-head h2 {
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  font-weight: 700;
}
.section-head__meta {
  color: var(--ink-dim);
  font-size: 0.85rem;
  margin-top: 6px;
}

.status {
  color: var(--ink-dim);
}
.status--error {
  color: #ef8b7f;
}

.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}

.user-card {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 22px 18px;
  text-align: center;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}
.user-card:hover {
  border-color: var(--accent-2);
  transform: translateY(-3px);
}
.user-card .avatar {
  width: 48px;
  height: 48px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 1px solid var(--accent);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
}
.user-card h4 {
  font-size: 0.98rem;
  margin-bottom: 5px;
}
.user-card p {
  color: var(--ink-dim);
  font-size: 0.82rem;
}

.empty {
  text-align: center;
  padding: 40px 0;
  color: var(--ink-dim);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  flex-wrap: wrap;
}
.page-btn {
  min-width: 38px;
  height: 38px;
  padding: 0 10px;
  border-radius: 4px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.82rem;
  transition:
    background 0.2s,
    border-color 0.2s;
}
.page-btn:hover:not(:disabled) {
  border-color: var(--accent-2);
}
.page-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #ffffff;
}
.page-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.ellipsis {
  color: var(--ink-dim);
  padding: 0 4px;
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

/* RWD */

/* 平板橫向 / 中寬螢幕：hero 保持並排，但封面圖縮小避免擁擠 */
@media (max-width: 960px) {
  .page {
    padding: 36px 16px 48px;
  }
  .hero {
    gap: 28px;
  }
  .hero__cover {
    flex: 0 1 220px;
  }
  .cover-carousel {
    max-width: 220px;
  }
}

/* 平板直向：hero 開始改為單欄 */
@media (max-width: 768px) {
  .hero {
    flex-direction: column;
  }
  .hero__cover {
    order: -1;
    flex: 0 0 auto;
    width: 100%;
  }
  .cover-carousel {
    max-width: 200px;
    margin: 0 auto;
  }
  .users-grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

/* 手機 */
@media (max-width: 640px) {
  .hero {
    padding: 16px 0 32px;
  }
  .hero__actions {
    flex-direction: column;
  }
  .hero__actions .btn {
    width: 100%;
    text-align: center;
  }
  .author-photos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
  }
  .author-photos__img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    background: var(--surface-2);
  }
  .users-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 12px;
  }
  .section-head {
    text-align: center;
  }
}

/* 極小螢幕手機 */
@media (max-width: 400px) {
  .hero__title {
    letter-spacing: 0.02em;
  }
  .hero__desc {
    max-width: 100%;
  }
  .cap-row {
    justify-content: center;
  }
  .users-grid {
    grid-template-columns: 1fr 1fr;
  }
  .page-btn {
    min-width: 32px;
    height: 32px;
    padding: 0 6px;
    font-size: 0.75rem;
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