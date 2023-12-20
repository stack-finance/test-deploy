<template>
  <section>
    <div class="calc-grid">
      <div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">loan principal amount (₹)</span>
            <input v-model="form.principal" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.principal" type="range" :min="100000" :max="50000000" step="100000" class="slider mb-32" @input="runCalculations"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">annual interest rate (%)</span>
            <input v-model="form.interestRate" type="number" class="calc-input" @input="runCalculations"/>
          </div>
          <input v-model="form.interestRate" type="range" :min="6" :max="18" step="0.25" class="slider mb-32" @input="runCalculations"
          />
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">loan tenure in months</span>
            <input v-model="form.timePeriod" type="number" class="calc-input" @input="runCalculations" />
          </div>
          <input v-model="form.timePeriod" type="range" :min="12" :max="180" step="12" class="slider" @input="runCalculations"/>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <DoughnutChart :chartData="chartData" :centerValue="'total amount'" :centerLabel="formatCurrency(totalAmount)"/>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">total amount</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.totalAmount) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">monthly EMI</p>
        </div>
        <span class="text-color-lt font-weight-bold fo-sm-20">{{ formatCurrency(form.monthlyEMI) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">loan amount</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.principal) }}</span>
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
  principal: 100000,
  interestRate: 6,
  timePeriod: 12,
  interestAmount: 3280,
  monthlyEMI: 8607,
  totalAmount: 103280,
  loanAmount: 100000
});

const chartData = computed(() => {
  return {
    labels: ['Invested Amount', 'Estimated Returns'],
    datasets: [
      {
        backgroundColor: ['#958DF5', 'white'],
        data: [form.loanAmount, form.interestAmount],
        borderWidth: [0, 0],
        borderColor: ['transparent', 'transparent'],
        borderRadius: 3
      }
    ]
  };
});


function runCalculations() {
  generateEMI();
}

function generateEMI() {
  const { monthlyEMI } = emiCalculator(form.principal, form.interestRate, form.timePeriod);
  form.monthlyEMI = monthlyEMI;
}

// function callLoanAmortizationSchedule() {
//   const schedule = loanAmortizationSchedule(
//       form.principal,
//       form.interestRate,
//       timePeriod
//   );
//
//   const totalInterestPaid = schedule.reduce(
//       (acc, month) => acc + month.interest,
//       0
//   );
//
//   form.loanAmount = form.principal;
//   form.schedule = schedule;
//   form.interestAmount = totalInterestPaid;
//   form.totalAmount = Number(form.principal) + Number(totalInterestPaid);
// }
</script>
