<template>
  <div class="home">
    <Review_com />
    <router-link to="/" class="btn">Back to Home</router-link>
  </div>
</template>

<script setup>
import Review_com from "../components/Review_com.vue";
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px 20px;
  background: rgb(240, 240, 240);
  text-align: center;
  color: rgb(24, 24, 24);
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}
</style>
