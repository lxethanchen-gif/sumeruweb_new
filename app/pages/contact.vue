<script setup lang="ts">
useHead({
  title: "聯絡我們 | MySite",
  meta: [
    {
      name: "description",
      content: "有任何問題或合作需求，歡迎透過表單聯繫 MySite 團隊。",
    },
    { property: "og:title", content: "聯絡我們 | MySite" },
    {
      property: "og:description",
      content: "有任何問題或合作需求，歡迎透過表單聯繫 MySite 團隊。",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap",
    },
  ],
});

const form = reactive({ name: "", email: "", message: "" });
const sent = ref(false);
const loading = ref(false);
const error = ref("");

async function handleSubmit() {
  if (!form.name || !form.email || !form.message) return;

  loading.value = true;
  error.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: form,
    });
    sent.value = true;
  } catch (err: any) {
    error.value = "送出失敗，請稍後再試";
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="page">
    <span class="crop crop--tl" aria-hidden="true" />
    <span class="crop crop--tr" aria-hidden="true" />
    <span class="crop crop--bl" aria-hidden="true" />
    <span class="crop crop--br" aria-hidden="true" />

    <section class="intro">
      <p class="eyebrow">// 聯絡我們</p>
      <h1>說說看<span class="accent">你在做什麼</span></h1>
      <p class="lead">
        填寫下方欄位，告訴我們專案的大致樣貌，我們通常在一到兩個工作天內回覆。
      </p>
    </section>

    <div v-if="sent" class="success">
      <span class="success__mark">✓</span>
      <div>
        <h3>已收到您的訊息</h3>
        <p>我們會盡快回覆到您留下的信箱。</p>
      </div>
    </div>

    <form v-else class="form" @submit.prevent="handleSubmit">
      <div class="field">
        <label>姓名</label>
        <input v-model="form.name" type="text" placeholder="請輸入您的姓名" />
      </div>
      <div class="field">
        <label>Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="請輸入您的 Email"
        />
      </div>
      <div class="field">
        <label>訊息</label>
        <textarea
          v-model="form.message"
          rows="5"
          placeholder="請輸入您的訊息內容"
        ></textarea>
      </div>

      <p v-if="error" class="error-text">{{ error }}</p>

      <button class="btn" type="submit" :disabled="loading">
        {{ loading ? "送出中…" : "送出訊息" }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.page {
  --bg: #eef1f6;
  --surface: #eef1f6;
  --surface-2: #eef1f6;
  --ink: #171923;
  --ink-dim: #5b6072;
  --accent: #c97a1b;
  --accent-2: #0f8f7e;
  --line: #d7dce6;

  position: relative;
  background: var(--bg);
  color: var(--ink);
  font-family: "IBM Plex Sans", sans-serif;
  padding: 44px 20px 64px;
  animation: fadeIn 0.4s ease;
  min-height: 100vh;
}

.crop {
  position: fixed;
  width: 14px;
  height: 14px;
  pointer-events: none;
  z-index: 40;
  opacity: 0.55;
}
.crop::before, .crop::after { content: ""; position: absolute; background: var(--accent); }
.crop::before { width: 100%; height: 1px; top: 50%; }
.crop::after { height: 100%; width: 1px; left: 50%; }
.crop--tl { top: 14px; left: 14px; }
.crop--tr { top: 14px; right: 14px; }
.crop--bl { bottom: 14px; left: 14px; }
.crop--br { bottom: 14px; right: 14px; }


.intro {
  max-width: 560px;
  padding: 12px 0 40px;
}
.eyebrow {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.8rem;
  color: var(--accent-2);
  margin-bottom: 18px;
}
.intro h1 {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  font-size: clamp(1.9rem, 4.5vw, 2.6rem);
  line-height: 1.24;
  margin-bottom: 16px;
}
.accent { color: var(--accent); }
.lead {
  color: var(--ink-dim);
  font-size: 1rem;
  line-height: 1.75;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 560px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-family: "IBM Plex Mono", monospace;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  color: var(--ink-dim);
  text-transform: uppercase;
}

input, textarea {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 12px 14px;
  color: var(--ink);
  font-size: 0.95rem;
  font-family: "IBM Plex Sans", sans-serif;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}
input:focus, textarea:focus {
  border-color: var(--accent-2);
}
input::placeholder, textarea::placeholder {
  color: #5c6079;
}

.error-text {
  color: #ef8b7f;
  font-size: 0.85rem;
}

.btn {
  align-self: flex-start;
  padding: 12px 30px;
  background: var(--accent);
  color: #1a1204;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover:not(:disabled) {
  background: #ffbc57;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  max-width: 560px;
  padding: 22px 24px;
  border-radius: 8px;
  background: rgba(15, 143, 126, 0.08);
  border: 1px solid var(--accent-2);
}
.success__mark {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  background: var(--accent-2);
  color: #0a1c19;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}
.success h3 {
  font-family: "Space Grotesk", sans-serif;
  margin-bottom: 4px;
  color: var(--ink);
}
.success p {
  color: var(--ink-dim);
  font-size: 0.9rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: none; }
}

@media (max-width: 960px) {
  .page { padding: 36px 16px 48px; }
}
@media (max-width: 640px) {
  .crop { display: none; }
  .btn { width: 100%; text-align: center; }
}
</style>

<style>
html,
body {
  background: #eef1f6;
  margin: 0;
}
</style>