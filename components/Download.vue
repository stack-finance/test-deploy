<template>
  <div class="modal-container">
    <div class="download-modal">
      <div class="download-modal-content">
        <button class="close-button cursor-pointer z-2" @click="closeModal">
          <img alt="Close modal" data-not-lazy src="https://webstatic.stackfinance.co/website/close-black.svg" height="25">
        </button>
        <div class="d-flex mxh-520">
          <div class="w-60 p-5">
<!--            <div class="form-area">-->
<!--              <h2 class="fo-24 fw-600 text-white">-->
<!--                enter your email id to get the app link in your inbox-->
<!--              </h2>-->
<!--              <div class="form-section">-->
<!--                <form class="d-sm-flex flex-column justify-space-sm-between w-100"-->
<!--                      @submit.prevent="updateUser()">-->
<!--                  <div class="field-grp w-100 me-sm-3">-->
<!--                    <label class="visually-hidden" for="email">email</label>-->
<!--                    <div class="position-relative my-4">-->
<!--                      <input :disabled="mailSent" id="email" v-model="userEmail" autofocus class="email-field" minlength="8"-->
<!--                             placeholder="xyz@gmail.com" type="email">-->
<!--                      <div v-if="showError" class="error-msg w-100">-->
<!--                        {{ error }}-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <button :disabled="isSubmitting || mailSent" class="btn form-btn w-100 d-block" type="submit">-->
<!--                    {{ mailSent ? 'Invite Sent' : 'Send Link' }}-->
<!--                  </button>-->
<!--                </form>-->
<!--              </div>-->
<!--            </div>-->
            <div class="direct-download">
              <div class="row">
                <div class="col-sm-6">
                  <img class="img-fluid" src="https://webstatic.stackfinance.co/website-v4/dwn-qr.webp" alt="QR-black">
                </div>
                <div class="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                  <p class="text-dull-white text-center">or get Stack Wealth on</p>
                  <a class="store-btn w-100" href="https://play.google.com/store/apps/details?id=co.stackfinance.stackwealth">
                    <img height="20" src="https://webstatic.stackfinance.co/website-v4/dwn-play.webp" alt="android-store">
                    <span class="ms-2">Play Store</span>
                  </a>
                  <a class="store-btn w-100" href="https://apps.apple.com/app/stack-wealth-mutual-fund-sip/id6451255621">
                    <img height="20" src="https://webstatic.stackfinance.co/website-v4/dwn-app.webp" alt="apple-store">
                    <span class="ms-2">App Store</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="w-40">
            <video ref="welcomeVid" class="img-fluid" @click="playPause" poster="https://webstatic.stackfinance.co/website-v4/flag-thumbnail.webp">
              <source src="https://webstatic.stackfinance.co/aphrodite/videos/welcome.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);
const closeModal = () => {
  emit('close', false);
};

onMounted(() => {
  document.addEventListener('keydown', ({ code }) => {
    if (code === 'Escape') {
      closeModal();
    }
  });
});

const welcomeVid = ref(null);
function playPause() {
  if (!welcomeVid.value) {
    return;
  }

  const el: HTMLVideoElement = welcomeVid.value;
  el.paused ? el.play() : el.pause();
}

onUnmounted(() => document.removeEventListener);
</script>

<style lang="scss">
@import '../assets/scss/helpers/variables.scss';

.modal-container {
  top: 0;
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
    background-color: rgba($text-color, .3);
    height: 100vh;
  }

  .download-modal {
    position: relative;
    z-index: 33;
    background-color: $dark-color;
    border-radius: 24px;
    box-shadow: 0 4px 9px rgba(55, 47, 117, 0.07), 0 35px 55px rgba(31, 26, 67, 0.13);
    margin: 128px 0;
    width: 100%;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      max-width: 880px;
      margin: 0;
    }

    &-content {
      display: flex;
    }

    .close-button {
      position: absolute;
      right: 16px;
      top: 16px;
      border: none;
      background-color: transparent;
    }

    .form-area {

      .field-grp {
        .error-msg {
          color: #F44336;
          font-size: 12px;

          @media screen and (min-width: 768px) {
            position: absolute;
          }
        }
      }

      .email-field {
        background: transparent !important;
        border-radius: 12px;
        height: 50px;
        width: 100%;
        padding-left: 16px;
        font-size: 20px;
        font-weight: 500;
        color: $text-color-lt;
        border: 1px solid $text-color-lt;
        transition: 0.3s all ease-in-out;

        &:focus-visible {
          box-shadow: none;
          outline: none;
        }

        &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: #c4c2cb;
          opacity: .6;
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
          color: #c4c2cb;
          opacity: .6;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
          color: #c4c2cb;
          opacity: .6;
        }
      }

      .form-btn {
        background-color: #303030;
        border-radius: 12px;
        color: #FFF;
        height: 50px;

        &:disabled {
          cursor: progress;
          opacity: .4;
        }
      }
    }

    .direct-download {
      //margin-top: 48px;
      //padding: 48px 0 0;
      //border-top: 1px solid #303030;

      .store-btn {
        background-color: $primary-color;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin: 8px auto;
        padding: 8px;

        &:hover {
          text-decoration: none;
        }
      }
    }

    .modal-batch {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      align-items: center;
      max-width: 200px;
      margin: 24px auto;
    }

    .rocket-img{
      height: 150px;
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
