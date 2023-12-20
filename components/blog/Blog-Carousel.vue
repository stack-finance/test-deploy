<template>
  <div class="w-100">
    <Carousel v-if="blogs.length" class="mx-auto" v-bind="settings" @slide-end="current = $event.currentSlideIndex">
      <Slide v-for="(p, x) in blogs" :key="x">
        <div class="blog-slide">
          <div class="px-2">
            <img :src="p.coverImg" :alt="p.slug" class="blog-slide__img" />
          </div>
          <p v-if="current === x" class="blog-slide__title">{{ p.title }}</p>
          <div class="d-flex justify-content-center">
            <NuxtLink v-if="current === x" class="d-flex align-items-center" :to="p.link">
              <span class="blog-slide__link">Read now &nbsp;</span> <img alt="arrow" height="12" src="https://webstatic.stackfinance.co/website/arrow.svg">
            </NuxtLink>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
defineProps({
  blogs: {
    type: Array,
    required: true
  }
});
const settings = {
  itemsToShow: 1,
  snapAlign: 'center',
  autoplay: 3000,
};

const current = ref(0);

</script>

<style lang="scss">
@import '../../assets/scss/helpers/variables';

.blog-slide {
  &__img {
    user-select: none;
    width: 100%;
    border-radius: 24px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.16);
    height: 200px;
    object-fit: contain;
  }
  &__link{
    display:inline-block;
    color: $primary-color !important;
  }
  &__title {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    margin-top: 24px;
  }

}
</style>
