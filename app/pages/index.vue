<script setup lang="ts">
useHead({
  title: "Nuxt專案測試",
  meta: [
    {
      name: "description",
      content: "歡迎來到 MySite，我們提供專業網站開發、App開發與UI設計服務。",
    },
    { property: "og:title", content: "首頁 | MySite" },
    {
      property: "og:description",
      content: "歡迎來到 MySite，我們提供專業網站開發、App開發與UI設計服務。",
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

const capabilities = [
  { code: "WEB", label: "網站開發" },
  { code: "APP", label: "App 開發" },
  { code: "UI", label: "介面設計" },
  { code: "OPS", label: "雲端部署" },
];
</script>

<template>
  <div class="page">

    <section class="hero">
      <p class="eyebrow">網站・App・介面設計工作室</p>
      <h1 class="hero__title">
        我們把需求<br />
        變成<span class="hero__accent">可以上線的產品</span>
      </h1>
      <p class="hero__desc">
        MySite
        是一間專注在網站、行動應用與使用者介面的小型開發工作室。從規格到部署，
        一條產線做完，不假手第三方。
      </p>
      <div class="hero__actions">
        <NuxtLink to="/services" class="btn btn--primary">查看服務範疇</NuxtLink>
        <NuxtLink to="/contact" class="btn btn--ghost">聊聊你的專案</NuxtLink>
      </div>

      <div class="cap-row">
        <span v-for="c in capabilities" :key="c.code" class="cap-chip">
          <span class="cap-chip__code">{{ c.code }}</span>{{ c.label }}
        </span>
      </div>
    </section>

    <section class="users-section">
      <div class="section-head">
        <p class="section-head__label">DATA — 會員資料連線示範</p>
        <h2>使用者列表</h2>
        <p class="section-head__meta" v-if="!pending && !error">
          共 {{ total }} 筆・第 {{ currentPage }} / {{ totalPages }} 頁
        </p>
      </div>

      <p v-if="pending" class="status">載入中...</p>
      <p v-else-if="error" class="status status--error">載入失敗，請稍後再試。</p>

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
    </section>
  </div>
</template>

<style scoped>
.page {
  --bg: #ffffff;
  --surface: #ffffff;
  --surface-2: #f0f4fb;
  --ink: #B18F15;
  --ink-dim: #5c6c88;
  --accent: #1d5fe0;
  --accent-2: #0891b2;
  --line: #dbe4f2;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: "IBM Plex Sans", sans-serif;
  padding: 44px 20px 64px;
  animation: fadeIn 0.4s ease;
  min-height: 100vh;
}

/* corner registration marks — signature device across all pages */


/* Hero */
.hero {
  max-width: 720px;
  padding: 24px 0 40px;
}
.eyebrow {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  color: var(--accent-2);
  margin-bottom: 18px;
  letter-spacing: 0.03em;
}
.hero__title {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(2.2rem, 5.5vw, 3.6rem);
  line-height: 1.12;
  letter-spacing: -0.01em;
  margin-bottom: 22px;
}
.hero__accent {
  color: var(--accent);
}
.hero__desc {
  color: var(--ink-dim);
  font-size: 1.02rem;
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
  background: var(--accent);
  color: #ffffff;
}
.btn--primary:hover {
  background: #164fc0;
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
  margin-top: 24px;
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
  font-size: 1.5rem;
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
  transition: border-color 0.2s ease, transform 0.2s ease;
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
  transition: background 0.2s, border-color 0.2s;
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
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

/* RWD */
@media (max-width: 960px) {
  .page { padding: 36px 16px 48px; }
}
@media (max-width: 640px) {
  .hero { padding: 16px 0 32px; }
  .hero__actions { flex-direction: column; }
  .btn { text-align: center; }
  .users-grid { grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; }
}
</style>

<style>
html,
body {
  background: #ffffff;
  margin: 0;
}
</style>