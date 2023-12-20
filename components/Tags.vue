<template>
  <div v-if="tags" class="tag-wrapper">
    <span class="text-color-lt text-lowercase" v-for="(tag, i) in tags" :key="i">
      {{ tag.name }} {{ i < (tags.length - 1) ? ',' : '' }}
    </span>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  tags: {
    type: Array,
    default: null
  }
});
</script>

<style lang="scss">

.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
}
</style>
