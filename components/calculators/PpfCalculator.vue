<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">initial deposit amount (₹)</span>
            <input v-model="form.initialDeposit" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.initialDeposit" type="range" :min="5000" :max="150000" step="500" class="slider mb-32" @input="runCalculations"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">annual deposit (₹)</span>
            <input v-model="form.annualDeposit" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.annualDeposit" type="range" :min="5000" :max="150000" step="500" class="slider mb-32" @input="runCalculations"/>
        </div>
        <div>
          <div class="input-grp mb-4">
            <span class="text-dull-white">time period (years)</span>
            <span class="calc-input">15</span>
          </div>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">annual rate of interest (%)</span>
            <span class="calc-input">7.1</span>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <DoughnutChart :chartData="chartData" :centerValue="'maturity amount'" :centerLabel="formatCurrency(form.maturityAmount)"/>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">maturity value</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.maturityAmount) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">invested amount</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.investedAmount) }}</span>
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

let size = ref<number>(1200);
const page = ref(null);

onMounted(() => {
  if (page.value) {
    size.value = page.value['clientWidth'];
  }
});

let isMobile = ref(false);
watch(() => size.value, () => isMobile.value = size.value < 768);

const form = reactive({
  initialDeposit: 5000,
  annualDeposit: 5000,
  investedAmount: 80000,
  maturityAmount: 149597,
  interestAmount: 69597
});

const chartData = computed(() => {
  return {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        backgroundColor: ['#958DF5', 'white'],
        data: [form.investedAmount, form.interestAmount],
        borderWidth: [0, 0],
        borderColor: ['transparent', 'transparent'],
        borderRadius: 3
      }
    ]
  };
});
function runCalculations() {
  const result = ppfCalculator(form.initialDeposit, form.annualDeposit);

  form.investedAmount = result.investedAmount;
  form.interestAmount = result.interestAmount;
  form.maturityAmount = result.maturityAmount;
}
</script>
