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
    watch: [currentPage], // currentPage 變動時自動重新請求
  }
);

const users = computed(() => data.value?.data ?? []);
const totalPages = computed(() => data.value?.totalPages ?? 1);

function goToPage(p: number) {
  if (p < 1 || p > totalPages.value || p === currentPage.value) return;
  currentPage.value = p;
  // 換頁後捲回頂部，體驗較好
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 產生頁碼陣列（超過 7 頁時用省略號，避免按鈕太多）
const pageNumbers = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const pages: (number | string)[] = [];

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  if (current > 3) pages.push("...");
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);
  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
});
</script>

<template>
  <div class="page">
    <section class="users-section">
      <h2>使用者列表</h2>

      <p v-if="pending">載入中...</p>
      <p v-else-if="error">載入失敗，請稍後再試。</p>

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
            <span v-if="p === '...'" class="ellipsis">...</span>
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
  animation: fadeIn 0.3s ease;
}
p {
  color: #a0a0c0;
  line-height: 1.7;
}

.users-section {
  margin-top: 48px;
}
.users-section h2 {
  font-size: 1.4rem;
  margin-bottom: 20px;
  color: #e5e5f0;
}

.users-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.user-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 24px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
  cursor: default;
}

.user-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.14);
}

.user-card .avatar {
  width: 56px;
  height: 56px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: #a99bf5;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 600;
}

.user-card h4 {
  color: #1a1d27;
  font-size: 1.05rem;
  margin-bottom: 6px;
}

.user-card p {
  color: #6b6b80;
  font-size: 0.9rem;
  line-height: 1.4;
}

.empty {
  text-align: center;
  padding: 40px 0;
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
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #2a2d3a;
  background: #1a1d27;
  color: #e8e8f0;
  cursor: pointer;
  font-size: 0.9rem;
  transition:
    background 0.2s,
    border-color 0.2s;
}

.page-btn:hover:not(:disabled) {
  border-color: #7c6df0;
}

.page-btn.active {
  background: #7c6df0;
  border-color: #7c6df0;
  color: #fff;
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.ellipsis {
  color: #a0a0c0;
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
</style>