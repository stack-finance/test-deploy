<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <div class="text-dull-white">amount (₹)</div>
            <input v-model="initialAmount" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="initialAmount" :max="500000" :min="1000" class="slider" step="1000" type="range" @input="calculateInflation"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">rate of inflation (%)</span>
            <input v-model="rateOfInflation" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="rateOfInflation" max="20" min="0" class="slider" step=".25" type="range" @input="calculateInflation"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">time period (in years)</span>
            <input v-model="period" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="period" max="20" min="1" class="slider" step="1" type="range" @input="calculateInflation"/>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">CAGR</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ cagr }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">initial investment</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(initialInvestment) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0">interest amount</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(interestAmount) }}</span>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'InflationCalculator',
  data() {
    return {
      rateOfInflation: 5,
      period: 10,
      initialAmount: 10000,
      futureCost: 0
    };
  },
  methods: {
    calculateInflation() {
      if (!+this.initialAmount || !+this.rateOfInflation || !+this.period) {
        this.futureCost = 0;
        return;
      }

      this.futureCost = +this.initialAmount * ((1 + (+this.rateOfInflation / 100)) ** +this.period);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
