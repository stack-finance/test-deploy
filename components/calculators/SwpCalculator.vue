<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">total investment (₹)</span>
            <input v-model="form.totalInvestment" class="calc-input" type="number" @input="calculateSWP"/>
          </div>
          <input v-model="form.totalInvestment" :max="500000" :min="5000" class="slider mb-32" step="1000" type="range"
                 @input="calculateSWP"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">withdrawal per month (₹)</span>
            <input v-model="form.withdrawalPerMonth" class="calc-input" type="number" @input="calculateSWP"/>
          </div>
          <input v-model="form.withdrawalPerMonth" max="100000" min="5000" class="slider mb-32" step="5000" type="range"
                 @input="calculateSWP"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">annual Rate of Return (%)</span>
            <input v-model="form.interestRate" class="calc-input" type="number" @input="calculateSWP"/>
          </div>
          <input v-model="form.interestRate" :max="10" :min="1" class="slider" step="1" type="range"
                 @input="calculateSWP"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">time period (yrs)</span>
            <input v-model="form.timePeriod" min="1" max="30" class="calc-input" type="number" @input="calculateSWP"/>
          </div>
          <input v-model="form.timePeriod" :max="30" :min="1" class="slider" step="1" type="range"
                 @input="calculateSWP"/>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">residual value</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.totalValue) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">total investment</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.totalInvestment) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0">total withdrawal</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.timePeriod * form.withdrawalPerMonth * 12) }}</span>
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
  withdrawalPerMonth: 0,
  totalValue: 61650,
  investedAmount: 60000
});
function calculateSWP() {
  if (!form.interestRate || !form.totalInvestment || !form.withdrawalPerMonth ||
      !form.timePeriod) {
    return;
  }

  form.totalValue = swpCalculator(
      form.withdrawalPerMonth,
      form.interestRate,
      form.timePeriod * 12,
      form.totalInvestment
  );
}

</script>
