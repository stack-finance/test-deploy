<template>
  <footer class="app-footer">
    <section class="row">
      <div class="col-sm-5">
        <div class="d-flex flex-column justify-content-between align-items-center align-items-sm-start h-100">
          <div class="text-center text-sm-start">
            <img alt="logo-footer" height="35" src="https://webstatic.stackfinance.co/website-v4/stack-logo.webp">
            <h4 class="mt-4 text-dull-white fw-600 fo-18">unleash your wealth's potential.</h4>
          </div>
          <div class="sm-links mt-sm-4 mb-3">
            <a class="sm-links-item gt-ln" href="https://stackwealth.app.link/HK9nXXbLCAb" rel="noopener"
               target="_blank">
              <img alt="Stack on linkedIn" src="https://webstatic.stackfinance.co/website/linkedin-gry.svg">
            </a>
            <a class="sm-links-item gt-insta" href="https://stackwealth.app.link/728QdESBCA" rel="noopener"
               target="_blank">
              <img alt="Stack on instagram" src="https://webstatic.stackfinance.co/website/insta-gry.svg">
            </a>
            <a class="sm-links-item gt-twt" href="https://stack-wealth.app.link/MIUcDrSpZBb" rel="noopener" target="_blank">
              <img alt="Stack on twitter" height="35px" src="https://webstatic.stackfinance.co/website/twitter-gry.svg">
            </a>
            <a class="sm-links-item gt-yt" href="https://stackwealth.app.link/VegQUhxKCAb"
               rel="noopener" target="_blank">
              <img alt="Stack on youtube" src="https://webstatic.stackfinance.co/website/yt-gry.svg">
            </a>
          </div>
        </div>
      </div>
      <div class="col-sm mt-5 mt-sm-0">
        <div class="footer-links">
          <div class="text-start">
            <h6 class="footer-links__category">products</h6>
            <NuxtLink class="footer-links__item" to="/flagship-customized-mutual-fund-portfolio/">Flagship</NuxtLink>
            <NuxtLink class="footer-links__item" to="/flash-peer-to-peer-lending/">Flash</NuxtLink>
            <NuxtLink class="footer-links__item" to="/safe-haven-investing-in-fixed-deposits-ncd-bonds/">Safe Haven</NuxtLink>
            <NuxtLink class="footer-links__item" to="/opportunities-thematic-investing/">Opportunities</NuxtLink>
          </div>
          <div class="text-start">
            <h6 class="footer-links__category">resources</h6>
            <NuxtLink class="footer-links__item" to="/blogs/">blog</NuxtLink>
            <NuxtLink class="footer-links__item" to="/faqs/">faqs</NuxtLink>
            <NuxtLink to="/masterclass/" class="footer-links__item">masterclass</NuxtLink>
            <NuxtLink to="/calculators/" class="footer-links__item">calculators</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <hr class="bg-border-color">
    <section class="row mt-5">
      <div class="col-sm">
        <p class="text-dull-white mb-4 text-sm-start text-center">
          © {{ currentYear }} Stackfin Technology Pvt Ltd.
        </p>
      </div>
      <div class="col-sm mt-4 mt-sm-0">
        <div class="d-flex justify-content-center justify-content-sm-end">
          <NuxtLink class="text-dull-white text-decoration-none me-4 pp-link" to="/policies/privacy-policy/">Privacy</NuxtLink>
          <NuxtLink class="text-dull-white text-decoration-none me-4 sp-link" to="/policies/security-policy/">Security</NuxtLink>
          <NuxtLink class="text-dull-white text-decoration-none tnc-link" to="/policies/terms-and-conditions/">Terms</NuxtLink>
        </div>
      </div>
    </section>
    <section class="declaration">
      <p class="disclaimer">
        Mutual Fund distributor with AMFI Registration No. ARN: 171554
      </p>
      <p class="disclaimer">
        StackFin Technology Private Limited CIN number : U72900HR2019PTC080074
        <br/>Corporate Office: 3rd Floor, Site, 1, 19th Main Rd, above Mast Marathi Restaurant,
        Sector 3, HSR Layout, Bengaluru, Karnataka 560102, Phone: +91 88848 87900
      </p>
      <p class="disclaimer">
        Financial Products and Services are being provided by StackFin Technology Private Limited and its group
        companies/
        affiliates/ third party service partners listed here
      </p>

      <p class="disclaimer">
        Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme
        related documents carefully before investing. Past performance is not indicative of future returns. Please
        consider your specific investment requirements before choosing a fund, or designing a portfolio that suits your
        needs.
      </p>
    </section>
  </footer>
</template>

<script setup lang="ts">

defineProps({ isMobile: Boolean });

const currentYear = computed(() => new Date().getFullYear());

</script>

<style lang="scss" scoped>
@import '../assets/scss/helpers/variables.scss';
@import '../assets/scss/helpers/atomic.scss';

.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 32px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
  }

  &__category {
    font-size: 18px;
    font-weight: 600;
    color: #FFF;
    margin-bottom: 24px;
    text-transform: lowercase;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-bottom: 32px;
    }
  }

  &__item {
    font-size: 14px;
    font-weight: 500;
    color: $text-color-white-lt;
    display: block;
    margin-bottom: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
      font-size: 20px;
    }
  }
}

.declaration {
  margin-top: 24px;

  .disclaimer {
    line-height: 1.2;
    color: $text-color-lt;
    font-size: 12px;
    margin-bottom: 0.8rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }
}

.text-lt {
  color: rgba($color: white, $alpha: 0.7);
}

.app-footer {
  padding: 48px 24px;
  @extend .px-sm-128;
  @extend .py-sm-128;
  background-color: $text-color;
}

.sm-links {
  display: flex;
  width: 100%;
  margin-top: 24px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }

  &-item {
    margin-right: 32px;
    margin-left: 0;
  }
}
</style>
