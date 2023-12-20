<template>
  <section class="blog-grp">
    <div class="d-flex justify-content-sm-between align-items-center">
      <div v-if="showHeader" class="blog-grp__head">
        <h3 class="text-lowercase text-white fw-600">{{ currentGroup.title }}</h3>
      </div>
      <NuxtLink class="d-flex align-items-center text-decoration-none" v-if="meta?.next" :to="'/blogs/' + tag + '/'">
        <span class="text-white me-2 fw-600">view all</span>
        <img alt="arrow" height="8" class="rotate-z-90n"
             src="https://webstatic.stackfinance.co/website-v4/chev-down.webp">
      </NuxtLink>
    </div>
    <div v-if="posts && posts.length" class="blog-grp__grid">
      <BlogCard v-for="p in posts" :key="p.uuid" :blog="p" :is-mobile="isMobile" :category="tag"></BlogCard>
    </div>
    <NuxtLink class="app-btn--sm text-white shadow-none text-decoration-none" v-if="isMobile && meta?.next" :to="'/blogs/' + tag + '/' ">
      view all
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import {getBlogCategories} from '~/composables/repository/useBlog';

const props = defineProps({
  showHeader: Boolean,
  tag: String,
  isMobile: Boolean,
  posts: Array,
  meta: Object
});


const currentGroup = ref({});
onMounted(() => {
  const categories = getBlogCategories();
  currentGroup.value = categories[props.tag];
});
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Caudex:wght@400;700&display=swap');
@import '../../assets/scss/helpers/variables';

.blog-grp {
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  &__head {
    font-size: 32px;
    position: relative;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      font-size: 48px;
    }

    &:before {
      content: ' ';
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      top: -64px;
      width: 150px;
      height: 150px;
      position: absolute;
      background-image: linear-gradient(to right, $primary-color, $pink);
      border-radius: 50%;
      -webkit-filter: blur(60px);
      filter: blur(60px);
      opacity: .3;
      z-index: 0;
      pointer-events: none;
    }
  }

  &__grid {
    display: grid;
    min-width: 300px;
    max-width: 350px;
    overflow: auto;
    margin-bottom: 24px;
    grid-column-gap: 16px;
    justify-content: space-between;
    grid-template-columns: repeat(4, minmax(270px, max-content));

    @media screen and (min-width: 768px) {
      max-width: 100%;
      grid-column-gap: 24px;
    }

    @media screen and (min-width: 1400px) {
      grid-column-gap: 40px;
    }
  }
}
</style>
