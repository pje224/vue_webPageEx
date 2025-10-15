<template>
  <div class="home">
    <h1>HomePage🏡</h1>
    <RouterLink to="/reserve" class="btn">Reservation📅</RouterLink>
    <RouterLink to="/review" class="btn">Review⭐</RouterLink>
    <RouterLink to="/contact" class="btn">Have a Question📞</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;
  .btn {
    display: inline-block;
    margin-top: 20px;
    margin-left: 10px;
    padding: 10px 20px;
    background: rgb(240, 240, 240);
    color: rgb(24, 24, 24);
    border-radius: 10px;
    text-decoration: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
}
</style>
