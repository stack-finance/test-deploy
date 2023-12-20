<template>
  <NuxtLink :to="{path: '/blogs/' + category + '/' + blog.slug + '/'}" class="blog-card">
    <div class="position-relative">
      <span class="blog-card__tag"> {{ category }}</span>
      <img :alt="'blog-img' + blog.uuid" :src="blog.feature_image" class="blog-card__img"/>
    </div>
    <div class="blog-card__meta">
      <span>{{ $dayjs(blog.published_at).format('DD MMM') }}</span>
      <span>•</span>
      <span>{{ blog.reading_time }} {{ blog.reading_time < 2 ? 'min' : 'mins' }} read</span>
    </div>
    <div>
      <h3 class="blog-card__title">{{ blog.title }}</h3>
      <p class="blog-card__hint">{{ blog.custom_excerpt }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  blog: {
    type: Object,
    required: true
  },
  category: String,
  isMobile: Boolean
});
</script>

<style lang="scss">
@import '../../assets/scss/helpers/variables';

.blog-card {
  display: block;
  margin: 16px auto;
  border-radius: 16px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    margin: 48px auto;
    border-radius: 24px;
    max-width: 310px;
  }

  &__tag {
    position: absolute;
    right: 8px;
    top: 8px;
    border-radius: 5px;
    background-color: rgba(0,0,0,.5);
    color: #FFF;
    padding: 4px 8px;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
  }

  &__img {
    width: 100%;
    height: 260px;
    border-radius: 12px;
    object-fit: cover;
  }

  &__meta {
    font-size: 12px;
    color: $text-color-lt;
    font-weight: 500;
    margin: 8px 0;

    @media screen and (min-width: 768px) {
      margin: 16px 0 8px;
      font-size: 14px;
    }
  }

  &__title {
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    width: calc(100% - 1px);
    margin: 0 0 8px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #FFF;
    font-family: 'Caudex', sans-serif;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

  &__hint {
    width: calc(100% - 1px);
    font-size: 16px;
    color: $text-color-lt;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
}
</style>
