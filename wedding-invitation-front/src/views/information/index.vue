<template>
  <Transition name="fade">
    <div v-if="props.isShow" class="contents" @scroll="scrolling">
      <div class="content">
        <img class="fade-in" :src="Image" />
        <div class="fade-in content__str">
          <div>
            <span class="large">김김김</span>
            <span class="middle">ㄴㅁㅇㅁㄴㅇ</span>
            <span class="large">김김김</span>
          </div>
          <div>
            <span class="large">김김김</span>
            <span class="middle">ㄴㅁㅇㅁㄴㅇ</span>
            <span class="large">김김김</span>
          </div>
          <button class="btn" @click="isModalView = !isModalView">클릭</button>
        </div>

        <div v-for="(message, idx) in messages" :key="idx" class="fade-in">
          <DropDown label="신랑측 계좌번호">
            {{ message }}
          </DropDown>
        </div>

        <div class="account-info"></div>
      </div>
    </div> </Transition
  ><Modal
    v-if="isModalView"
    :is-show="isModalView"
    @update:is-show="(val) => (isModalView = val)"
  ></Modal>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import DropDown from "@/components/drop-down/index.vue";
import Image from "@/assets/images/photo.jpeg";
import Modal from "@/components/modal/index.vue";

const scrolling = (e: Event) => {
  const fadeInElements = document.getElementsByClassName("fade-in");
  const { offsetTop, scrollTop } = e.target as HTMLElement;

  const currentTop = scrollTop + offsetTop;
  let visibleTop = offsetTop;

  for (let i = 0; i < fadeInElements.length; i++) {
    visibleTop += fadeInElements[i].clientHeight;
    if (currentTop + window.innerHeight - offsetTop >= visibleTop * 0.9) {
      fadeInElements[i].setAttribute("style", "transform: scaleY(0px)");
      fadeInElements[i].setAttribute("style", "opacity: 1");
      if (i === fadeInElements.length - 1) {
        document.removeEventListener("scroll", scrolling);
      }
    }
  }
};
const messages = [
  "절대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다. -L론허바드",
  "행복은 습관이다,그것을 몸에 지니라 -허버드",
  "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다 – 간디",
  "너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 – 랄프 왈도 에머슨",
  "그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요, 그대 혼자 가야할 길임을 명심하라. 비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라.-인디언 속담",
];
const props = defineProps<{ isShow: boolean }>();

const isModalView = ref(false);
onMounted(() => {
  document.addEventListener("scroll", scrolling);
});
</script>

<style scoped lang="scss">
.contents {
  width: 100%;
  opacity: 1;
  overflow-y: auto;
}
.fade-in {
  opacity: 0;
  transition: all 1s ease-in-out;
}
.image {
  max-width: 100%;
}

.account-info {
}
.content {
  width: 100%;

  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 20px 50px;
  &__str {
    text-align: center;
    font-size: 20px;
    line-height: 40px;
  }
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
</style>
