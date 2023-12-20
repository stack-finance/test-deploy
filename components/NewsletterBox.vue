<template>
  <section class="mt-5 px-sm-128 py-sm-128">
    <div class="newsletter-box">
      <img v-if="!isMobile" alt="dots left" class="l-dots"
           src="https://webstatic.stackfinance.co/website/subs-dots-left.webp"
      >
      <div class="d-flex justify-content-center">
        <span class="readers">join 100K+ readers</span>
      </div>
      <h3 class="fo-24 fo-sm-32 text-dull-white font-weight-bold text-center my-5">
        subscribe to <span class="text-white">The Sunday Investor</span> & impress<br>
        your coworkers with your finance insights
      </h3>
      <div class="d-flex justify-content-center mb-5">
        <div v-if="!isSuccess" class="subs-box">
          <input id="mail" v-model="mailId" name="email" placeholder="warren.buffet@gmail.com" type="email">
          <button :disabled="isSubmitting" class="btn subs-btn" @click="subscribe">Subscribe</button>
        </div>
        <p v-else class="newsletter-done">You're subscribed now!</p>
      </div>
      <p class="d-flex justify-content-center mt-4 fo-14 fo-sm-18 fw-500 text-color-lt">
        no promotions • no spam • only finance
      </p>
      <img v-if="!isMobile" alt="dots right" class="r-dots"
           src="https://webstatic.stackfinance.co/website/subs-dots-right.webp"
      >
    </div>
  </section>
</template>

<script lang="ts" setup>

defineProps({
  isMobile: Boolean
});

let mailId = ref<string | null>(null);
let isSubmitting = ref<boolean>(false);
let isSuccess = ref<boolean>(false);

async function subscribe() {
  if (!mailId.value?.trim()) {
    return;
  }

  isSubmitting.value = true;

  try {
    const { public: { apiUrl } } = useRuntimeConfig();
    const res = await $fetch(`${apiUrl}/newsletters/subscribe`, {email: mailId.value});

    /// TODO: Check if API is working
    if (!res.success) {
      isSubmitting.value = false;
      mailId.value = null;
      return;
    }
    isSuccess.value = true;

  } catch (e) {
    isSubmitting.value = false;
    mailId.value = null;
    console.error('error caught ==============' + e.response);
  }
}

</script>

<style lang="scss" scoped>
@import '../assets/scss/helpers/index.scss';

.newsletter-box {
  position: relative;
  background-color: $dark-color;
  padding: 40px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding: 64px;
    border-radius: 20px;
  }

  .l-dots, .r-dots {
    position: absolute;
    height: auto;
    width: 280px;
    top: 0;
  }

  .l-dots {
    left: 0;
  }

  .r-dots {
    right: 0;
  }

  .readers {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 48px;
    border: solid 1px rgba(109, 100, 216, 0.12);
    background-color: rgba(109, 100, 216, 0.08);
    color: #FFF;
    font-weight: 500;
  }

  .subs-box {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    grid-row-gap: 16px;
    grid-column-gap: 8px;
    border-radius: 12px;
    box-shadow: 0 40px 100px 0 rgba(0, 0, 0, 0.25);
    background-color: rgba(109, 100, 216, 0.2);

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    input[type='email'] {
      background-color: transparent;
      border: none;
      width: 240px;
      color: #FFF;
      padding-left: 8px;
      text-align: center;

      &:focus {
        outline: none;
      }

      @media screen and (min-width: 768px) {
        text-align: left;
      }
    }

    .subs-btn {
      color: #FFF;
      background-color: $primary-color;
      width: 100%;

      @media screen and (min-width: 768px) {
        width: 170px;
      }
    }
  }

  .newsletter-done {
    background-color: rgba(109, 100, 216, 0.2);
    color: #FFF;
    font-weight: 500;
    padding: 16px;
    border-radius: 8px;
  }
}
</style>
