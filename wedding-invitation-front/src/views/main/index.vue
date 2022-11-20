<template>
  <div class="wrapper">
    <div class="container" :style="background">
      <TextTransition
        v-if="fadeLoading"
        :data="['A', 'and', 'B', '우리 결혼합니다']"
        :loading="fadeLoading"
        @update:loading="updated"
      />
      <Information :is-show="infoShow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Information from "@/views/information/index.vue";
import TextTransition from "@/components/text-transition/index.vue";

const updated = async (val: boolean) => {
  fadeLoading.value = val;
  infoShow.value = !fadeLoading.value;
};
const fadeLoading = ref(true);
const infoShow = ref(false);

const background = computed(() => {
  if (fadeLoading.value) return `background-position: top;`;
  else return `background-position:bottom`;
});
</script>

<style scoped lang="scss">
.container {
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  background-size: 250% 250%;
  background-image: linear-gradient(
    to bottom,
    pink,
    rgb(251, 221, 226),
    white,
    white
  );
}

.contents {
}
</style>
