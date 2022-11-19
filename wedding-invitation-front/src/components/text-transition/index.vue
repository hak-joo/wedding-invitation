<template>
  <div>text-transition component</div>
  <div v-for="(str, idx) in props.data" :key="str + idx">
    {{ str }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: string[] }>();
</script>

<style scoped></style>
