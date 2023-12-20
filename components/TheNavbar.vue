<template>
  <nav class="app-navbar dark-bg" v-click-outside="() => isExpanded = false">
    <div class="d-flex justify-content-center px-4 px-sm-128 py-2 py-sm-0 position-relative">
      <div v-if="!isMobile" class="app-navbar-wrapper py-sm-3">
        <div class="brand-logo">
          <NuxtLink to="/">
            <img alt="Stack Finance logo" data-not-lazy height="35"
                 src="https://webstatic.stackfinance.co/website-v4/stack-logo.webp">
          </NuxtLink>
        </div>
        <div class="nav-menu-category">
          <button :class="{'active': activeIndex === 0}" class="category-item" @click="toggleNavbar(0)">
            wealth
          </button>
          <NuxtLink class="category-item ms-4 text-decoration-none pb-1" to="/calculators/">calculators</NuxtLink>
          <button :class="{'active': activeIndex === 1}" class="category-item ms-4" @click="toggleNavbar(1)">
            resources
          </button>
        </div>
        <div>
          <button class="app-btn--sm br-50" @click="$emit('getstack', true);isExpanded=false">download now</button>
        </div>
      </div>
      <div v-else class="d-flex justify-content-between align-items-center w-100">
        <div class="brand-logo">
          <NuxtLink to="/">
            <img alt="Stack Finance logo" data-not-lazy height="25"
                 src="https://webstatic.stackfinance.co/website-v4/stack-logo.webp">
          </NuxtLink>
        </div>
        <button class="bg-transparent border-0" @click="showMenu = !showMenu">
          <img v-if="!showMenu" src="https://webstatic.stackfinance.co/website-v4/expand-plus.webp" alt="open menu" height="45">
          <img v-else src="https://webstatic.stackfinance.co/website-v4/collapse-minus.webp" alt="minus" height="45">
        </button>
      </div>
      <div v-if="isMobile && showMenu" class="nav-menu--mb">
        <div v-b-toggle.collapse-wealth class="py-4 d-flex justify-content-between">
          <span class="text-dull-white fw-500">wealth</span>
          <img src="https://webstatic.stackfinance.co/website-v4/chev-down.webp" alt="arrow" height="10">
        </div>
        <BCollapse visible id="collapse-wealth">
          <NuxtLink class="d-flex justify-content-between align-items-center w-100 py-2 text-decoration-none" to="/flagship-customized-mutual-fund-portfolio/">
            <span class="text-white fo-14">Flagship</span>
            <span class="text-dull-white fo-14">mutual fund portfolio</span>
          </NuxtLink>
          <NuxtLink class="d-flex justify-content-between align-items-center w-100 py-2 text-decoration-none" to="/opportunities-thematic-investing/">
            <span class="text-white fo-14">Opportunity</span>
          </NuxtLink>
          <span class="text-dull-white fo-14">thematic mutual fund</span>
          <NuxtLink class="d-flex justify-content-between align-items-center w-100 py-2 text-decoration-none" to="/flash-peer-to-peer-lending/">
            <span class="text-white fo-14">Flash</span>
            <span class="text-dull-white fo-14">alternative investment</span>
          </NuxtLink>
          <NuxtLink class="d-flex justify-content-between align-items-center w-100 py-2 text-decoration-none" to="/safe-haven-investing-in-fixed-deposits-ncd-bonds/">
            <span class="text-white fo-14">Safe Haven</span>
            <span class="text-dull-white fo-14">fixed-income assets</span>
          </NuxtLink>
        </BCollapse>
        <NuxtLink class="d-flex justify-content-between align-items-center w-100 py-2 text-decoration-none" to="/calculators/">
          <span class="text-dull-white">calculators</span>
        </NuxtLink>
        <div v-b-toggle.collapse-resource class="py-4 d-flex justify-content-between">
          <span class="text-dull-white fw-500">resource</span>
          <img src="https://webstatic.stackfinance.co/website-v4/chev-down.webp" alt="arrow" height="10">
        </div>
        <BCollapse id="collapse-resource">
          <NuxtLink class="d-flex w-100 py-2 text-decoration-none" to="/blogs/">
            <span class="text-white fo-14">Blogs</span>
          </NuxtLink>
          <NuxtLink class="d-flex w-100 py-2 text-decoration-none" to="/masterclass/">
            <span class="text-white fo-14">Masterclass</span>
          </NuxtLink>
        </BCollapse>
      </div>
      <transition appear name="slide-fade">
        <div v-if="isExpanded && !isMobile" class="nav-menu">
          <div v-if="activeIndex === 0" class="category-menu--wealth">
            <div class="row">
              <div class="col-sm-8">
                <div class="wealth-options">
                  <div>
                    <p class="text-dull-white fw-600 fo-14">mutual fund portfolio</p>
                    <NuxtLink class="strategy text-decoration-none" to="/flagship-customized-mutual-fund-portfolio/">
                      <img alt="flagship strat" height="30"
                           src="https://webstatic.stackfinance.co/aphrodite/images/strat-flagship.png"
                      >
                      <div class="ms-3">
                        <p class="text-white mb-0 font-weight-bold">Flagship</p>
                        <p class="fo-12 mb-0 text-dull-white">long-term wealth creation</p>
                      </div>
                    </NuxtLink>
                  </div>
                  <div>
                    <p class="text-dull-white fw-600 fo-14">alternative investment</p>
                    <NuxtLink class="strategy text-decoration-none" to="/flash-peer-to-peer-lending/">
                      <img alt="flash strat" height="30"
                           src="https://webstatic.stackfinance.co/aphrodite/images/strat-flash.png"
                      >
                      <div class="ms-3">
                        <p class="text-white mb-0 font-weight-bold">Flash</p>
                        <p class="fo-12 mb-0 text-dull-white">P2P for short-term goals</p>
                      </div>
                    </NuxtLink>
                  </div>
                  <div>
                    <p class="text-dull-white fw-600 fo-14">capital preservation</p>
                    <NuxtLink class="strategy text-decoration-none" to="/safe-haven-investing-in-fixed-deposits-ncd-bonds/">
                      <img alt="safe haven strat" height="30"
                           src="https://webstatic.stackfinance.co/aphrodite/images/strat-heaven.png"
                      >
                      <div class="ms-3">
                        <p class="text-white mb-0 font-weight-bold">Safe Haven</p>
                        <p class="fo-12 mb-0 text-dull-white">Bonds, NCDs & FDs</p>
                      </div>
                    </NuxtLink>
                  </div>
                  <div>
                    <p class="text-dull-white fw-600 fo-14">thematic mutual funds</p>
                    <NuxtLink class="strategy text-decoration-none" to="/opportunities-thematic-investing/">
                      <img alt="opportunity strat" height="30"
                           src="https://webstatic.stackfinance.co/aphrodite/images/strat-opportunity.png"
                      >
                      <div class="ms-3">
                        <p class="text-white mb-0 font-weight-bold">Opportunities</p>
                        <p class="fo-12 mb-0 text-dull-white">high-risk, high-return strategies</p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <img alt="flagship banner" height="220"
                     src="https://webstatic.stackfinance.co/website-v4/flag-banner.webp">
                <h5 class="text-white fo-20 mt-4">why invest with Stack Wealth?</h5>
                <p class="text-white fo-14 mxw-400 text-truncate mb-5">
                  our experts have 25+ years of experience managing investments and growing wealth.
                </p>
                <button class="app-btn--sm" @click="$emit('getstack', true)">
                  <img alt="store icon" height="28"
                       src="https://webstatic.stackfinance.co/website-v4/stores-icons.webp">
                  <span class="ms-3">download now</span>
                </button>
              </div>
            </div>
          </div>
          <div v-if="activeIndex === 1" class="category-menu--resources">
            <div class="row">
              <div class="col-sm-8">
                <div class="blogs-grid">
                  <div v-if="resources">
                    <h5 class="text-color-lt fo-14 mb-32">everything Stack</h5>
                    <NuxtLink v-for="b in resources.stack" :key="b.id" :to="'/blogs/stack/' + b.slug + '/'"
                              class="mb-4 text-decoration-none">
                      <h6 class="text-white mb-1">{{ b.title }}</h6>
                      <p class="fo-12 text-color-lt">{{ $dayjs(b.published_at).format('DD MMM YY') }}</p>
                    </NuxtLink>
                  </div>
                  <div>
                    <h5 class="text-color-lt fo-14 mb-32">investing 101</h5>
                    <NuxtLink v-for="b in resources.investing" :key="b.id" :to="'/blogs/investing/' + b.slug + '/'"
                              class="mb-4 text-decoration-none">
                      <h6 class="text-white mb-1">{{ b.title }}</h6>
                      <p class="fo-12 text-color-lt">{{ $dayjs(b.published_at).format('DD MMM YY') }}</p>
                    </NuxtLink>
                  </div>
                  <div>
                    <h5 class="text-color-lt fo-14 mb-32">personal finance</h5>
                    <NuxtLink v-for="b in resources.finance" :key="b.id" :to="'/blogs/finance/' + b.slug + '/'"
                              class="mb-4 text-decoration-none">
                      <h6 class="text-white mb-1">{{ b.title }}</h6>
                      <p class="fo-12 text-color-lt">{{ $dayjs(b.published_at).format('DD MMM YY') }}</p>
                    </NuxtLink>
                  </div>
                  <div>
                    <h5 class="text-color-lt fo-14 mb-32">featured</h5>
                    <NuxtLink v-for="b in resources.featured" :key="b.id" :to="'/blogs/featured/' + b.slug + '/'"
                              class="mb-4 text-decoration-none">
                      <h6 class="text-white mb-1">{{ b.title }}</h6>
                      <p class="fo-12 text-color-lt">{{ $dayjs(b.published_at).format('DD MMM YY') }}</p>
                    </NuxtLink>
                  </div>
                </div>
                <NuxtLink class="app-btn--sm text-decoration-none" to="/blogs/">view all blogs</NuxtLink>
              </div>
              <div class="col-sm-4">
                <h4 class="text-color-lt fo-14 mb-32">masterclass</h4>
                <img alt="flagship banner" height="220"
                     src="https://webstatic.stackfinance.co/website-v4/masterclass.webp"
                >
                <h5 class="text-white fo-20 mt-4">All you need to know about investing</h5>
                <p class="text-white fo-14 mxw-400 text-truncate mb-5">
                  The only finance masterclass you will ever need.
                </p>
                <NuxtLink class="app-btn--sm text-decoration-none" to="/masterclass/">checkout masterclass</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';
import {getFeaturedPosts, getPostsByTag} from '~/composables/repository/useBlog';
import {vBToggle} from 'bootstrap-vue-next';

const { isMobile, resources } = defineProps({
  isMobile: Boolean,
  resources: Object
});
const isExpanded = ref(false);
const showMenu = ref(false);
let activeIndex = ref<number | null>(null);

function toggleNavbar(idx: number) {
  isExpanded.value = !isExpanded.value;

  activeIndex.value = idx;
  if (!isExpanded.value) {
    activeIndex.value = null;
  }
}

const route = useRoute();
watch(route.params, (_) => {isExpanded.value = false;});

</script>

<style lang="scss">
@import '../assets/scss/helpers/index.scss';

.app-navbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: $text-color;

  @media screen and (min-width: 768px) {
    height: 100px;
  }

  &-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 10;
  }

  .nav-menu-category {
    .category-item {
      background-color: transparent;
      border: none;
      color: $text-color-lt;
      font-size: 18px;
      margin: 16px 0;
      transition: .2s ease-in-out;

      &:hover, &.active {
        color: #FFF;
        box-shadow: 0 2px $primary-color;
      }
    }
  }

  .nav-menu {
    z-index: 1;
    position: absolute;
    padding: 16px 24px;
    width: 100%;
    top: 100px;
    @extend .px-sm-128;
    background-color: $text-color;
    -webkit-box-shadow: 0 80px 120px 0 rgba(0, 0, 0, .4);
    box-shadow: 0 80px 120px 0 rgba(0, 0, 0, .4);
    border-bottom: 1px solid $rules-color;

    .category-menu--wealth {
      margin-top: 32px;
      padding-bottom: 32px;

      .wealth-options {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 48px;

        .strategy {
          display: flex;
          align-items: center;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }

    .category-menu--resources {
      margin-top: 32px;
      padding-bottom: 32px;
    }

    .blogs-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 32px;
      margin-bottom: 48px;
    }

    &--mb {
      background-color: $text-color;
      -webkit-box-shadow: 0 80px 120px 0 rgba(0, 0, 0, .4);
      box-shadow: 0 80px 120px 0 rgba(0, 0, 0, .4);
      border-bottom: 1px solid $rules-color;
      z-index: 1;
      position: absolute;
      padding: 16px 24px;
      width: 100%;
      top: 62px;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-in;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0, 0, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-100%);
    //opacity: 0;
  }
}
</style>
