<template>
  <section>
    <div class="calc-grid">
      <div>
        <div class="mb-4">
          <div class="input-grp">
            <div class="text-dull-white">total investment amount (₹)</div>
            <input v-model="form.initialAmount" class="calc-input" type="number" @input="calculateReturnsOnFd"/>
          </div>
        </div>
        <div class="input-grp mb-4">
          <span class="text-dull-white">enable compounding?</span>
          <label class="switch ms-3">
            <input type="checkbox" v-model="form.hasCompounding" @change="calculateReturnsOnFd">
            <span class="slide round"></span>
          </label>
        </div>
        <div v-if="form.hasCompounding" class="mb-4">
          <div class="input-grp">
            <span class="text-dull-white">compounding frequency</span>
            <select class="calc-input" name="frequency" v-model="form.frequency" @change="calculateReturnsOnFd">
              <option selected value="1">Yearly</option>
              <option value="2">Half Yearly</option>
              <option value="4">Quarterly</option>
            </select>
          </div>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">rate of interest (%)</span>
            <input v-model="form.rateOfReturn" class="calc-input" type="number" @input="calculateReturnsOnFd"/>
          </div>
          <input v-model="form.rateOfReturn" max="20" min="0" class="slider" step=".5" type="range" @input="calculateReturnsOnFd"/>
        </div>
        <div>
          <div class="input-grp">
            <span class="text-dull-white">time period (in years)</span>
            <input v-model="form.period" class="calc-input" type="number" @input="calculateReturnsOnFd"/>
          </div>
          <input v-model="form.period" max="30" min="1" class="slider" step="1" type="range" @input="calculateReturnsOnFd"/>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">total maturity value</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.maturityValue) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot bg-white me-2">&nbsp;</span>
          <p class="text-color-lt m-0">invested amount</p>
        </div>
        <span class="text-white font-weight-bold">{{ formatCurrency(form.initialAmount) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot me-2 primary-bg">&nbsp;</span>
          <p class="text-color-lt m-0">estimated returns</p>
        </div>
        <span class="text-color-lt font-weight-bold">{{ formatCurrency(form.maturityValue - form.initialAmount) }}</span>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const form = reactive({
  rateOfReturn: 5,
  period: 10,
  hasCompounding: false,
  frequency: 1,
  initialAmount: 100000,
  maturityValue: 0
});

function calculateReturnsOnFd() {
  const rate = +form.rateOfReturn / 100;
  const loopLimit = +form.period * 12;
  form.maturityValue = 0;
  if (!+form.initialAmount || !+form.rateOfReturn || !+form.period) {
    form.maturityValue = 0;
    return;
  }

  if (form.hasCompounding) {
    for (let i = 0; i <= loopLimit; i++) {
      form.maturityValue += +form.initialAmount * ((1 + (rate / +form.frequency)) ** (+form.frequency * (+form.period / 12)));
    }
    return;
  }

  form.maturityValue = form.initialAmount * (1 + rate * +form.period);
}
</script>
