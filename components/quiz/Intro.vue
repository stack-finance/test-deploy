<template>
  <section class="intro-section">
    <div class="d-flex">
      <video v-if="!isMobile" ref="welcomeVid" class="d-block mx-auto br-20" height="450" data-not-lazy
             poster="https://webstatic.stackfinance.co/website-v4/flag-thumbnail.webp"
             @click="togglePlayBack()">
        <source src="https://webstatic.stackfinance.co/aphrodite/videos/flagship.mp4" type="video/mp4">
      </video>
      <div class="ms-sm-5">
        <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <h1 class="text-white fo-32 fo-sm-56 fw-500 heading-glare text-center text-sm-start">let's have a quick <br>coffee chat</h1>
          <img src="https://webstatic.stackfinance.co/website-v4/coffee-mug.webp" alt="coffee mug" height="130">
        </div>
        <div class="intro-grid">
          <div class="app-card br-12 p-4 p-sm-5">
            <h2 class="text-white fo-18 fo-sm-20 font-weight-bold">help us understand your investment personality</h2>
            <p class="text-color-lt fo-sm-18">everyone’s financial goals and risk tolerance are unique. let’s find out yours.</p>
          </div>
          <div class="app-card br-12 p-4 p-sm-5">
            <h3 class="text-white fo-18 fo-sm-20 font-weight-bold">you’ll have your own personalized portfolio</h3>
            <p class="text-color-lt fo-sm-18">we’ll curate the right mix of assets to achieve your financial goals based on your answers.</p>
          </div>
        </div>
        <button class="btn app-btn--white app-btn--sm" :class="{'w-100': isMobile}" @click="$emit('begin', true)">
          let’s begin
        </button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
defineProps({isMobile: Boolean});

defineEmits(['begin']);

const welcomeVid = ref<HTMLVideoElement | null>(null);
function togglePlayBack() {
  if (!welcomeVid.value) {
    return;
  }

  const vid: HTMLVideoElement = welcomeVid.value;
  vid.paused ? vid.play() : vid.pause();
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/helpers/index.scss';

.heading-glare {
  position: relative;

  &:before {
    content: ' ';
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    top: -25%;
    width: 250px;
    height: 250px;
    position: absolute;
    background-color: $primary-color;
    border-radius: 50%;
    -webkit-filter: blur(100px);
    filter: blur(100px);
    opacity: .4;
    z-index: 0;
    pointer-events: none;

    @media screen and (min-width: 768px) {
      left: 0;
      top: 50%;
      -webkit-transform: translate(0, -50%);
      -ms-transform: translate(0, -50%);
      transform: translate(0, -50%);
    }
  }
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr;
  margin: 32px 0;
  grid-gap: 32px;

  @media screen and (min-width: 768px) {
    margin: 48px 0;
    grid-gap: 48px;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
