<template>
  <div>
    <button v-show="show" class="quick-top" @click="goTop">↑</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// goTop 상태 저장
const show = ref(false);
// 스크롤을 체크해서 일정 높이 이상이면 버튼 보이게
const handleScroll = () => {
  show.value = window.scrollY > 200;
};
// 맨 위로 가기
const goTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.quick-top {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  background: #333;
  color: #fff;
  transition: all 0.3s;
  opacity: 0.8;
}
</style>
