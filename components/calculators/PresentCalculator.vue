<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">amount required (₹)</span>
            <input v-model="form.amount" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.amount" type="range" :min="100000" :max="1000000" step="100000" class="slider mb-32" @input="runCalculations"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">number of years</span>
            <input v-model="form.time" type="number" class="calc-input" @input="runCalculations" />
          </div>
          <input v-model="form.time" type="range" :min="1" :max="30" step="1" class="slider mb-32" @input="runCalculations"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white"> rate of return(%)</span>
            <input v-model="form.rate" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.rate" type="range" :min="1" :max="100" step="0.5" class="slider" @input="runCalculations"/>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <DoughnutChart :chartData="chartData" :centerValue="'present value'" :centerLabel="formatCurrency(form.presentValue)"/>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">amount required</p>
        </div>
        <span class="text-color-lt font-weight-bold fo-sm-20">{{ formatCurrency(form.amount) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">present value</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.presentValue) }}</span>
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
  amount: 100000,
  time: 1,
  rate: 1,
  presentValue: 99010,
  interestAmount: 990
});

function runCalculations() {
  const result = presentValueCalculator(form.amount, form.time, form.rate);
  form.presentValue = result.presentValue;
  form.interestAmount = result.interestAmount;
}

const chartData = computed(() => {
  return {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        backgroundColor: ['#958DF5', 'white'],
        data: [form.presentValue, form.interestAmount],
        borderWidth: [0, 0],
        borderColor: ['transparent', 'transparent'],
        borderRadius: 3
      }
    ]
  };
});
</script>
