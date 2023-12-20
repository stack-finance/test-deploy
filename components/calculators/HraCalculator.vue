<template>
  <section>
    <div class="calc-grid">
      <div>
        <div class="mb-4">
          <div class="input-grp">
            <div class="text-dull-white">annual basic salary (₹)</div>
            <input v-model="form.basicSalary" class="calc-input" type="number" @input="calculateExemption"/>
          </div>
        </div>
        <div class="mb-4">
          <div class="input-grp">
            <span class="text-dull-white">annual dearness allowance (₹)</span>
            <input v-model="form.dearnessAllowance" class="calc-input" type="number" @input="calculateExemption"/>
          </div>
        </div>
        <div class="mb-4">
          <div class="input-grp">
            <div class="text-dull-white">annual house rent allowance (₹)</div>
            <input v-model="form.hraAllowance" class="calc-input" type="number" @input="calculateExemption"/>
          </div>
        </div>
        <div class="mb-4">
          <div class="input-grp">
            <div class="text-dull-white">annual rent paid (₹)</div>
            <input v-model="form.rentPaid" class="calc-input" type="number" @input="calculateExemption"/>
          </div>
        </div>
        <div class="retire-early-container d-flex flex-row">
          <span class="retire-early">are you working in a metro city?</span>
          <label class="switch ms-3">
            <input type="checkbox" v-model="form.isMetro" @change="calculateExemption">
            <span class="slide round"></span>
          </label>
        </div>
      </div>
    </div>
    <div class="mt-5 mt-sm-80">
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot primary-bg me-2">&nbsp;</span>
          <p class="text-color-lt m-0 fo-sm-20">exempted HRA</p>
        </div>
        <span class="text-white font-weight-bold fo-sm-20">{{ formatCurrency(form.exemptedHra) }}</span>
      </div>
      <div class="d-flex align-items-center justify-content-between mb-2">
        <div class="d-flex align-items-center">
          <span class="indicator-dot bg-white me-2">&nbsp;</span>
          <p class="text-color-lt m-0">taxable HRA</p>
        </div>
        <span class="text-white font-weight-bold">{{ formatCurrency(form.taxableHra) }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({
  basicSalary: 50000,
  dearnessAllowance: 1000,
  hraAllowance: 20000,
  rentPaid: 5000,
  isMetro: true,
  exemptedHra: 0,
  taxableHra: 0
});

onMounted(() => calculateExemption());

function calculateExemption() {
  if (!+form.basicSalary || !+form.dearnessAllowance || !+form.hraAllowance || !+form.rentPaid) {
    return;
  }

  const a = +form.rentPaid - +form.basicSalary * 0.1 + +form.dearnessAllowance;
  const b = (form.isMetro ? 0.5 : 0.4) * +form.basicSalary;
  form.exemptedHra = Math.min(a, +form.hraAllowance, b);
  form.taxableHra = +form.hraAllowance - form.exemptedHra;
}

</script>

<style lang="scss" scoped>
@import '../../assets/scss/helpers';

.retire-early{
  color: $text-color-lt;
}
/* The switch container */
</style>
