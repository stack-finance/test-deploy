<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <div class="text-dull-white">lumpsum investment amount (₹)</div>
            <input v-model="form.initialAmount" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="form.initialAmount" :max="5000000" :min="1000" class="slider" step="1000" type="range" @input="calculateInflation"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">rate of return (%)</span>
            <input v-model="form.rateOfReturn" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="form.rateOfReturn" max="30" min="0" class="slider" step=".5" type="range" @input="calculateInflation"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">time period (in years)</span>
            <input v-model="form.period" class="calc-input" type="number" @input="calculateInflation"/>
          </div>
          <input v-model="form.period" max="30" min="1" class="slider" step="1" type="range" @input="calculateInflation"/>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">final value</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.finalValue) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">estimated returns</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.finalValue - form.initialAmount) }}</span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const form = reactive({
  rateOfReturn: 5,
  period: 10,
  initialAmount: 100000,
  finalValue: 0
});

function calculateInflation() {
  if (!+form.initialAmount || !+form.rateOfReturn || !+form.period) {
    form.finalValue = 0;
    return;
  }

  form.finalValue = +form.initialAmount * ((1 + (+form.rateOfReturn / 100)) ** +form.period);
}
</script>
