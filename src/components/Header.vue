<template>
  <header :class="[{ scrolled: isScrolled }, { dark: isDark }]">
    <div class="inner">
      <img :src="currentLogo" alt="logo" class="logo" @click="goHome" />
      <div class="hamburger" @click="toggleSubMenu">
        <div class="line" v-for="n in 3" :key="n"></div>
      </div>
    </div>
    <!-- 서브메뉴 -->
    <SubMenu v-if="isSubMenuOpen" @close="isSubMenuOpen = false" />
  </header>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import SubMenu from "./SubMenu.vue";

// 스크롤 상태 저장
const isScrolled = ref(false);
// 스크롤 했을 때 색 변경
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // 50px 이상 스크롤하면 true로 바꾸겠다
};
// 로고 클릭시 Home으로 이동
const router = useRouter();
const route = useRoute();
const goHome = () => {
  router.push("/");
};
// 페이지 켜질 때 감시 시작
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// 부모(App.vue)에서 받은 값
const props = defineProps({
  isDark: Boolean,
  logoSrc: {
    type: String,
    default: "/images/link.png",
  },
});
// 현재 표시할 로고 이미지 계산
const currentLogo = computed(() => {
  // 스크롤 상태 우선
  if (isScrolled.value) {
    return "/images/favicon_192.png";
  }
  // 페이지별 변경
  if (["Reserve", "Review"].includes(route.name)) {
    return "/images/favicon_192.png";
  }
  // 기본 로고
  return props.logoSrc;
});
// 서브 메뉴 상태
const isSubMenuOpen = ref(false);
// 햄버거 클릭시 서브 메뉴 나타나기
const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value;
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 10;
  // 스크롤 했을 때
  &.scrolled {
    background-color: #333;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .line {
      background-color: #fff !important;
    }
    // img {
    //   filter: brightness(0) invert(1);
    // }
  }
  // Dark가 더해지면
  &.dark {
    background-color: #333;
    .line {
      background-color: #fff !important;
    }
    // img {
    //   filter: brightness(0) invert(1);
    // }
  }
  .inner {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    .logo {
      cursor: pointer;
      width: 45px;
    }
    .hamburger {
      cursor: pointer;
      .line {
        width: 25px;
        height: 3px;
        background-color: #333;
        margin: 4px 0;
        border-radius: 7px;
        transition: all 0.3s;
      }
    }
  }
}
</style>
