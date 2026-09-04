<script setup lang="ts"></script>

<template>
  <ClientOnly to="body">
    <video
      class="bg-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      src="/videos/bg-video.mp4"
    ></video>
    <div class="bg-video-overlay"></div>
  </ClientOnly>

  <slot />
</template>

<style>
/* ------- 全螢幕循環背景影片（所有頁面共用） ------- */
.bg-video {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
}
.bg-video-overlay {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* 影片上加一層淡淡的白/暗遮罩，讓文字更容易閱讀，可依需求調整透明度或移除 */
  background: rgba(255, 255, 255, 0.35);
}

html,
body {
  background: #ffffff;
  margin: 0;
}
</style>
