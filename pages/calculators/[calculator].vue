<template>
  <main ref="page" class="calc-main">
    <section class="px-4 py-5 py-sm-80 px-sm-128">
      <BBreadcrumb aria-label="Breadcrumb" class="page-breadcrumbs">
        <BBreadcrumb-item to="/">Home</BBreadcrumb-item>
        <BBreadcrumb-item to="/calculators/">Calculators</BBreadcrumb-item>
        <BBreadcrumb-item active>{{ activeCalculator.title }}</BBreadcrumb-item>
      </BBreadcrumb>
    </section>

    <div class="hero-grid">
      <div class="calc-wrapper">
        <div v-if="'sip' === activeCalculator.slug || 'present-value' === activeCalculator.slug"
             class="d-flex bg-dark-gray br-8 p-3 mb-4">
          <div class="me-3">
            <label class="text-dull-white" for="sip">
              <input id="sip" type="radio" name="calc" value="sip" v-model="selectedCalc" @change="selectedCalc = 'sip'">
              I know my goal
            </label>
          </div>
          <div>
            <label class="text-dull-white" for="pv">
              <input type="radio" id="pv" name="calc" value="pv" v-model="selectedCalc" @change="selectedCalc = 'pv'">
              I want to invest
            </label>
          </div>
        </div>
        <component :is="currentCalculator(activeCalculator.slug)"></component>
      </div>
      <div class="ad-banner">
        <img data-not-lazy src="https://webstatic.stackfinance.co/website-v4/half-mob.webp" class="img-fluid" alt="ad banner to download">
        <h5 class="text-center text-white font-weight-bold m-4">Personalised SIPs for long term wealth creation</h5>
        <button class="btn btn-consult d-block mx-auto" @click="showModal=true">Download Stack Now!</button>
        <div class="d-flex justify-content-around p-4">
          <div class="d-flex flex-column align-items-center">
            <span>
              <img src="https://webstatic.stackfinance.co/website-v4/star-rating.webp" height="12" alt="rating icon">
              <span class="text-white font-weight-bold">4.5</span>
            </span>
            <span class="text-color-lt fo-14">Overall rating</span>
          </div>
          <div class="d-flex flex-column align-items-center">
            <span class="text-white font-weight-bold">100K+</span>
            <span class="text-color-lt fo-14">Downloads</span>
          </div>
        </div>
      </div>
    </div>

    <section class="calc-tabview">
      <div class="calc-tabview__tabs">
        <a v-if="!(activeCalculator.slug === 'emi' || activeCalculator.slug === 'cagr' || activeCalculator.slug === 'swp')"
           @click="tabActiveIndex = 0" href="#compare" class="tab-item" :class="{'active': tabActiveIndex === 0}">Compare returns</a>
        <a @click="tabActiveIndex = 1" href="#why-invest" class="tab-item" :class="{'active': tabActiveIndex === 1}">Why invest?</a>
        <a @click="tabActiveIndex = 2" href="#others" class="tab-item" :class="{'active': tabActiveIndex === 2}">Other calculators</a>
        <a @click="tabActiveIndex = 3" href="#explain" class="tab-item" :class="{'active': tabActiveIndex === 3}">Understanding {{ activeCalculator.title }}</a>
        <a @click="tabActiveIndex = 4" href="#articles" class="tab-item" :class="{'active': tabActiveIndex === 4}">Related articles</a>
        <a @click="tabActiveIndex = 5" href="#faqs" class="tab-item" :class="{'active': tabActiveIndex === 5}">FAQs</a>
      </div>
      <div class="px-4 px-sm-128">
        <div v-if="!(activeCalculator.slug === 'emi' || activeCalculator.slug === 'cagr' || activeCalculator.slug === 'swp')"
             class="py-sm-128 py-4" id="compare">
          <h4 class="fo-sm-32 fo-24 text-white fw-600 mb-5">compare returns</h4>
          <img :src="isMobile ? activeCalculator.compareGraphics?.mob : activeCalculator.compareGraphics?.web"
               :alt="activeCalculator.title + ' chart'" class="img-fluid">
        </div>
        <div class="py-sm-128 py-4" id="why-invest">
          <h4 class="fo-sm-32 fo-24 text-white fw-600 mb-5">why invest with Stack</h4>
          <div class="reason-box">
            <div class="reason-box__block" v-for="(reason, i) in activeCalculator.reasons" :key="i">
              <img height="50" :src="reason.icon" :alt="reason.heading">
              <div class="mt-sm-4">
                <h6 class="font-weight-bold text-white fo-sm-18 mb-2">{{ reason.heading }}</h6>
                <p class="text-color-lt fo-14 fo-sm-16 m-0">{{ reason.detail }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="py-sm-128 py-4" id="others">
          <h4 class="text-white fw-600 fo-24 mb-5">other calculators</h4>
          <NuxtLink v-for="(calc, i) in inactiveCalculators" :key="i" :to="'/calculators/' + calc.slug + '/'"
                    class="app-card-calc me-sm-5">
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <img :alt="calc.title" :src="calc.icon" class="mb-4" data-not-lazy height="32"/>
                <p class="fo-18 fo-sm-24 fw-500 text-white">{{ calc.title }}</p>
              </div>
              <div class="d-flex justify-content-between align-items-center w-100">
                <span class="fo-sm-18 font-weight-bold text-color-lt">calculate</span>
                <img alt="Arrow" data-not-lazy
                     height="12" src="https://webstatic.stackfinance.co/website-v4/arrow-icon.webp"
                />
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="py-sm-128 py-4" id="explain">
          <h4 class="fo-sm-32 fo-24 fw-600 text-white mb-5">Understanding {{ activeCalculator.title }}</h4>
          <div class="article-grid">
            <div v-if="!isMobile" class="article-index">
              <a :href="'#'+ q.id" class="article-index__itm" v-for="(q, idx) in activeCalculator.explanation" :key="idx">
                <span class="text-truncate mxw-260">{{ q.que }}</span>
                <img src="https://webstatic.stackfinance.co/website-v4/chev-down.webp" class="rotate-z-90n" alt="arrow" height="10">
              </a>
            </div>
            <article>
              <div :id="q.id" class="article-block" v-for="(q, idx) in activeCalculator.explanation" :key="idx">
                <h4 class="text-white font-weight-bold fo-20 fo-sm-24 mb-2">
                  {{ q.que }}
                </h4>
                <div class="article-qna" v-html="q.ans"></div>
              </div>
            </article>
          </div>
        </div>
        <div class="py-sm-128 py-4" id="articles">
          <h4 class="fo-sm-32 fo-24 fw-600 text-white mb-5">related articles</h4>
        </div>
      </div>
      <FaqSection id="faqs" :is-mobile="isMobile" :module-faq="activeCalculator.faqs"></FaqSection>
    </section>

    <section class="consultation">
      <div class="consultation-block">
        <div class="p-4 p-sm-5">
          <h4 class="text-white fo-24 fo-sm-32">
            Want to know how Stack will help you in managing your portfolio and maximizing your returns?
          </h4>
          <div class="mt-sm-80 mt-5 d-flex flex-column">
            <a class="btn btn-consult" href="https://calendly.com/deepa-d97/stack-financial-consultation">Schedule Free Consultation</a>
            <a class="btn btn-wa mt-4" href="https://wa.me/6366979312">
              <img height="20" src="https://webstatic.stackfinance.co/website-v4/wa-icon-green.webp" alt="whatsapp icon">
              <span class="ms-2">Connect via WhatsApp</span>
            </a>
          </div>
        </div>
        <img class="img-fluid" alt="stack titans" src="https://webstatic.stackfinance.co/website-v4/titan-4.webp">
      </div>
    </section>
    <Footer :is-mobile="isMobile"></Footer>
    <LazyDownload v-if="showModal" @close="showModal = $event"></LazyDownload>
  </main>
</template>

<script setup lang='ts'>
import {
  LazyEmiCalculator,
  LazyFdCalculator,
  LazyCagrCalculator,
  LazyFutureValueCalculator,
  LazyHraCalculator,
  LazyInflationCalculator,
  LazyLumpsumCalculator,
  LazyRdCalculator,
  LazyRetirementCalculator,
  LazyPresentCalculator,
  LazySipCalculator,
  LazySwpCalculator
} from '#components';
import {onMounted, ref} from 'vue';
import {getCalculatorDetail} from '~/composables/repository/useCalculator';

const showModal = ref(false);
let size = ref<number>(1200);
const page = ref(null);

onMounted(() => {
  if (page.value) {
    size.value = page.value['clientWidth'];
  }
});

let isMobile = ref(false);
watch(() => size.value, () => isMobile.value = size.value < 768);

let tabActiveIndex = ref(0);
let selectedCalc = ref('sip');
const { params: { calculator } } = useRoute();
const { data } = await useAsyncData('calculator', async () => await getCalculatorDetail(calculator as string));
const activeCalculator = ref(data.value?.active);
const inactiveCalculators = ref(data.value?.inactive);

useHead({
  title: activeCalculator.value?.metaTitle,
  meta: [
    {
      name: 'description',
      content: activeCalculator.value?.metaDesc
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://stackwealth.in/calculators/${activeCalculator.value?.slug}/`
    }
  ]
});

function currentCalculator(slug: string) {
  switch (slug) {
    case 'sip':
      return LazySipCalculator;
    case 'present-value':
      return LazyPresentCalculator;
    case 'swp':
      return LazySwpCalculator;
    case 'emi':
      return LazyEmiCalculator;
    case 'cagr':
      return LazyCagrCalculator;
    case 'retirement':
      return LazyRetirementCalculator;
    case 'inflation':
      return LazyInflationCalculator;
    case 'future-value':
      return LazyFutureValueCalculator;
    case 'lumpsum':
      return LazyLumpsumCalculator;
    case 'recurring-deposit':
      return LazyRdCalculator;
    case 'hra':
      return LazyHraCalculator;
    case 'fd-calculator':
      return LazyFdCalculator;

  }
}
</script>


<style lang="scss">
@import '../../assets/scss/helpers';
input[type='radio'] {
  accent-color: $primary-color;
}

.calc-main {
  background-color: $text-color;

  .design-line:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%);
    height: 1px;
    width: 24px;
    background-image: linear-gradient(to left, #fff, transparent);
  }

  .hero-grid {
    display: grid;
    padding: 24px 32px;
    @extend .px-sm-128;
    @extend .py-sm-80;
    grid-template-columns: 1fr;
    grid-gap: 32px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 0.45fr;
      align-items: flex-start;
    }

    .ad-banner {
      overflow: hidden;
      border-radius: 12px;
      background-color: rgba(109, 100, 216, 0.2);
    }
  }

  .calc-wrapper {
    padding: 24px;
    border-radius: 12px;
    border: 1px solid $border-dark-color;

    &:hover {
      text-decoration: none;
    }
  }

  .calc-tabview {
    position: relative;

    &__tabs {
      top: 98px;
      position: sticky;
      width: 100%;
      display: flex;
      z-index: 9;
      overflow-x: auto;
      padding: 0 24px;
      @extend .px-sm-128;
      justify-content: space-between;
      border-bottom: 1px solid $border-dark-color;
      background-image: linear-gradient(to bottom, $dark-color 0%, #141414 100%);

      .tab-item {
        padding: 16px 32px;
        color: $text-color-lt;
        transition: all 0.2s ease-in-out;
        text-decoration: none;

        &:hover, &.active {
          font-weight: 500;
          color: #FFF;
          box-shadow: inset 0 -2px $primary-color;
        }
      }
    }
  }

  .reason-box {
    display: grid;
    grid-template-columns: 1fr;
    overflow: hidden;
    border: 1px solid $border-dark-color;
    border-radius: 12px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    &__block {
      display: flex;
      padding: 24px;
      align-items: flex-start;
      border: 1px solid $border-dark-color;

      @media screen and (min-width: 768px) {
        padding: 32px;
        flex-direction: column;
      }
    }
  }

  .article-grid {
    display: grid;
    grid-column-gap: 0;

    @media screen and (min-width: 768px) {
      grid-column-gap: 32px;
      grid-template-columns: 360px 1fr;
    }

    .article-index {
      top: 200px;
      height: 400px;
      display: flex;
      position: sticky;
      flex-direction: column;

      &__itm {
        display: flex;
        padding: 16px 24px;
        align-items: center;
        color: $text-color-lt;
        flex-wrap: wrap;
        text-decoration: none;
        justify-content: space-between;
        border-radius: 12px;
        transition: all .2s ease-in-out;
        margin: 4px 0;
        font-weight: bold;

        &:hover,
        &:active, {
          color: #FFF;
          background-color: $dark-color;
        }
      }
    }

    .article-block {
      margin-bottom: 32px;

      @media screen and (min-width: 768px) {
        margin-bottom: 80px;
      }

      .article-qna {
        color: $text-color-lt;

        p {
          color: $text-color-lt !important;

          @media screen and (min-width: 768px) {
            font-size: 18px;
          }
        }
      }
    }
  }

  .consultation {
    padding: 24px;
    @extend .py-sm-128;
    @extend .px-sm-128;

    &-block {
      border-radius: 16px;
      background-color: rgba(109, 100, 216, 0.2);
      display: grid;
      grid-template-columns: 1fr;
      overflow: hidden;

      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
      }

      .btn-wa {
        border-radius: 8px;
        background-color: #27b43e;
        padding: 12px 32px;
        color: white;
        max-width: 280px;
        font-weight: bold;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .btn-consult {
    background-color: $primary-color;
    padding: 12px 32px;
    border-radius: 8px;
    color: white;
    max-width: 280px;
    font-weight: bold;

    &:hover {
      text-decoration: none;
    }
  }
}

</style>
