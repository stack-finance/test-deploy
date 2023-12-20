<template>
  <div class="opp-card">
    <div class="opp-card__wrapper">
      <div class="d-flex w-100 align-items-center">
        <img alt="glitter" height="48" :src="opportunity.icon">
        <div class="ms-4">
          <h4 class="fo-18 fo-sm-24 font-weight-bold text-white mb-0">{{ opportunity.name }}</h4>
          <p class="text-dull-white mb-0">{{ opportunity.annualizedReturns.meta.horizon }} investment horizon</p>
        </div>
      </div>
      <div class="row mt-5 mb-4 bdr-b">
        <div class="col-sm-6">
          <p class="text-white font-weight-bold mb-0">
            {{ opportunity.annualizedReturns.meta['5yr'] ? opportunity.annualizedReturns.meta['5yr'] : opportunity.annualizedReturns.meta['3yr'] }}%
          </p>
          <p class="text-dull-white mb-4">
            {{ opportunity.annualizedReturns.meta['5yr'] ? 5 : 3 }} year CAGR
          </p>
        </div>
        <div class="col-sm-6">
          <p class="text-white font-weight-bold mb-0">{{ opportunity.annualizedReturns.meta.benchmarkReturn }}%</p>
          <p class="text-dull-white mb-4">{{ opportunity.annualizedReturns.meta.benchmark }}</p>
        </div>
      </div>
      <p class="text-dull-white fw-500 text-truncate">
        {{ opportunity.pageDesc }}
      </p>
    </div>
    <NuxtLink :to="'/opportunities-thematic-investing/' + opportunity.slug + '/'" class="opp-card__footer">
      <span>view details</span>
      <img height="15" src="https://webstatic.stackfinance.co/website-v4/chev-blue.webp" alt="chev-blue right">
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  opportunity: {
    type: Object,
    required: true
  }
});
</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/index';

.opp-card {
  display: flex;
  overflow: hidden;
  flex-direction: column;
  border-radius: 24px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, #222 0%, $dark-color 100%, $dark-color 100%);
  border-image-slice: 77%;
  background-image: linear-gradient(to bottom, $dark-color, $dark-color), linear-gradient(to bottom, #222 0%, $dark-color 100%, $dark-color 100%);
  background-origin: border-box;

  &__wrapper {
    padding: 24px;
    @media screen and (min-width: 768px) {
      padding: 32px;
    }
  }

  &__footer {
    cursor: pointer;
    padding: 16px 24px;
    background-color: rgba(72, 147, 207, 0.04);
    color: $blue;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      text-decoration: none;
    }

    @media screen and (min-width: 768px) {
      font-size: 20px;
      padding: 24px 32px;
    }
  }
}
</style>
