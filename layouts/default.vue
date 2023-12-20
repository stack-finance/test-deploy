<template>
  <div ref="layout">
    <TheNavbar :isMobile="isMobile" :resources="blogData" @getstack="showModal = true"/>
    <slot />
    <Download v-if="showModal" :is-mobile="isMobile" @close="showModal=false"></Download>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref } from 'vue';
import {getFeaturedPosts, getPostsByTag} from '~/composables/repository/useBlog';

let size = ref(1200);
const layout = ref(null);

onMounted(() => {
  if (layout.value) {
    size.value = layout.value.clientWidth;
  }
});

let isMobile = ref(false);
watch(() => size.value, () => isMobile.value = size.value < 768);
const showModal = ref(false);

const {data} = await useAsyncData('blogsData', async () => {
  const tags = ['investing', 'finance', 'stack'];
  const { posts: featured } = await getFeaturedPosts(3);
  const promises: Array<any> = [];

  tags.forEach((t) => promises.push(getPostsByTag(t, 3)));
  const [
    { posts: investing },
    { posts: finance },
    { posts: stack },
  ] = await Promise.all(promises);

  return {
    featured,
    stack,
    investing,
    finance,
  };
});

const blogData = data.value;
</script>

<style lang="scss">
.stack-wealth {
  overflow: hidden;
  position: relative;
  padding: 32px 128px;
  background-color: #101010;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .glassy-btn {
    background-color: rgba(32, 32, 32, 0.6);
    border-radius: 30px;
    color: #FFF;
    height: 50px;
    width: 180px;
    z-index: 3;
    font-weight: bold;
    font-size: 20px;
  }

  .l-grid, .r-grid {
    position: absolute;
    top: 0;
  }

  .l-grid {
    left: 0;
  }

  .r-grid {
    right: 0;
  }

  h6 {
    font-size: 32px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 4px;
    margin-top: 0;
  }

  p {
    font-size: 18px;
    font-weight: 500;
    color: #cacaca;
    margin: 0;

    @media screen and (min-width: 768px) {
      max-width: 700px;
    }
  }
}
</style>
