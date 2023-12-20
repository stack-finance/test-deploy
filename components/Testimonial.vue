<template>
  <section class="testimonial-container">
    <div class="row">
      <div v-if="!isMobile" class="col-sm-2 d-flex align-items-center justify-content-center">
        <button class="border-0 bg-transparent" @click="prev()">
          <img height="40" src="https://webstatic.stackfinance.co/website-v4/arrow-left.webp" alt="prev slide">
        </button>
      </div>
      <div class="col-sm-8">
        <Carousel ref="slides" v-bind="settings">
          <Slide v-for="(review, i) in testimonials" :key="i">
            <div class="review-card">
              <img data-not-lazy class="reviewer-img" :src="review.reviewerImg" :alt="review.reviewerName" />
              <div class="ms-sm-5">
                <div class="d-sm-flex justify-content-between align-items-center mt-4 mt-sm-0">
                  <h4 class="text-white font-weight-bold fo-sm-24 text-center">{{ review.reviewerName }}</h4>
                  <p class="text-dull-white text-center">{{ review.reviewerPosition }}</p>
                </div>
                <p class="text-center text-sm-start text-dull-white fo-18 fo-sm-24 my-4">{{ testimonials[i].reviewComment }}</p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
      <div v-if="!isMobile" class="col-sm-2 d-flex align-items-center justify-content-center">
        <button class="border-0 bg-transparent ms-1" @click="next()">
          <img class="rotate-z-180" height="40" src="https://webstatic.stackfinance.co/website-v4/arrow-left.webp" alt="next slide">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const testimonials = [
  {
    reviewerImg: 'https://webstatic.stackfinance.co/website-v4/lokendra.webp',
    reviewerName: 'Lokendra Rathore',
    reviewComment:
        'I recently started using stack to save for my next solo trip, it actually allows me to have a goal ' +
        'based portfolio and put me out of my misery. It is easy to use and completely secure. Hands down the best yet simplest investing app I have ever used!',
    reviewerPosition: 'Bank Manager',
    reviewerSrcImg:
        'https://webstatic.stackfinance.co/website/colored-linkedin.png'
  },
  {
    reviewerImg: 'https://webstatic.stackfinance.co/website-v4/aviral.webp',
    reviewerName: 'Aviral Sharma',
    reviewComment:
        'I joined Stack through a friend’s referral, and  I have been using it to save for my rainy day funds. Quite interesting I must say, it seems like a good solution for people who shy away from investing thinking that it’s complicated. Great job Stack team.',
    reviewerPosition: 'Senior Software Engineer',
    reviewerSrcImg:
        'https://webstatic.stackfinance.co/website/colored-playstore.png'
  },
  {
    reviewerImg: 'https://webstatic.stackfinance.co/website-v4/vishal.webp',
    reviewerName: 'Lt. Vishal Jain',
    reviewComment:
        'There are a lot of investing apps on the market, but honestly, as a beginner, almost all of them were confusing for me. Stack genuinely simplifies investing for me. I just had to answer a few questions and my money was put to work according to my goals . It just is awesome!',
    reviewerPosition: 'Indian Army',
    reviewerSrcImg:
        'https://webstatic.stackfinance.co/website/colored-twitter.png'
  },
  {
    reviewerImg: 'https://webstatic.stackfinance.co/website-v4/rajat.webp',
    reviewerName: 'Rajat Grover',
    reviewComment:
        'I never thought I’d say this for an investing app but Stack is the coolest app ever. It catches your eye right from the onboarding, the UI/UX is great, it is so easy to navigate, overall I am a fan.',
    reviewerPosition: 'Marketing Lead',
    reviewerSrcImg:
        'https://webstatic.stackfinance.co/website/colored-playstore.png'
  },
  {
    reviewerImg: 'https://webstatic.stackfinance.co/website-v4/trisha.webp',
    reviewerName: 'Trisha Mody',
    reviewComment:
        'Stack’s app has an awesome design and user experience. It felt easy to navigate and understand my investing goals. I have multiple goals on the app now and like the option of all the different auto investment options.',
    reviewerPosition: 'UX Designer at Microsoft',
    reviewerSrcImg:
        'https://webstatic.stackfinance.co/website/colored-playstore.png'
  }
];
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: 3000,
};

defineProps({isMobile: Boolean});

const slides = ref(null);
function next() {
  slides.next();
}

function prev() {
  slides.prev();
}

</script>

<style lang="scss">
@import '../assets/scss/helpers/variables';

.testimonial-container {
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  .slick-slide {
    padding: 0 8px;
  }

  .review-card {
    padding: 24px;
    max-width: 900px;
    margin: 0 auto;
    min-height: 390px;
    display: flex !important;
    align-items: center;
    position: relative;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    &:before {
      content: ' ';
      width: 2px;
      height: 100%;
      position: absolute;
      left: 0;
      z-index: 12;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('https://webstatic.stackfinance.co/website-v4/flare.webp');
    }

    &:after {
      content: ' ';
      width: 2px;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 12;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url('https://webstatic.stackfinance.co/website-v4/flare.webp');
    }

    .reviewer-img {
      border-radius: 20px;
      object-fit: cover;
      max-width: 200px;
      height: 250px;
    }

  }
}
</style>
