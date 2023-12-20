<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">monthly investment (₹)</span>
            <input v-model="form.totalInvestment" class="calc-input" type="number" @input="runCalculations"/>
          </div>
          <input v-model="form.totalInvestment" :max="500000" :min="5000" class="slider mb-32" step="1000" type="range"
                 @input="runCalculations"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">expected return rate (% p.a)</span>
            <input v-model="form.interestRate" class="calc-input" type="number" @input="runCalculations"/>
          </div>
          <input v-model="form.interestRate" :max="30" :min="5" class="slider mb-32" step="0.5" type="range"
                 @input="runCalculations"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white"> time period (yrs)</span>
            <input v-model="form.timePeriod" class="calc-input" type="number" @input="runCalculations"/>
          </div>
          <input v-model="form.timePeriod" :max="10" :min="1" class="slider" step="1" type="range"
                 @input="runCalculations"
          />
        </div>
      </div>
      <div class="d-flex align-items-center">
        <DoughnutChart :centerLabel="formatCurrency(form.totalValue).toString()" :centerValue="'total value'" :chartData="chartData"/>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">total value</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.totalValue) }}</span>
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
          <p class="text-color-lt m-0">estimated returns</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.estimatedReturns) }}</span>
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
  totalInvestment: 5000,
  interestRate: 5,
  timePeriod: 1,
  totalValue: 61650,
  estimatedReturns: 1650,
  investedAmount: 60000
});

function runCalculations() {
  const result = sipCalculator(form.totalInvestment, form.timePeriod, form.interestRate);

  form.totalValue = result.totalValue;
  form.investedAmount = result.totalInvestment;
  form.estimatedReturns = result.estimatedReturns;
}

const chartData = computed(() => {
  return {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        backgroundColor: ['#958DF5', 'white'],
        data: [form.investedAmount, form.estimatedReturns],
        borderWidth: [0, 0],
        borderColor: ['transparent', 'transparent'],
        borderRadius: 3
      }
    ]
  };
});
</script>
