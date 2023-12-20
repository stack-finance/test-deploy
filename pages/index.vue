<template>
  <main ref="page" class="main">
    <section class="hero">
      <div class="row">
        <div class="col-sm">
          <h1 class="hero-heading">
            unleash your <br>wealth’s potential.
          </h1>
          <h2 class="hero-desc">let the real experts manage your investments.</h2>
          <img v-if="isMobile" alt="hero-imag-mb" class="img-fluid" data-not-lazy
               src="https://webstatic.stackfinance.co/website-v4/home-hero-mb.webp"
          >
          <img v-else alt="hero-image" class="img-fluid" data-not-lazy
               src="https://webstatic.stackfinance.co/website-v4/home-hero.webp"
          >
        </div>
      </div>
    </section>

    <section class="py-sm-128">
      <div class="bg-dark-gray px-sm-128">
        <div class="row align-items-center">
          <div class="col-sm">
            <div class="company-highlight">
              <h3 class="company-highlight__main">25+ years</h3>
              <p class="company-highlight__support">managing investments</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="company-highlight">
              <h3 class="company-highlight__main">₹1,000+ Cr</h3>
              <p class="company-highlight__support">worth investments managed</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="company-highlight">
              <h3 class="company-highlight__main">1+ Lac</h3>
              <p class="company-highlight__support">investors under management</p>
            </div>
          </div>
          <div class="col-sm">
            <div class="company-highlight p-sm-0">
              <img alt="media" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/media-house.webp">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="scroller-container" class="scroller-container">
      <div class="sticky-block">
        <div class="position-relative">
          <p ref="textReveal" class="mxw-900 fo-32 fo-sm-48 fw-600 text-white mx-auto">
            <span ref="spans" class="reveal-span">we</span> <span ref="spans" class="reveal-span">are</span> <span
              ref="spans" class="reveal-span"
          >home</span>
            <span ref="spans" class="reveal-span">to</span> <span ref="spans" class="reveal-span">real</span> <span
              ref="spans" class="reveal-span"
          >experts,</span>
            <span ref="spans" class="reveal-span">multiple</span> <span ref="spans" class="reveal-span">asset</span>
            <span ref="spans" class="reveal-span">classes,</span>
            <span ref="spans" class="reveal-span">world-class</span> <span ref="spans" class="reveal-span">wealth-building</span>
            <span ref="spans" class="reveal-span">strategies,</span> <span ref="spans" class="reveal-span"
          >endless</span> <span ref="spans" class="reveal-span">rewards</span>
            <span ref="spans" class="reveal-span">for</span> <span ref="spans" class="reveal-span">an</span> <span
              ref="spans" class="reveal-span"
          >investing</span>
            <span ref="spans" class="reveal-span">experience</span> <span ref="spans" class="reveal-span"
          >tailored</span> <span ref="spans" class="reveal-span">to</span>
            <span ref="spans" class="reveal-span">you.</span> <br><br> <span ref="spans" class="reveal-span">for</span>
            <span ref="spans" class="reveal-span">every</span>
            <span ref="spans" class="reveal-span">kind</span> <span ref="spans" class="reveal-span">of</span> <span
              ref="spans" class="reveal-span"
          >investor,</span>
            <span ref="spans" class="reveal-span">real</span> <span ref="spans" class="reveal-span">investing</span>
            <span ref="spans" class="reveal-span">begins</span>
            <span ref="spans" class="reveal-span">here.</span>
          </p>
        </div>
      </div>
    </section>

    <section class="py-sm-128 px-sm-128">
      <div class="strategies mx-4 mt-4">
        <h3 class="text-center fo-32 fo-sm-48 text-white fw-600">
          invest in a diverse <br>range of offerings
        </h3>
        <p class="text-center fo-18 fo-sm-24 text-dull-white ">
          traditional assets, alternative <br> investments & everything in between.
        </p>
        <img v-if="isMobile" alt="all strategies" class="img-fluid"
             src="https://webstatic.stackfinance.co/website-v4/strat-list-mb.webp"
        >
        <img v-else alt="all strategies" class="d-block mx-auto mxw-750 h-auto"
             src="https://webstatic.stackfinance.co/website-v4/strats.webp"
        >
      </div>
      <div class="grid-view">
        <div class="titans">
          <h3 class="text-center fo-32 fo-sm-48 text-white fw-600">
            Stack Titans
          </h3>
          <p class="text-center fo-18 fo-sm-24 text-dull-white mxw-500 mx-auto px-4">
            our experience in managing
            wealth speaks for itself.
          </p>
          <img alt="titans image" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/titan-images.webp">
        </div>
        <div class="markets">
          <h3 class="text-center fo-32 fo-sm-48 text-white fw-600 px-4">
            outperform the markets
          </h3>
          <p class="text-center fo-18 fo-sm-24 text-dull-white mxw-500 mx-auto">
            with optimization that's powered by AI & guided by humans.
          </p>
          <img alt="markets perf." class="img-fluid"
               src="https://webstatic.stackfinance.co/website-v4/home-casper.webp"
          >
        </div>
      </div>
    </section>

    <section class="stack-one">
      <img :height="isMobile ? 30 : 40" alt="stack one logo" class="d-block mx-auto"
           src="https://webstatic.stackfinance.co/website-v4/stack-one.webp"
      >
      <h3 class="stack-one__heading">
        your <span class="text-golden">lifestyle</span> deserves an <span
          class="text-golden"
      >upgrade</span>
      </h3>
      <p class="text-center fo-18 fo-sm-32 text-dull-white mb-80">
        let us be your private concierge to <br>manage every aspect of your finances,<br>
        <span class="text-white">rewarding you immensely along the way.</span>
      </p>
      <marquee class="stack-one__marquee" direction="left" scrollamount="12">
        <img alt="credit card axis bank" class="mx-4" height="550"
             src="https://webstatic.stackfinance.co/website-v4/credit-card.webp"
        >
        <img alt="custom-reward" class="mx-4" height="550"
             src="https://webstatic.stackfinance.co/website-v4/custom-reward.webp"
        >
        <img alt="health-cover" class="mx-4" height="550"
             src="https://webstatic.stackfinance.co/website-v4/health-cover.webp"
        >
        <img alt="private eq" class="mx-4" height="550"
             src="https://webstatic.stackfinance.co/website-v4/private-eq.webp"
        >
      </marquee>

      <div class="stack-one__benefits">
        <div class="benefit-block">
          <img alt="manager icon" height="60" src="https://webstatic.stackfinance.co/website-v4/manger.webp">
          <p class="text-white ms-3 fo-sm-18 mb-0 mxw-200">dedicated wealth manager</p>
        </div>
        <img v-if="!isMobile" alt="star icon" height="20" src="https://webstatic.stackfinance.co/website-v4/star.webp">
        <div class="benefit-block">
          <img alt="exclusive-star" height="60" src="https://webstatic.stackfinance.co/website-v4/exclusive-star.webp">
          <p class="text-white ms-3 fo-sm-18 mb-0 mxw-200">exclusive investment opportunities</p>
        </div>
        <img v-if="!isMobile" alt="star icon" height="20" src="https://webstatic.stackfinance.co/website-v4/star.webp">
        <div class="benefit-block">
          <img alt="loan icon" height="60" src="https://webstatic.stackfinance.co/website-v4/loan.webp">
          <p class="text-white ms-3 fo-sm-18 mb-0 mxw-200">loans against mutual funds</p>
        </div>
      </div>
    </section>

    <section class="p-4 py-sm-128 px-sm-128">
      <div class="row">
        <div class="col-sm">
          <div class="d-flex flex-column h-100 justify-content-between align-items-start">
            <div>
              <h3 class="fo-32 fo-sm-48 text-white fw-600 mxw-500 text-center text-sm-start">
                first, get your personalized
                portfolio.
              </h3>
              <p class="fo-18 text-dull-white mt-4 mt-sm-5 text-center text-sm-start">
                in 2 minutes, you'll have an investment plan for long-term wealth
                creation.
              </p>
            </div>
            <NuxtLink to="/quiz/" v-if="!isMobile" class="app-btn">
              <img alt="pie icon" height="30" src="https://webstatic.stackfinance.co/website-v4/pie-icon.webp">
              <span class="ms-2">get my portfolio</span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-sm">
          <video :class="{'mxw-600': !isMobile}" autoplay class="img-fluid mx-auto br-20" loop
                 muted
                 src="https://webstatic.stackfinance.co/website-v4/risk-lvl-vid.mp4"
          ></video>
        </div>
      </div>
      <NuxtLink v-if="isMobile" to="/quiz/" class="app-btn my-4 w-100 text-center d-inline-block mx-auto d-table">
        <img alt="pie fraction" height="30" src="https://webstatic.stackfinance.co/website-v4/pie-icon.webp">
        <span class="ms-2">get my portfolio</span>
      </NuxtLink>
    </section>

    <section class="flagship-intro">
      <h3 class="d-flex align-items-center text-white font-weight-bold fo-32 justify-content-center">
        <img alt="Flagship icon" height="50"
             src="https://webstatic.stackfinance.co/aphrodite/images/strat-flagship.png"
        >
        <span class="ms-4">Flagship</span>
      </h3>
      <h4 class="flagship-intro__heading">
        the path to your first crore
      </h4>
      <img :height="isMobile ? 180 : 550" alt="Flagship post invest" class="d-block mx-auto"
           src="https://webstatic.stackfinance.co/website-v4/flagship-demo.webp"
      >
      <p class="my-5 text-dull-white text-center fo-24 fo-sm-32 mxw-600 mx-auto">
        a personalized portfolio based on your risk level & goals, ideal for <br>
        <span class="text-white">long-term wealth creation.</span>
      </p>
      <div class="d-flex justify-content-center">
        <NuxtLink class="app-btn" to="/flagship-customized-mutual-fund-portfolio/">explore Flagship</NuxtLink>
      </div>
    </section>

    <section class="flash-intro">
      <h3 class="d-flex align-items-center text-white font-weight-bold fo-32 justify-content-center">
        <img alt="Flash icon" height="50"
             src="https://webstatic.stackfinance.co/aphrodite/images/strat-flash.png"
        >
        <span class="ms-4">Flash</span>
      </h3>
      <h4 class="flash-intro__heading">
        earn returns literally every day
      </h4>
      <img :height="isMobile ? 180 : 550" alt="Flash app views" class="d-block mx-auto"
           src="https://webstatic.stackfinance.co/website-v4/flash-demo-img.webp"
      >
      <p class="my-5 text-dull-white text-center fo-24 fo-sm-32 mxw-600 mx-auto">
        a non-market linked P2P investment with returns of up to 11% p.a. interest <br>
        <span class="text-white">credited daily or monthly.</span>
      </p>
      <div class="d-flex justify-content-center">
        <NuxtLink class="app-btn" to="/flash-peer-to-peer-lending/">explore Flash</NuxtLink>
      </div>
    </section>

    <section class="px-sm-128 py-sm-128 p-4">
      <div class="row mb-5">
        <div class="col-sm-12">
          <p class="text-dull-white fo-24 fo-sm-32 mxw-500 mx-auto text-center">
            utilize wealth-building strategies used by the ultra-wealthy to <br>
            <span class="text-white">stay ahead of the curve</span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm mb-4 mb-sm-0">
          <img alt="nifty" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/nifty-up.webp">
          <p class="text-dull-white text-center px-5 mt-4 mx-4">we watch the markets & your portfolio every second.</p>
        </div>
        <div class="col-sm mb-4 mb-sm-0">
          <img alt="tax regime" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/new-tax.webp">
          <p class="text-dull-white text-center px-5 mt-4 mx-4">connect with our experts anytime on the Stack Forum.</p>
        </div>
        <div class="col-sm">
          <img alt="market down" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/market-down.webp">
          <p class="text-dull-white text-center px-5 mt-4 mx-4">
            get personalized investment recommendations based on
            trends.
          </p>
        </div>
      </div>
    </section>

    <section class="px-sm-128 py-sm-128 p-4">
      <div class="row">
        <div class="col-sm">
          <h3 class="fo-32 fo-sm-48 text-dull-white text-center text-sm-start fw-600 mxw-500">
            investors and backers
          </h3>
        </div>
        <div class="col-sm">
          <p class="text-dull-white fo-sm-24 mxw-500 text-center text-sm-start ">
            we’re grateful to our investors and partners for their support in making premium wealth management more
            accessible to everyone.
          </p>
        </div>
      </div>
      <div class="investors-grid">
        <div class="investor-block">
          <img alt="Kunal shah" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/kunal.webp">
          <h3 class="text-center text-white font-weight-bold">Kunal Shah</h3>
          <p class="text-dull-white text-center fo-sm-18">CRED</p>
        </div>
        <div class="investor-block">
          <img alt="Immad Akhund" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/mercury.webp">
          <h3 class="text-center text-white font-weight-bold">Immad Akhund</h3>
          <p class="text-dull-white text-center fo-sm-18">Mercury</p>
        </div>
        <div class="investor-block">
          <img alt="Michael Katchen" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/Katchen.webp">
          <h3 class="text-center text-white font-weight-bold">Michael Katchen</h3>
          <p class="text-dull-white text-center fo-sm-18">Wealthsimple</p>
        </div>
        <div class="investor-block">
          <img alt="Paul Desmarais" class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/paul.webp">
          <h3 class="text-center text-white font-weight-bold">Paul Desmarais</h3>
          <p class="text-dull-white text-center fo-sm-18">Portage</p>
        </div>
      </div>
      <div class="vc-list">
        <marquee class="vc-marquee" direction="left" scrollamount="12">
          <img alt="credit card axis bank" class="mx-4" height="50"
               src="https://webstatic.stackfinance.co/website-v4/dragon-capital.webp"
          >
          <img alt="custom-reward" class="mx-4" height="50"
               src="https://webstatic.stackfinance.co/website-v4/ycombinator.webp"
          >
          <img alt="health-cover" class="mx-4" height="60"
               src="https://webstatic.stackfinance.co/website-v4/angelist.webp"
          >
          <img alt="goodwater eq" class="mx-4" height="50"
               src="https://webstatic.stackfinance.co/website-v4/goodwater.webp"
          >
          <img alt="sosv eq" class="mx-4 img-fluid"
               src="https://webstatic.stackfinance.co/website-v4/sosv.webp"
          >
        </marquee>
      </div>
    </section>

    <section class="bg-dark-gray px-sm-128 py-sm-128 p-4">
      <h3 class="text-center text-white fo-32 fo-sm-48 fw-600">stories of our investors</h3>
      <div class="py-sm-128">
      <Testimonial :is-mobile="isMobile"></Testimonial>
      </div>
    </section>

    <FaqSection :is-mobile="isMobile"></FaqSection>
    <GrowWealth :is-mobile="isMobile" @download="showModal = true"></GrowWealth>
    <NewsletterBox :is-mobile="isMobile"></NewsletterBox>
    <Footer :is-mobile="isMobile"></Footer>
    <Download v-if="showModal" @close="showModal = $event"></Download>
  </main>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
const showModal = ref(false);

let size = ref<number>(1200);
const page = ref(null);
const textReveal = ref(null);
let observer = ref<IntersectionObserver>(null);

onMounted(() => {
  if (page.value) {
    size.value = page.value['clientWidth'];
  }

  const options = {
    root: null,
    rootMargin: '-150px',
    threshold: 0 // When at least 50% of the element is visible
  };

  observer = new IntersectionObserver(handleIntersection, options);
  const spans = textReveal.value.querySelectorAll('.reveal-span');
  spans.forEach(span => observer.observe(span));
});

function handleIntersection(entries) {
  entries.forEach((entry) => {
    const span = entry.target;
    const isVisible = entry.isIntersecting;
    span.style.opacity = isVisible ? '1' : '0.2';
  });
}

let isMobile = ref(false);
watch(() => size.value, () => isMobile.value = size.value < 768);

onUnmounted(() => observer.disconnect());
</script>

<style lang="scss">
@import '../assets/scss/helpers/index.scss';

.main {
  background-color: #101010;

  .hero {
    padding-top: 24px;
    @extend .px-sm-128;

    &-heading {
      color: #FFF;
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 8px;
      text-align: center;

      @media screen and (min-width: 768px) {
        font-size: 64px;
        margin-bottom: 24px;
      }
    }

    &-desc {
      color: #959595;
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      padding: 0 24px;

      @media screen and (min-width: 768px) {
        font-size: 32px;
      }
    }
  }

  .scroller-container {
    padding: 24px;
    @extend .px-sm-128;
    height: 100vh;
    position: relative;

    .sticky-block {
      position: sticky;
      top: 120px;
    }

    .reveal-span {
      opacity: .2;
      margin: 0 4px;
      transition: opacity 0.3s ease;
    }
  }

  .company-highlight {
    padding: 24px;

    &__main {
      font-size: 24px;
      color: $text-color-lt;
      font-weight: bold;

      @media screen and (min-width: 768px) {
        font-size: 32px;
      }
    }

    &__support {
      margin-bottom: 0;
      color: #7c7c7c;
    }
  }

  .strategies {
    padding: 48px;
    border-radius: 24px;
    background-image: linear-gradient(to bottom, #232323 0%, $dark-color 102%), linear-gradient(to bottom, #1e1e1e 0%, rgba(0, 0, 0, 0) 100%);
  }

  .grid-view {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 1fr;
    margin-top: 24px;
    padding: 24px;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    .titans {
      border-radius: 24px;
      background-image: linear-gradient(to bottom, #2C2119 1%, #171717), linear-gradient(to bottom, #171717, #171717), linear-gradient(to bottom, #1e1e1e 0%, rgba(0, 0, 0, 0) 100%);
      padding-top: 24px;

      @media screen and (min-width: 768px) {
        padding-top: 48px;
      }
    }

    .markets {
      border-radius: 24px;
      background-image: linear-gradient(to bottom, #1b2d22, #181818), linear-gradient(to bottom, #1e1e1e 0%, rgba(0, 0, 0, 0) 100%);
      padding-top: 24px;

      @media screen and (min-width: 768px) {
        padding-top: 48px;
      }
    }
  }

  .stack-one {
    padding: 24px;
    @extend .py-sm-128;
    background-size: cover;
    background-position: center center;
    background-image: url('https://webstatic.stackfinance.co/website-v4/stackone-bg.webp');

    &__heading {
      font-weight: 500;
      text-align: center;
      color: #FFF;
      margin-bottom: 32px;
      margin-top: 24px;
      font-size: 32px;

      @media screen and (min-width: 768px) {
        font-size: 64px;
        margin-bottom: 64px;
        margin-top: 32px;
      }
    }

    &__benefits {
      @extend .px-sm-128;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-top: 32px;

      @media screen and (min-width: 768px) {
        flex-direction: row;
        margin-top: 80px;
      }

      .benefit-block {
        display: flex;
        align-items: center;
        margin: 24px;
      }
    }
  }

  .flagship-intro {
    padding: 24px;
    @extend .px-sm-128;
    @extend .py-sm-128;
    background-size: cover;
    background-position: center center;
    background-image: url('https://webstatic.stackfinance.co/website-v4/flag-grad.webp');

    &__heading {
      font-size: 32px;
      text-align: center;
      background-image: linear-gradient(to left, #eee, rgba(255, 255, 255, 21%));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
      margin: 24px auto;

      @media screen and (min-width: 768px) {
        font-size: 64px;
        max-width: 600px;
        margin: 24px auto 48px;
      }
    }
  }

  .flash-intro {
    padding: 24px;
    @extend .px-sm-128;
    @extend .py-sm-128;
    background-size: cover;
    background-position: center center;
    background-image: url('https://webstatic.stackfinance.co/website-v4/flash-grad.webp');

    &__heading {
      font-size: 32px;
      text-align: center;
      background-image: linear-gradient(to left, #eee, rgba(255, 255, 255, 21%));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 600;
      margin: 24px auto;

      @media screen and (min-width: 768px) {
        font-size: 64px;
        max-width: 600px;
        margin: 24px auto 48px;
      }
    }
  }

  .investors-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    margin-top: 24px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(4, 1fr);
      margin-top: 32px;
    }
  }

  .vc-list {
    padding: 32px 0;
    border-radius: 20px;
    background-color: #202020;
    margin-top: 48px;

    .vc-marquee {
      display: flex;
      align-items: center;
    }
  }

}
</style>
