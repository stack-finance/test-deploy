<template>
  <BModal size="xl" v-if="video" id="masterclass-video-modal" class="masterclass-video-modal" hide-header hide-footer centered>
    <video class="img-fluid" controls :src="video"></video>
  </BModal>
</template>

<script setup lang="ts">

defineProps({
  video: null
});
</script>

<style lang="scss">
#masterclass-video-modal___BV_modal_body_.modal-body {
  padding: 0 !important;
}
</style>
