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
    <h1>✉️ 聯絡我們</h1>
    <p>有任何問題或合作需求，歡迎填寫以下表單聯繫我們。</p>

    <div v-if="sent" class="success">✅ 已收到您的訊息，我們會盡快回覆！</div>

    <div v-else class="form">
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
      <button class="btn" @click="handleSubmit">送出訊息</button>
    </div>
  </div>
</template>

<style scoped>
.page {
  animation: fadeIn 0.3s ease;
  max-width: 560px;
}
h1 {
  font-size: 2rem;
  margin-bottom: 12px;
}
p {
  color: #a0a0c0;
  line-height: 1.7;
  margin-bottom: 28px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
label {
  font-size: 0.85rem;
  color: #a0a0c0;
}

input,
textarea {
  background: #1a1d27;
  border: 1px solid #2a2d3a;
  border-radius: 8px;
  padding: 10px 14px;
  color: #e8e8f0;
  font-size: 0.95rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
}
input:focus,
textarea:focus {
  border-color: #7c6df0;
}

.btn {
  align-self: flex-start;
  padding: 10px 28px;
  background: #7c6df0;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn:hover {
  background: #6a5ce0;
}

.success {
  padding: 16px 20px;
  border-radius: 10px;
  background: rgba(124, 109, 240, 0.1);
  border: 1px solid #7c6df0;
  color: #a99bf5;
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
