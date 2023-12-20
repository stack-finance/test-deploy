<template>
  <main ref="page" class="calculators-main">
    <section class="py-sm-128 px-sm-128 p-4">
      <h1 class="fw-500 text-white text-center fo-32 fo-sm-56 mb-120 bg-glare">
        calculators
      </h1>

      <div class="mt-sm-5">
        <div class="calculator-grid">
          <NuxtLink v-for="(calc, i) in calculators" :key="i" :to="'/calculators/' + calc.slug + '/'"
                    class="app-card-calc"
          >
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <img :alt="calc.title" :src="calc.icon" class="mb-4" data-not-lazy height="32"/>
                <p class="fo-18 fo-sm-24 fw-500 text-white">{{ calc.title }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <span class="fo-sm-18 font-weight-bold text-color-lt">calculate</span>
                <img alt="Arrow" data-not-lazy
                     height="12" src="https://webstatic.stackfinance.co/website-v4/arrow-icon.webp"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <GrowWealth :has-bg-color="true" :is-mobile="isMobile" @download="showModal = true"></GrowWealth>
    <NewsletterBox :is-mobile="isMobile"></NewsletterBox>
    <Footer :is-mobile="isMobile"></Footer>
    <Download v-if="showModal" @close="showModal = $event"></Download>
  </main>
</template>

<script setup lang="ts">
import {getAllCalculators} from '~/composables/repository/useCalculator';

useHead({
  title: 'Financial Calculators | StackWealth - Plan Your Finances',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Use StackWealth\'s free financial calculators to make informed decisions. Calculate savings, ' +
          'investments, loans, and more. Plan your financial future today!'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://stackwealth.in/calculators/`
    }
  ]
});

const showModal = ref(false);
let size = ref<number>(1200);
const page = ref(null);

onMounted(() => {
  if (page.value) {
    size.value = page.value['clientWidth'];
  }
});

let isMobile = ref(false);
watch(() => size.value, () => isMobile.value = size.value < 768);

const { data: calculators } = await useAsyncData('calculators', async () => await getAllCalculators());

</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/variables';

.calculators-main {
  background-color: $text-color;

  .bg-glare {
    position: relative;

    &:before {
      content: ' ';
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -64px;
      width: 250px;
      height: 250px;
      position: absolute;
      background-image: linear-gradient(to right, $primary-color, $pink);
      border-radius: 50%;
      -webkit-filter: blur(60px);
      filter: blur(60px);
      opacity: 0.3;
      z-index: 0;
      pointer-events: none;
    }
  }

  .mb-120 {
    margin-bottom: 120px;
  }

  .calculator-grid {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    margin-top: 32px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 32px 32px;
    }
  }
}
</style>
