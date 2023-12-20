<template>
  <div v-if="module" class="module-card">
    <div @click="$bvModal.show('masterclass-video-modal');$emit('openVideo', module.video)" class="module-card__video">
      <img alt="play button" height="45px" src="https://webstatic.stackfinance.co/website/play-black-btn.png">
      <video class="" :src="module.video" :poster="module.thumb" preload="metadata"></video>
    </div>
    <nuxt-link class="cursor-pointer text-decoration-none" :to="`/masterclass/${module.slug}/${module.id}/`">
      <div class="mt-3 mt-sm-4">
        <p class="fo-18 fo-sm-24 mb-0 text-lowercase fw-500">module {{ module.id }}</p>
        <h4 class="font-weight-bold fo-24 fo-sm-32 mt-0 text-lowercase">{{ module.name }}</h4>
        <p class="text-lowercase fo-sm-18">{{ module.description.slice(0, 117) }}...</p>
      </div>
      <div class="mt-4 mt-sm-5">
        <p>
          <b class="me-2 text-color">read more</b>
          <img alt="arrow" height="15" class="rotate-z-90n"
               src="https://webstatic.stackfinance.co/website/faq-arrow.svg">
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  module: Object
});
</script>

<style lang="scss" scoped>
.module-card {

  @media screen and (min-width: 1200px) {
    max-width: 550px;
  }

  @media screen and (min-width: 1500px) {
    max-width: 650px;
  }

  &__video {
    position: relative;
    cursor: pointer;
    border-radius: 16px;
    overflow: hidden;
    transition-duration: 0.3s;
    height: 175px;
    max-width: 100%;

    @media screen and (min-width: 1200px) {
      height: 350px;
    }

    @media screen and (min-width: 1500px) {
      height: 400px;
    }

    > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    video {
      height: 175px;

      @media screen and (min-width: 1200px) {
        height: 400px;
      }
    }
  }
}
</style>
