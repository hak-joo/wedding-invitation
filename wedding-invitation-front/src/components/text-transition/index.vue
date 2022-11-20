<template>
  <div class="fade-container">
    <div class="contents" :style="contentLength">
      <TransitionGroup name="list">
        <p class="content" v-for="(str, idx) in contents" :key="str + idx">
          {{ str }}
        </p>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { delay } from "@/utils/util";
const props = defineProps<{ data: string[]; loading: boolean }>();
const emit = defineEmits(["update:loading"]);

const contents = ref<string[]>([]);

const show = async () => {
  emit("update:loading", true);
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i] !== "") await delay(1000);
    contents.value.push(props.data[i]);
  }

  await delay(1000);
  emit("update:loading", false);
};

const contentLength = computed(() => `${props.data.length * 40}px`);
onMounted(() => show());
</script>

<style scoped>
.fade-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contents {
  transition: all 1s ease-in-out;
  height: calc(v-bind(contentLength));
}
.content {
  height: 30px;
  padding: 20px 0;
  text-align: center;

  font-size: 16px;
  font-weight: bolder;
  color: rgb(246, 60, 91);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-enter-to {
  opacity: 1;
}
</style>
