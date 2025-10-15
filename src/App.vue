<template>
  <div>
    <!-- 헤더 -->
    <Header :isDark="isDarkHeader" />
    <!-- 페이지 내용 -->
    <RouterView></RouterView>
    <!-- 퀵 버튼 -->
    <QuickTop />
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
import QuickTop from "./components/QuickTop.vue";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const isDarkHeader = computed(() => ["Reserve", "Review"].includes(route.name));
</script>

<style lang="scss" scoped></style>
