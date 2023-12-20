<template>
  <section class="p-4 p-sm-5" :class="{'app-card': !isMobile}">
    <div class="quiz-wrapper">
      <div class="quiz-question">
        <small class="text-color-lt mb-3">{{ currentQue.id }}/8</small>
        <h1 class="text-white fw-600 fo-24 fo-sm-40 que-glare">{{ currentQue.question }}</h1>
      </div>
      <div class="quiz-options">
        <button v-for="(option, i) in currentQue.options" :key="i" class="app-radio"
                :class="{'selected': selectedOption === (i + 1)}" @click="updateScore(option.weight, i + 1)">
          <span class="d-inline-flex me-2">{{ option.text }}</span>
          <img v-if="selectedOption === (i + 1)" data-not-lazy height="20"
               src="https://webstatic.stackfinance.co/website-v4/quiz-check.webp" alt="check icon">
        </button>
        <button class="btn app-btn--white app-btn--sm mt-4 w-100" @click="moveToNext">Proceed</button>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import {getQuiz} from '~/composables/useQuiz';

defineProps({isMobile: Boolean});

let allQuestions = ref([]);
let score = ref({});
let currentQue = ref(null);

onMounted(() => {
  allQuestions.value = getQuiz();
  currentQue.value = allQuestions.value[0];
});

let selectedOption = ref(null);

function updateScore(weight: number, optionNumber: number) {
  score.value[currentQue.value.id] = weight;
  selectedOption.value = optionNumber;
}

function moveToNext() {
  selectedOption.value = null;

  if (currentQue.value?.id >= 7) {
    localStorage.setItem('score', JSON.stringify(score));
    navigateTo('/quiz/result/');
    return;
  }

  /// Option is not selected for current question
  if (!score.value[currentQue.value?.id]) {
    return;
  }

  currentQue.value = allQuestions.value[currentQue.value?.id];
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/helpers/index.scss';

.quiz-wrapper {
  display: grid;
  grid-gap: 32px;

  @media screen and (min-width: 768px) {
    grid-gap: 48px;
    grid-template-columns: 1fr 350px;
  }

  .que-glare {
    position: relative;

    &:before {
      content: ' ';
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      top: 80px;
      width: 250px;
      height: 250px;
      position: absolute;
      background-color: $primary-color;
      border-radius: 50%;
      -webkit-filter: blur(100px);
      filter: blur(100px);
      opacity: .4;
      z-index: 0;
      pointer-events: none;

      @media screen and (min-width: 768px) {
        left: 0;
        top: 80px;
        -webkit-transform: translate(0, -50%);
        -ms-transform: translate(0, -50%);
        transform: translate(0, -50%);
      }
    }
  }
}
</style>
