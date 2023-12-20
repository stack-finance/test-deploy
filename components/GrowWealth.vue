<template>
  <section class="grow-wealth">
    <div class="row">
      <div class="col-sm">
        <h3 class="block-heading">it’s time to grow your wealth</h3>
        <a href="https://stack-wealth.app.link/YfSEs3oWOCb"
           rel="noreferrer noopener" v-if="isMobile" class="app-btn mt-4 d-inline-block mx-auto d-table">
          <img src="https://webstatic.stackfinance.co/website-v4/stores-icons.webp" height="28" alt="store icon">
          <span class="ms-2">Get Started</span>
        </a>
        <button v-else class="app-btn mt-sm-5" @click="$emit('download', true)">
          <img src="https://webstatic.stackfinance.co/website-v4/stores-icons.webp" height="28" alt="store icon">
          <span class="ms-2">Get Started</span>
        </button>
        <div class="d-flex align-items-center mt-4" :class="{'flex-column': isMobile}">
          <img src="https://webstatic.stackfinance.co/website-v4/users.webp" alt="3 users" height="30">
          <span class="text-white ms-3 mt-4 mt-sm-0">1+ Lac investors are growing their wealth with Stack.</span>
        </div>
      </div>
      <div class="col-sm">
        <img class="img-fluid" :src="img ?? 'https://webstatic.stackfinance.co/website-v4/grow-mob.webp'" alt="stack mb">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps({
  isMobile: Boolean,
  hasBgColor: Boolean,
  img: String
});

defineEmits(['download']);

</script>

<style lang="scss" scoped>
@import '../assets/scss/helpers/index.scss';

.grow-wealth {
  background-size: cover;
  background-image: url('https://webstatic.stackfinance.co/website-v4/grow-bg.webp');
  padding: 48px 16px 0;
  @extend .px-sm-128;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }

  .block-heading {
    color: #FFF;
    font-weight: bold;
    font-size: 32px;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
      font-size: 64px;
      margin-top: 80px;
    }
  }
}
</style>
