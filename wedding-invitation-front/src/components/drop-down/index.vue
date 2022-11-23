<template>
  <div class="drop-down-container">
    <div class="drop-down" @click="isContentView = !isContentView">
      {{ label }}
    </div>
    <div class="drop-down-item" :class="{ opened: isContentView }">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ label: string }>();
const isContentView = ref(false);
</script>

<style scoped lang="scss">
.drop-down {
  width: 100%;
  border: 1px solid red;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  line-height: 40px;

  margin: 10px 0;
}
.drop-down-item {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  &.opened {
    max-height: 30px;
    transition: all 0.3s linear;
  }
}
</style>
