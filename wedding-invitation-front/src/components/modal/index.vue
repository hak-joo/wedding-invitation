<template>
  <Teleport to="#popup">
    <div class="modal-container">
      hello!
      <button class="btn" @click="emit('update:isShow', !isShow)">클릭</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{ isShow: boolean }>();
const emit = defineEmits(["update:isShow"]);

onMounted(() => {
  console.log("props", props);
});
</script>

<style scoped lang="scss">
.modal-container {
  width: 100%;
  height: 100%;
  background-color: orange;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
}
</style>
