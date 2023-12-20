<template>
  <div class="modal-container">
    <div class="nl-modal">
      <button class="close-button" @click="closeModal($event)">
        <img alt="Close modal" data-not-lazy src="https://webstatic.stackfinance.co/website/close-black.svg" height="25px">
      </button>
      <div class="row pt-4 pb-5">
        <div class="col-sm-8 content-wrapper">
          <h3 class="mb-0">stories of wealth.</h3>
          <h1 class="font-weight-bold">join 70,000+ readers.</h1>
          <p>
            see beyond the headline with our newsletter, along with insightful thought pieces about everything finance.
          </p>
          <p>p.s. we run exclusive contests where you can win cool prizes!</p>
          <div class="subscribe w-sm-75">
            <input placeholder="warren.buffett@gmail.com" class="subs-input" maxlength="31" minlength="8"
                   type="email" name="newsletter" v-model="mailId">
            <button v-if="isMobile" class="border-0 bg-transparent p-0" @click="subscribe" :disabled="isSubmitting">
              <img src="https://webstatic.stackfinance.co/website/arrow-black.webp" alt="subs-arrow">
            </button>
            <button v-else class="border-0 br-8 app-bg-dark text-white shadow-none py-2 px-4 ms-3"
                    @click="subscribe" :disabled="isSubmitting">
              subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsletterModal',
  props: {
    isMobile: Boolean
  },
  data() {
    return {
      mailId: null,
      isSubmitting: false
    };
  },
  mounted() {
    document.addEventListener('keydown', this.listenerCallback);
  },
  methods: {
    listenerCallback({ code }) {
      if (code === 'Escape') {
        this.closeModal();
      }
    },
    closeModal(_) {
      this.$emit('close', false);
    },
    subscribe() {
      if (!this.mailId || !this.mailId.trim()) {
        return;
      }

      $fetch(`${process.env.API_URL}/newsletters/subscribe`, { method: 'post', body: {email: this.mailId} }).then((res) => {
        this.$router.push('/newsletter-subscribed');
      }).catch((e) => {
        this.isSubmitting = false;
        this.mailId = null;
        console.error('error caught ==============' + e.response);
      }).finally(() => {
        this.mailId = null;
        this.isSubmitting = false;
      });
    }
  }
};
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables.scss';

.modal-container {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(4px);
    height: 100vh;
    background-color: rgba($text-color, .3);
  }

  .nl-modal {
    position: relative;
    padding: 24px;
    z-index: 33;
    border-radius: 24px;
    box-shadow: 0 4px 9px rgba(55, 47, 117, 0.07), 0 35px 55px rgba(31, 26, 67, 0.13);
    margin: 128px 0;
    width: 100%;
    overflow: hidden;
    max-width: 342px;
    background-image: url('https://webstatic.stackfinance.co/website/nl-bg.png');
    background-size: cover;

    @media screen and (min-width: 768px) {
      max-width: 750px;
      margin: 0;
      height: 450px;
    }

    .close-button {
      position: absolute;
      right: 16px;
      top: 16px;
      border: none;
      background-color: transparent;
    }

    .content-wrapper {
      h3 {
        font-size: 24px;
      }

      h2 {
        font-size: 32px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

</style>
