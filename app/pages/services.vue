<script setup lang="ts">
useHead({
  title: "書籍介紹",
  meta: [
    {
      name: "description",
      content: "呂合先生（諦深大師）2019至2023年臉書評論文章彙整。",
    },
    { property: "og:title", content: "書籍簡介" },
    {
      property: "og:description",
      content: "呂合先生（諦深大師）2019至2023年臉書評論文章彙整。",
    },
  ],
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;600;700&display=swap",
    },
  ],
});

const coverImages = [
  {
    src: "/images/book/cover.webp",
    alt: "書籍封面：誰在幫助臺灣，誰在拯救這個世界",
  },
  { src: "/images/book/cover1.webp", alt: "目錄頁 1" },
  { src: "/images/book/cover2.webp", alt: "目錄頁 2" },
  { src: "/images/book/cover3.webp", alt: "內文頁 1" },
  { src: "/images/book/cover4.webp", alt: "內文頁 2" },
  { src: "/images/author/author-1.jpg", alt: "內文頁 3" },
];

const activeSlide = ref(0);
let slideTimer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
  slideTimer = setInterval(() => {
    activeSlide.value = (activeSlide.value + 1) % coverImages.length;
  }, 4000);
});

onBeforeUnmount(() => {
  if (slideTimer) clearInterval(slideTimer);
});

const paragraphs = [
  `本書彙整呂合先生（諦深大師之俗名）於2019至2023年間於臉書所發表的重要評論文章。全書超過三十萬字，論述精彩生動，觀點精準剖析全球政治勢力操作，主張人道關懷，倡言改革建議。自發表文評以來，誠摯的建言已逐一受各方民主陣線採納受用。呂合先生不僅為台灣民主制度獻策，更祈願台灣遠離極權陰影，抵禦共產滲透，走向富足與智慧的璀璨未來！`,
  `這不只是一本民主政治評論集，更是一場關於自由、信念與文明的長思。`,
  `◎2022年01月20日 星期四下午10:22\n臺海、俄烏局勢分析：`,
  `任何戰爭都是有起因的！隨著社會的進步，戰爭的起因越來越複雜化！因為：誰都不會因為一個麵包，去發動一場死傷幾百萬人的戰爭！但是，在比較低端的社會中，就會因為孩子們爭奪一塊兒橡皮糖，引發幾個國家的大戰！\n現代世界的國家分為：文明民主國家與獨裁專制國家兩大陣營！由於獨裁專制國家的政治文明大大的低於文明民主國家，這就導致很多戰爭低端引發的因素存在！當然，再低端，也不會存在幾千年以前那樣的、幼稚的、戰爭起因！\n正戰雲密布的臺海、俄烏危局，是什麼原因引發到：劍拔弩張隨時開戰的呢？`,
  `1、發動戰爭的原因！\n為什麼普京要侵略烏克蘭、而且得寸進尺！侵占了克里米亞還不行，還要占領整個烏克蘭呢？說是解決邊境俄羅斯居民的問題，實際上這只是個藉口！原因其實就一個：吞併克里米亞是為了擁有黑海，吞併整個烏克蘭則是為了資源和進入歐盟的大通道、雄霸黑海的整個海域！\n為什麼共產黨要侵略臺灣？臺灣有啥？其實，共產黨就是因為臺灣堵在了家門口，吞併了臺灣，就能直接面向整個大洋！這位置的軍事價值實在是太重要了，所以，才要吞併臺灣！\n原因明確了，那麼，危局如何解析？`,
  `2、發動戰爭與保衛戰！\n有了戰爭因素，又有了發動戰爭的原因，那麼，戰爭的對手是誰？這又涉及到另一個名詞：戰爭保衛！保衛戰！\n什麼是戰爭保衛戰？就是有人搶你的東西，你拼命的保護它並試圖搶回來！\n什麼國家、什麼人會參加保衛戰？一切涉及利益傷害的利益衝突國家，都應當、必須參加反侵略保衛戰！如果因為自己的誤判，不參加會戰，最終必然喪失自己或本國的利益！`,
  `3、臺海涉及的利益面、利益鏈、利益國家；烏克蘭涉及的利益面、利益鏈、利益國家！\n臺海涉及：日本、韓國、澳大利亞、東南亞、南亞，及美國、歐盟的根本利益！其中，涉及這些國家的國家安全、海洋運輸、海洋能源資源、海洋經濟資源的存在！如果臺灣被占，這些國家的所有資源都會遭到掠奪！`,
  `4、烏克蘭涉及：歐盟21國的國家安全、國家利益，還涉及西亞各國的利益！如果烏克蘭被吞併，俄羅斯會絕對能控制歐盟27國與西亞五國！甚至能夠控制非洲相關國家！這個事情太大了！\n俄烏局勢所涉及的國際安全、國家經濟等各個利益面、利益鏈甚至能夠掌控美國！\n所以，臺海與俄烏危局是考驗歐美的第三次世界大戰！`,
  `5、臺海、俄烏危局的保衛困局：歐美反應遲鈍！\n臺海、俄烏危局實際上是一個戰局的兩個點！從戰局的狀態分析，俄羅斯和中國是有戰爭盟約軸心國關係的！\n臺海、俄烏直接對歐美各國形成的戰略夾擊，因為戰線之長前所未有！這能導致：\na、歐美國家戰略麻痹、戰略疏忽導致誤判形勢的現實！\nb、戰爭走向各個擊破，歐美群龍無首，各自焦灼！各國都只玩嘴皮子的狀態！\nc、世界格局發生反轉，歐美不再是世界的領導者！\n從現在歐美政界的反應看，總統們麻痹到還停留在外交努力上！刀架在脖子上快要掉腦袋了，這人還閉著眼琢磨，對方是不是想拿刀砍自己的脖子呢！歐美可能氣數已盡，已經出不了力挽狂瀾的政治奇才！20220120`,
  `◎2022年01月21日 星期五下午05:05\n談談：新時期的戰爭形勢！`,
  `先從國際問題的結果入手，扒開近40年，世界政客們留下的歷史遺產，看看都是些什麼？\n大家也認真的想一想，21世紀初，蘇、中、美、歐盟到底誰是贏家？未來到底誰會輸？\n很多歐美政要、專家，願意用美蘇冷戰獲勝了的思維，模式化的解決國際核心問題，結果，節節敗退！幾乎已經輸光了之前先輩們、贏得的所有利益！\n從哈薩克斯坦戰、武漢病毒戰、俄烏衝突戰、臺海布局戰、阿富汗戰、克里米亞戰、南海爭奪戰，這些絕對改變世界格局的戰爭中，俄羅斯、中國、都是具有主宰地位的贏家！\n歐美即使是對伊朗、朝鮮這樣的國家，也不能算是贏家，我評價它：打了個平手！\n很多戰例表明，美國已經在民主黨阿斗總統們的努力下，逐步退出歷史舞臺！\n世界目前出現的問題，集約反應出：歐美現在的形勢，是停板下跌狀態！\n我排蘇、中、美、歐這個排序，其實，這是對歐美國家很客氣的排序了！大家可能會不以為然！咱們還是讓事實說話吧！\n大家一定清楚：\n1，克里米亞，誰吞併了？俄羅斯吧！\n2，經濟順差誰拿走了？中國吧！\n3，武漢病毒，誰投到人群中去的，中國吧！\n4，誰是最大的輸家？是歐美吧！\n為什麼列：蘇這個已經不存在了名稱，實際上，蘇聯已經在美國民主黨的努力下，逐步的恢復了霸權版圖！哈薩克斯坦不就是個例子嗎？如果歐美還不覺醒，恐怕蘇聯的版圖比以前還要大！白俄羅斯不就是個例子？`,
  `咱一條一條的解給大家聽：\n1，俄羅斯通過熱戰，閃電占吞併了黑海核心戰略要地克里米亞，烏克蘭犧牲了上萬軍民！這是什麼戰？說熱戰沒問題吧？\n現在，俄羅斯、中共率領伊朗、朝鮮、委內瑞拉等一眾小弟，正在陳兵百萬，準備下一步各個擊破形式的俄烏、臺海侵略戰爭！\n俄羅斯通過熱戰，直接控制了哈薩克斯坦，就是這幾天的事兒，這絕對是熱戰，對吧？因為它是通過槍炮死了不少人占領的，這當然是熱戰！\n最後，留給歐美政要的就只剩面子上、面紅耳赤的作秀了吧？\n聽聽：我們要嚴厲制裁！這是不是政治化妝？這是：你的陣地被敵人拔掉了，底褲都輸光了，還嘴硬對不？\n寫文章，用這些話不好聽、不文明！這恰恰就是現實、實在話！大家還能想起來菲律賓總統杜特爾特、是怎麼在國際會議的公開場合說：美國總統奧巴馬是妓女養的這個事情吧？他為什麼敢這麼說？\n用中國古語說：這叫風雨欲來風滿樓！\n川普總統為什麼在臺上就站不住呢？這恰恰是美國最根本的問題，這說明，美國的倒下，並不是一個民主黨的事兒，而是，全民的問題！也就是說，美國這個國家已經跌停板了！\n很多專家預測俄羅斯繼續解體、中國崩盤！哈哈，真是些傻瓜！你看看美國之音這個國家媒體的行為，都請了些什麼人？大家不清楚？到時候真正解體的，可能是美國吧？\n我為什麼不斷的在評論欄裡寫評論？因為現在歐美覺醒還不晚，只是，能嗎？能的話，是民主社會的福分！不能的話，這是必然趨勢！`,
  `貼個2014年新聞：\n（美國總統奧巴馬簽署行政命令，對俄羅斯不顧歐美國家的強烈反對，公然入侵烏克蘭吞併克里米亞，進行嚴厲的制裁！禁止向克里米亞出口商品、技術和服務，同時向俄羅斯和烏克蘭一些個人和公司加以制裁。\n奧巴馬說，此舉表明，美國不能接受俄羅斯吞併克里米亞。\n歐盟和加拿大早些時候也通過類似措施，歐盟的制裁措施於週六開始生效。）`,
  `2、經濟順差誰拿走了？這個問題，很多朋友不明白！\n咱們這麼說：你買東西，商家賺錢，賺的是順差吧？如果賺的是逆差，那商家得賠死？\n國際貿易的順差與逆差，與商家的順差與逆差，是完全一樣的！\n中共利用歐美國家的民主空子，將大量的順差賺回大陸，並以這些強大的資金，要脅歐美國家！現實，是不是這樣？大家並不清楚中共從世界上拿走了多少不該拿的錢！我給個數大家別怕：每年都超過2萬億美金！\n說：一個傻瓜被人賣了，還幫人家數錢，現在的歐美不就這樣？\n歐美政要在金融、經濟戰中根本就沒有還手之力！大家可以進商場看看，你買的東西有幾樣不是中國產？\n大家可能認為這有什麼？你想想：當俄羅斯、中共欺負你的時候，你敢反抗不？中共從來就不遵守合約，什麼鳥總統的屁話，人家靠的就是你已經依賴上了，要麼你就死去吧，不對嗎？這種戰爭，歐美根本就是賣血的！美、英、德、法的大企業，幾乎將自己的技術賣光了，這是不是賣血求生啊？\n所以，我認為，歐美現在的問題是覺醒，覺醒後需要穩固的恢復民主文明社會的活力！`,
  `3、武漢病毒搞的全世界都沒法兒活了，聯合國、歐美國家有一個敢說句不字的？這個問題的根本，不是應不應該賠償的問題，是世界怎麼處置的問題，至今，聯合國還在幫著共產黨洗地，為什麼？這才是誰是世界的核心國的最好證明！\n文明不是愚昧，並不是別人殺人，就該殺！那大家都去拿自己的生命餵狼好了！\n這麼說吧：保衛文明是需要戰爭的，因為：現在還有專制、獨裁，還有隨時發生的侵略！\n戰爭分為侵略戰和保衛戰！歐美國家就傻到不知道應當保衛文明嗎？`,
  `4、各個歐美國家的網絡平臺，不是被專制獨裁國家買斷，就是被邪教組織充斥！在各個平臺上混的朋友可能都有體會！\n朋友們要搞明白：要想自己得到幸福，就必須給別人幸福！要生活在文明的社會裡，就必須保衛文明！因為世界是大家的！沒人離開了社會能有快樂！\n要解決這些問題，脫鉤兒是關鍵！只要不脫鉤兒，歐美必死無疑！\n在這裡，就不一一截取新聞報導了，大家天天看新聞！我只是為即將逝去的民主文明感到悲哀，為人類的低谷鳴個鈴罷了！大家為自己的幸福念佛吧！\n20220121`,
];
</script>

<template>
  <div class="page">
    <div class="carousel">
      <transition-group name="slide-fade" tag="div" class="carousel__track">
        <img
          v-for="(img, i) in coverImages"
          v-show="i === activeSlide"
          :key="img.src"
          :src="img.src"
          :alt="img.alt"
          class="carousel__img"
        />
      </transition-group>

      <div class="carousel__dots">
        <button
          v-for="(img, i) in coverImages"
          :key="img.src + '-dot'"
          class="dot"
          :class="{ 'dot--active': i === activeSlide }"
          :aria-label="`第 ${i + 1} 張圖片`"
          @click="activeSlide = i"
        />
      </div>
    </div>

    <article class="doc">
      <p
        v-for="(para, i) in paragraphs"
        :key="i"
        class="para"
        :style="{ animationDelay: `${i * 0.12}s` }"
      >
        {{ para }}
      </p>

      <div class="cta">
        <NuxtLink to="/portfolio" class="cta__btn">前往商品頁面</NuxtLink>
      </div>
    </article>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  /* background: #0b0b0d; */
  min-height: 100vh;
  padding: 0 20px 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel {
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 3 / 4;
  margin: 0 0 44px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(212, 175, 55, 0.15);
}

.carousel__track {
  position: relative;
  width: 100%;
  height: 100%;
}

.carousel__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.9s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
}

.carousel__dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 14px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  border: 1px solid rgba(212, 175, 55, 0.6);
  background: rgba(11, 11, 13, 0.4);
  padding: 0;
  cursor: pointer;
  transition:
    background 0.25s,
    transform 0.25s;
}
.dot--active {
  background: #d4af37;
  transform: scale(1.25);
}

.doc {
  max-width: 720px;
  width: 100%;
  padding-top: 20px;
}

.para {
  /* font-family: "Noto Serif TC", serif; */
  color: #ffc400;
  font-weight: 600;
  font-size: 1.02rem;
  line-height: 2.05;
  letter-spacing: 0.02em;
  white-space: pre-wrap;
  margin: 0 0 2.1em;
  /* text-shadow: 0 0 12px rgba(212, 175, 55, 0.25); */

  opacity: 0;
  transform: translateY(14px);
  animation: fadeInUp 0.7s ease forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(14px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cta {
  display: flex;
  justify-content: center;
  margin-top: 56px;
}
.cta__btn {
  display: inline-block;
  /* font-family: "Noto Serif TC", serif; */
  font-size: 1rem;
  letter-spacing: 0.08em;
  color: #ffd502;
  /* background: #d4af37; */
  border: 2px solid rgba(255, 196, 0, 0.6);
  padding: 14px 40px;
  border-radius: 5px;
  text-decoration: none;
  /* box-shadow: 0 0 22px rgba(212, 175, 55, 0.35); */
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}
.cta__btn:hover {
  background: rgb(255, 200, 0);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgb(255 195 0 / 50%);
}

@media (max-width: 640px) {
  .page {
    padding: 0 16px 72px;
  }
  .carousel {
    margin-bottom: 32px;
  }
  .para {
    font-size: 0.96rem;
    line-height: 1.95;
  }
}
</style>

<style>
html,
body {
  background: #0b0b0d;
  margin: 0;
}
</style>
