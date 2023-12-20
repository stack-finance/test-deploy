<template>
  <div ref="tile" :style="{'height' : tileHeight + 'px'}" class="expansion-tile">
    <div @click="open" :class="{'active': isOpen}" class="expansion-tile-heading px-sm-3">
      <span>{{ title }}</span>
      <span :class="{'rotate-45': isOpen}" class="icon">+</span>
    </div>
    <div ref="tileContent" class="expansion-tile-content">
      {{ content }}
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
});


let isOpen = ref(false);
let tileHeight = ref(60);
let titleHeight = ref(null);
const tile = ref<HTMLElement>(null);
const tileContent = ref(null);

onMounted(() => {
  titleHeight.value = tile.children[0].offsetHeight;
  tileHeight.value = titleHeight.value;
});

function open() {
  const el = tileContent;
  isOpen.value = !isOpen.value;
  tileHeight.value = isOpen.value ? (el.offsetHeight + tileHeight.value) : titleHeight.value;
}
</script>

<style lang="scss">
.expansion-tile {
  overflow: hidden;
  border-bottom: 2px solid #EEE;
  transition: 0.3s all ease-in-out;
  margin: 0;

  &-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 16px 0;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover, &.active {
      background-color: #F5F5F5;
    }

    @media screen and (min-width: 768px) {
      font-size: 24px;
      padding: 24px 0;
      line-height: 28px;
    }

    .icon {
      transition: transform 0.2s ease-in-out;
    }
  }

  &-content {
    padding: 16px 8px;
    font-size: 16px;

    @media screen and (min-width: 768px) {
      font-size: 20px;
      padding: 24px 16px;
      margin: 0 128px;
    }
  }
}

.rotate-45 {
  transform: rotateZ(45deg);
}
</style>
