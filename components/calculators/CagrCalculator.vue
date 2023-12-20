<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <div class="text-dull-white">initial investment (₹)</div>
            <input v-model="form.initialInvestment" class="calc-input" type="number" @input="runCalculations()"/>
          </div>
          <input v-model="form.initialInvestment" :max="500000" :min="1000" class="slider" step="1000" type="range" @input="runCalculations()"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">final amount (₹)</span>
            <input v-model="form.finalInvestment" class="calc-input" type="number" @input="runCalculations()"/>
          </div>
          <input v-model="form.finalInvestment" :max="10000000" :min="10000" class="slider" step="1000" type="range" @input="runCalculations()"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">
              duration of investment (yrs)
            </span>
            <input
              v-model="form.timePeriod"
              class="calc-input"
              type="number"
              @input="runCalculations()"
            />
          </div>
          <input v-model="form.timePeriod" :max="10" :min="1" class="slider mb-0" step="1" type="range" @input="runCalculations()"/>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">CAGR</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ form.cagr }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">initial investment</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.initialInvestment) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0">interest amount</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.interestAmount) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  initialInvestment: 1000,
  finalInvestment: 10000,
  timePeriod: 1,
  cagr: '9.00%',
  interestAmount: 9000
});

function runCalculations() {
  const result = cagrCalculator(
      form.initialInvestment,
      form.finalInvestment,
      form.timePeriod
  );

  form.cagr = result.CAGR;
  form.interestAmount = result.interestAmount;
}
</script>
