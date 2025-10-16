<template>
  <div class="home">
    <!-- 탭 메뉴 -->
    <div class="tabs">
      <button @click="activeTab = 'detail'">상세정보</button>
      <button @click="activeTab = 'review'">리뷰</button>
    </div>
    <!-- 상세 정보 -->
    <div class="content" v-if="activeTab === 'detail'">상세 정보 영역</div>
    <!-- 리뷰 -->
    <div class="content" v-if="activeTab === 'review'">리뷰 영역</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("detail");
</script>

<style lang="scss" scoped></style>
