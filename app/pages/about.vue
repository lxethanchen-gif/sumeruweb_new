<script setup lang="ts">
useHead({
  title: "關於我們 | MySite",
  meta: [
    {
      name: "description",
      content: "了解諦深法師的生平、弘法歷程與相關事件。",
    },
    { property: "og:title", content: "關於我們 | MySite" },
    {
      property: "og:description",
      content: "了解諦深法師的生平、弘法歷程與相關事件。",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap",
    },
  ],
});

// 輪播圖片：請將對應圖片放入 public/about-images/ 目錄下
const slides = [
  // { src: "/images/author/author-1.jpg", alt: "" },
  // { src: "/images/author/author-2.jpg", alt: "" },
  { src: "/images/author/author-3.jpg", alt: "" },
  { src: "/images/author/author-4.jpg", alt: "" },
  { src: "/images/author/author-5.jpg", alt: "" },
  { src: "/images/author/author-6.jpg", alt: "" },
  { src: "/images/author/author-7.jpg", alt: "" },
  { src: "/images/author/author-8.jpg", alt: "" },
];

const activeIndex = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;
const AUTOPLAY_MS = 4500;

function goTo(i: number) {
  activeIndex.value = i;
}
function next() {
  activeIndex.value = (activeIndex.value + 1) % slides.length;
}
function startAutoplay() {
  stopAutoplay();
  timer = setInterval(next, AUTOPLAY_MS);
}
function stopAutoplay() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

onMounted(() => {
  startAutoplay();
});
onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<template>
  <div class="page">
    <!-- 自動輪播圖片 -->
    <section
      class="carousel"
      @mouseenter="stopAutoplay"
      @mouseleave="startAutoplay"
    >
      <div class="carousel-viewport">
        <transition-group name="fade-slide" tag="div" class="carousel-track">
          <img
            v-for="(s, i) in slides"
            v-show="i === activeIndex"
            :key="s.src"
            :src="s.src"
            :alt="s.alt"
            class="carousel-img"
          />
        </transition-group>
      </div>
      <div class="dots">
        <button
          v-for="(s, i) in slides"
          :key="s.src + '-dot'"
          class="dot"
          :class="{ active: i === activeIndex }"
          :aria-label="`第 ${i + 1} 張圖片`"
          @click="goTo(i)"
        ></button>
      </div>
    </section>

    <!-- 文字內容 -->
    <!-- <section class="content">
      <!-- <p class="eyebrow reveal" style="--delay: 0s">關於諦深</p>
      <h1 class="reveal" style="--delay: 0.08s">
        呂合（諦深）<br /><span class="accent">生平與弘法紀事</span>
      </h1> -->
      <!-- <p class="lead reveal" style="--delay: 0.16s">
        呂合（1962年12月14日－），法號諦深，生於中華人民共和國，是一名漢傳佛教僧人、作家與異議人士。他因公開批評中國共產黨的宗教政策而引發關注。據對話基金會（The
        Dui Hua
        Foundation）及歐洲捍衛人權與宗教自由協會（ADHRRF）等人權組織報告，自2025年起，其佛教團體的成員在中國大陸多地被拘捕。中國當局指控其部分追隨者涉嫌「利用迷信破壞法律實施罪」。
      </p> -->

      <!-- <div class="divider reveal" style="--delay: 0.2s"></div>

      <article class="block reveal" style="--delay: 0.24s">
        <h2>生平與活動</h2>
        <p>
          呂合於1962年出生於遼寧省瓦房店市。根據其官方網站「須彌山佛國網」的簡介，他於2001年在江西省吉安市的淨居寺出家，原因據稱與其佛法體驗有關。此後，他以法號諦深進行宗教活動，並通過建立網站等方式傳播其佛法思想。
        </p>
        <p>
          2000年，中國地方媒體《青島晚報》曾刊載其致信政府部門的文章，對家鄉嶗山因商業開發可能導致的環境問題表達關切。
        </p>
        <p>
          2025年，呂合以本名在台灣出版一部匯集其政治評論的著作，書名為《誰在幫助台灣
          誰在幫助民主社會 誰在推動人類文明
          誰在拯救這個世界？》。書中表達對共產主義和中國共產黨持批判態度。
        </p>
      </article> -->

      <!-- <article class="block reveal" style="--delay: 0.3s">
        <h2>佛學思想與弘法</h2>
        <p>
          根據諦深的著述和講說，他重視戒律與實修，主張嚴淨毗尼，並闡述持戒的意義與重要性。他為在家弟子制定了「二十二戒」，作為修行準則。
        </p>
        <p>
          他利用現代網際網路進行弘法，其弟子創立「須彌山佛國網」網站及相關應用平台，用於發布其開示內容。自2020年起，他通過YouTube頻道進行長時間線上講法，並與觀眾互動。
        </p>
      </article>

      <article class="block reveal" style="--delay: 0.36s">
        <!-- <h2>事件</h2> -->

        <!-- <h3>2024年南華寺事件</h3>
        <p>
          據海外中文媒體報道，2024年12月，三名自稱是諦深弟子的比丘尼在廣東省南華寺附近與地方執法人員發生爭執。事後，這三人在網絡發布視頻，內容包含對中國共產黨及政府領導人的批評，引發關注。
        </p>

        <h3>2025年大規模拘捕事件</h3>
        <p>
          據美國人權組織對話基金會報告，中國公安部門自2025年5月29日起，在多個省市對諦深的追隨者展開了拘捕行動。歐洲非政府組織「捍衛人權與宗教自由協會」（ADHRRF）在其報告中將此系列事件稱為一次「全國性鎮壓」（National
          Crackdown）。
        </p>
        <p>
          對話基金會的報告指出，被拘捕者包括僧侶和在家信徒，其中據稱有台灣籍人士。報告還提及，部分被捕者被要求簽署放棄其信仰的「悔過書」。台灣《Newtalk新聞》引述一名流亡海外的信徒的說法，稱逮捕過程「非常暴力」，被捕者在審訊期間疑遭毆打和辱罵，並被要求承認諦深為「騙子」。
        </p>
        <p>
          對話基金會確認，部分被拘者已被刑事拘留，其涉嫌罪名為《中華人民共和國刑法》第三百條的「利用迷信破壞法律實施罪」。
        </p> -->
      <!-- </article> -->

      <!-- <div class="divider reveal" style="--delay: 0.4s"></div> -->

      <article class="block story reveal" style="--delay: 0.44s">
        <!-- <h2>諦深大師因緣紀事</h2> -->
        <p>
          諦深大師俗姓呂，淨土獲證，禪宗傳承。上乘清淨願力為諦，下令眾生世界業障破滅稱深。諦深法號為佛光普照神僧呼喚所得。落髮戒名釋迦妙生，祖籍山東即墨。佛曆2506年11月18日（農曆壬寅年11月18日）生於遼寧省瓦房店，生後至3歲不會說話，會講話後秉性甚憨，家人以為有疾！後因文革風暴，隨父母回遷祖籍。
        </p>

        <ol class="story-list">
          <li>26歲與當地寺院結緣，時寺內無出家人住。</li>
          <li>
            初入寺廟助僧賣票，因離家太遠，夜於院外會計室獨自休息，忽見牆體虛盡，佛光普照，有神僧獅子吼音三稱諦深，因此得名。
          </li>
          <li>
            入寺前未見過經書亦未入過其它寺院，不懂佛門諸事。其後，多與佛門道人來往，並獲結緣《金剛經》，於居士處獲《華嚴經》、於寺得《法華經》、於居士處獲《楞嚴經》。
          </li>
          <li>
            與一出家道僧緣分甚大，並為其所動獨自發心出家，於山底被一拉比丘尼車送之寶寺，當夜見韋陀菩薩顯聖，翌日下山。
          </li>
          <li>
            首訪大乘寺，未入山門即聞鐘鼓齊鳴，天人誦經，禁不住讚曰：「好聽，好聽，好聽！」時大乘寺只一道僧與其弟子兩人止住！於次日夜韋陀菩薩贈無字真經。
          </li>
          <li>
            於租住屋內見一草履蟲附於牆體，便薰香送之，草履蟲忽然落於地上行將斃命，此時，手不能動，香條被彎曲，急念佛號並於床下拜佛。
          </li>
          <li>
            於深夜，猛然金紅光地藏菩薩顯聖，居然並不認得，問出家人並見其形象與地藏殿地藏菩薩一樣，只是呈紅金瑞相，方知是大願地藏菩薩示現。
          </li>
          <li>
            於住處研《楞嚴經》，一日居士來訪，正碰小雨，有術士不用火源，雨中以手指點燃浸濕報紙，見後忽明《楞嚴經》中「性火真空，性空真火，周遍法界、遍虛空界，隨眾生心應所知量」，大喜，時撐傘圍觀者數十。
          </li>
          <li>於住處閱《楞嚴經》，世界虛盡放大光明。</li>
          <li>
            2001年應戒，於夢中見一高大琉璃廟宇轟然倒塌，於伽藍殿跪香一夜，不久，駐山並行腳四方。
          </li>
        </ol>
      </article>
    </section>
  </div>
</template>

<style scoped>
.page {
  --bg: #ffffff;
  --gold: #8c6e1b;
  --gold-dim: #b0904a;
  --line: #ecdfb8;

  position: relative;
  background: var(--bg);
  color: var(--gold);
  /* font-family: "Noto Serif TC", serif; */
  padding: 0 0 72px;
  min-height: 100vh;
}

/* ===== 輪播 ===== */
.carousel {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 40px auto 0;
  padding: 0 20px;
}
.carousel-viewport {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 0 18px 40px rgba(140, 110, 27, 0.18);
  background: #f4ead0;
  animation: carouselIn 0.3s ease both;
}
.carousel-track {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 28px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: scale(1.03);
}
.fade-slide-leave-to {
  opacity: 0;
}

.dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: var(--line);
  cursor: pointer;
  padding: 0;
  transition:
    background 0.25s ease,
    transform 0.25s ease;
}
.dot.active {
  background: var(--gold);
  transform: scale(1.25);
}

/* ===== 文字內容 ===== */
.content {
  max-width: 720px;
  margin: 0 auto;
  padding: 48px 20px 0;
}
.eyebrow {
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  color: var(--gold-dim);
  margin-bottom: 16px;
}
.content h1 {
  font-family: "Space Grotesk", "Noto Serif TC", serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4.5vw, 2.6rem);
  line-height: 1.35;
  color: var(--gold);
  margin-bottom: 24px;
}
.accent {
  color: var(--gold);
}
.lead {
  color: rgb(255, 200, 0);
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.95;
  margin-bottom: 8px;
}

.divider {
  height: 1px;
  background: var(--line);
  margin: 36px 0;
}

.block h2 {
  font-family: "Space Grotesk", "Noto Serif TC", serif;
  font-size: 1.3rem;
  color: var(--gold);
  margin-bottom: 16px;
}
.block h3 {
  font-size: 1.05rem;
  color: rgb(255, 200, 0);
  font-weight: 600;
  margin: 20px 0 8px;
}
.block p {
  color: rgb(255, 200, 0);
  font-weight: 600;
  font-size: 0.98rem;
  line-height: 2;
  margin-bottom: 14px;
}
.block + .block {
  margin-top: 8px;
}

.story-list {
  margin: 18px 0 0;
  padding-left: 1.4em;
  color: rgb(255, 200, 0);
  font-weight: 600;
}
.story-list li {
  font-size: 0.96rem;
  line-height: 1.95;
  margin-bottom: 12px;
}

/* ===== 進場特效 ===== */
.reveal {
  opacity: 0;
  animation: fadeUp 0.7s ease forwards;
  animation-delay: var(--delay, 0s);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes carouselIn {
  from {
    opacity: 0;
    transform: translateY(-12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 640px) {
  .carousel {
    margin-top: 24px;
  }
  .content {
    padding-top: 36px;
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
