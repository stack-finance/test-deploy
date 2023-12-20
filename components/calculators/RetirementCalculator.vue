<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp my-3">
            <span class="text-dull-white"> current age (years)</span>
            <input v-model="form.currentAge" type="number" class="calc-input" autofocus @input="generateRetirementData"/>
          </div>
        </div>
        <div>
          <div class="input-grp my-3">
            <span class="text-dull-white">retirement age</span>
            <input v-model="form.retirementAge" type="number" class="calc-input" @input="generateRetirementData"/>
          </div>
        </div>
        <div>
          <div class="input-grp my-3">
            <span class="text-dull-white">life expectancy (years)</span>
            <input v-model="form.life" type="number" :min="form.retirementAge" class="calc-input" @input="generateRetirementData"/>
          </div>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">inflation rate (%)</span>
            <input v-model="form.postInflationRate" type="number" min="0" max="20" class="calc-input" @input="generateRetirementData"/>
          </div>
          <input v-model="form.postInflationRate" type="range" min="0" max="20" step=".5" class="slider mb-32" @input="generateRetirementData"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">post-retirement annual rate of return (%)</span>
            <input v-model="form.rateOfReturnPostRetirement" type="number" class="calc-input" @input="generateRetirementData"/>
          </div>
          <input v-model="form.rateOfReturnPostRetirement" type="range" :min="0" :max="20" step=".5" class="slider mb-32" @input="generateRetirementData"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white mb-3">monthly income at time of retirement (₹)</span>
            <input type="number" v-model="form.monthlyIncomeRequired" class="calc-input" @input="generateRetirementData"/>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">annual income required immediately after retirement</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.annualIncomePostRetire) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0">retirement corpus required to generate {{ formatCurrency(form.annualIncomePostRetire) }}</p>
        </div>
        <span class="text-white font-weight-bold">{{ formatCurrency(form.retirementCorpusRequired) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 bg-white">&nbsp;</span>
          <p class="text-color-lt m-0">monthly SIP required for retirement</p>
        </div>
        <span class="text-white font-weight-bold">{{ formatCurrency(form.monthlySIPToRetire) }}</span>
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
  currentAge: 30,
  retirementAge: 50,
  life: 80,
  postInflationRate: 6,
  rateOfReturnPostRetirement: 8,
  monthlyIncomeRequired: 100000,
  annualIncomePostRetire: 0,
  retirementCorpusRequired: 0,
  monthlySIPToRetire: 0
});


function generateRetirementData() {
  const rateOfReturn = (+form.rateOfReturnPostRetirement) / 100;
  const rateOfInflation = (+form.postInflationRate) / 100;

  // Calculate retirement corpus required
  const monthlyIncome = calculateMonthlyIncome(
      +form.monthlyIncomeRequired,
      +form.retirementAge,
      +form.currentAge,
      rateOfReturn,
      rateOfInflation
  );
  form.annualIncomePostRetire = monthlyIncome * 12;

  const inflationAdjustedRate = ((1 + rateOfReturn) / (1 + rateOfInflation) - 1) / 12;
  const retirementPeriodInMonths = (+form.life - +form.retirementAge) * 12;
  form.retirementCorpusRequired = pv(inflationAdjustedRate, retirementPeriodInMonths, monthlyIncome, 0) * -1;

  // Calculate monthly SIP required
  form.monthlySIPToRetire = pmt(
      rateOfReturn / 12,
      (+form.retirementAge - +form.currentAge) * 12,
      form.retirementCorpusRequired
  ) * -1;
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers/index';

.retire-early{
  color: $text-color-lt;
}

/* The switch container */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  vertical-align: middle;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slide {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #585858;  // <-- Off state color for the box
  transition: .4s;
  border-radius: 22px;  // <-- Adjusted for decreased size
}

.slide:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: $text-color-lt;  // <-- Off state color for the circle
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);  // <-- Shadow for the circle
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slide {
  background-color: #ffffff;  // <-- On state color for the box
}

input:checked + .slide:before {
  transform: translateX(16px);  // <-- Adjusted for decreased size
  background-color: $primary-color;  // <-- On state color for the circle
}

</style>
