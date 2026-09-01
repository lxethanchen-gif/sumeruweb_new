<script setup lang="ts">
interface Store {
  name: string;
  price: string;
  url: string;
}

const bookTitle = "誰在幫助臺灣\n誰在拯救這個世界？";
const bookAuthor = "呂合 著";

const stores: Store[] = [
  { name: "蝦皮購物", price: "658", url: "https://shopee.tw/-%E8%8F%AF%E9%80%9A%E6%9B%B8%E5%9D%8A-%E8%AA%B0%E5%9C%A8%E5%B9%AB%E5%8A%A9%E8%87%BA%E7%81%A3-%E8%AA%B0%E5%9C%A8%E5%B9%AB%E5%8A%A9%E6%B0%91%E4%B8%BB%E7%A4%BE%E6%9C%83-%E8%AA%B0%E5%9C%A8%E6%8E%A8%E5%8B%95%E4%BA%BA%E9%A1%9E%E6%96%87%E6%98%8E-%E8%AA%B0%E5%9C%A8%E6%8B%AF%E6%95%91%E9%80%99%E5%80%8B%E4%B8%96%E7%95%8C-%E5%91%82%E5%90%88-%E4%BB%A5%E6%88%92%E7%82%BA%E5%B8%AB-9786269643424-i.9366020.27239256148?extraParams=%7B%22display_model_id%22%3A270892883325%2C%22model_selection_logic%22%3A3%7D&sp_atk=7b18d9af-884f-44ae-bb99-e5954c0b9a28&xptdk=7b18d9af-884f-44ae-bb99-e5954c0b9a28&is_from_login=true" },
  { name: "誠品線上", price: "695", url: "https://www.eslite.com/product/10012084572682956912002?attr=xQHwxAoLCP3h3NQGEIihjS0QARokNmE5OWJhYjEtMDAwMC0yMTkzLTg4MzItMTBkOWEyMWQxMmU2KkBkNDkwZDM0NjEzMWUzYmQ5ZjQzOWVkNjlhOWUyYjk3NWI3NzhjOGRmNjQ2Yzg1ZTFiNDY5ODgwN2M2MjQyMGZkMjCQ97IwwvCeFYjfqTiOvp0VnNa3LceW8DDS7u04qOWqLdSynRXsz504n9a3LcmW8DA6DmRlZmF1bHRfc2VhcmNoSAFYAWABaAF6AnRw" },
  { name: "金石堂網路書店", price: "762", url: "https://www.kingstone.com.tw/basic/2015710098771/?lid=search&actid=WISE" },
  { name: "博客來", price: "792", url: "https://www.books.com.tw/products/0011028173?sloc=main" },
  {
    name: "pchome24H 全球購物",
    price: "792",
    url: "https://24h.pchome.com.tw/books/prod/DJBP4S-A900J38JI"
  },
];

// 封面圖實際放在 public/images/book/cover.webp,用絕對路徑引用即可(Nuxt public 目錄)
// 如果改放在 assets/ 目錄,改用 import coverSrc from '~/assets/images/book/cover.webp'
const coverSrc = "/images/book/cover.webp";
</script>

<template>
  <section class="stage">
    <div class="frame">
      <div class="heading">
        <h1>誰在幫助臺灣 誰在拯救這個世界？</h1>
        <p>{{ bookAuthor }} · 全球通路購買連結</p>
      </div>

      <div class="row">
        <a
          v-for="store in stores"
          :key="store.name"
          class="card"
          :href="store.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div class="thumb">
            <img
              :src="coverSrc"
              :alt="`《誰在幫助臺灣 誰在拯救這個世界？》書封 — ${store.name}`"
            />
          </div>
          <div class="body">
            <span class="store">{{ store.name }}</span>
            <p class="title">
              誰在幫助臺灣<br />
              誰在拯救這個世界？
            </p>
            <div class="spacer" />
            <div class="price">
              <span class="cur">NT$</span>
              <span class="num">{{ store.price }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* 若專案尚未引入 Noto Serif TC / Noto Sans TC,可在 nuxt.config.ts 的 app.head.link
   加入:
   { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500;700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap' }
*/

.stage {
  --ink: #1a1a1a;
  --dim: #6b6b68;
  --red: #c81d25;
  --line: #ececea;
  --shadow:
    0 10px 24px -8px rgba(20, 20, 20, 0.14), 0 2px 6px rgba(20, 20, 20, 0.06);
  --shadow-hover:
    0 16px 32px -8px rgba(20, 20, 20, 0.18), 0 4px 8px rgba(20, 20, 20, 0.08);

  min-height: 100vh;
  padding: 56px 28px;
  background: #ffffff;
  color: var(--ink);
  font-family: "Noto Sans TC", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.frame {
  max-width: 1180px;
  margin: 0 auto;
}

.heading {
  margin-bottom: 32px;
}

.heading h1 {
  font-family: "Noto Serif TC", serif;
  font-weight: 700;
  font-size: clamp(19px, 2.2vw, 24px);
  margin: 0 0 4px;
  color: var(--ink);
}

.heading p {
  margin: 0;
  font-size: 13px;
  color: var(--dim);
}

.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.card {
  background: #ffffff;
  border-radius: 6px;
  box-shadow: var(--shadow);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

.card .thumb {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  background: #f4f3f1;
}

.card .thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card .body {
  padding: 16px 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.card .store {
  font-size: 11.5px;
  color: var(--red);
  font-weight: 700;
}

.card .title {
  font-family: "Noto Serif TC", serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.45;
  color: var(--ink);
  margin: 0;
}

.card .spacer {
  flex: 1;
}

.card .price {
  margin-top: 4px;
  padding-top: 10px;
  border-top: 1px solid var(--line);
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.card .price .cur {
  font-size: 11px;
  color: var(--dim);
}

.card .price .num {
  font-family: "Noto Serif TC", serif;
  font-weight: 700;
  font-size: 19px;
  color: var(--ink);
}

@media (max-width: 980px) {
  .row {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 620px) {
  .stage {
    padding: 36px 18px;
  }
  .row {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .card .body {
    padding: 12px 12px 14px;
  }
}
</style>
