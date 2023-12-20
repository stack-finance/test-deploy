<template>
  <div class="p-4 px-sm-128 py-sm-128">
    <div class="row">
      <div class="col-sm">
        <h3 class="text-dull-white font-weight-bold text-center text-sm-start mb-5 fo-32 fo-sm-48 mxw-500">
          frequently asked questions
        </h3>
        <NuxtLink v-if="!isMobile" to="/faqs/" class="app-btn">view all FAQs</NuxtLink>
      </div>
      <div class="col-sm">
        <div class="faq-section">
          <div class="bdr-b" v-for="(f, i) in faqList">
            <div class="d-flex align-items-center my-3" v-b-toggle="'collapse-'+ i">
              <img src="https://webstatic.stackfinance.co/website-v4/chev-down.webp" alt="arrow" height="10">
              <h3 class="ms-3 fo-18 fo-sm-20 font-weight-bold text-white">{{ f.question }}</h3>
            </div>
            <BCollapse :id="'collapse-' + i" class="mt-2">
              <div class="faq-answers" v-html="f.answer"></div>
            </BCollapse>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink v-if="isMobile" to="/faqs/" class="app-btn d-block text-center my-5">view all FAQs</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import {vBToggle} from 'bootstrap-vue-next';
import {getFallbackFaqs} from '~/composables/repository/useFaq';

const {moduleFaq} = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  },
  squeeze: Boolean,
  hideViewMore: {
    type: Boolean,
    default: false
  },
  moduleFaq: Array
});

let faqList = ref([]);

onMounted(() => {
  if (moduleFaq?.length) {
    faqList.value = moduleFaq;
    return;
  }

  faqList.value = getFallbackFaqs();
});
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables';

.faq-section {
  padding: 24px;
  border-radius: 16px;
  box-shadow: inset 1px 1px 1px 0 $gray;
  background: $dark-color;

  @media screen and (min-width: 768px) {
    padding: 48px;
  }

  .faq-answers {
    margin-left: 32px;
    color: $text-color-lt;
    font-size: 16px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }

    p {
      color: $text-color-lt;
      font-size: 16px;

      @media screen and (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
}
</style>
