<template>
  <div class="contact">
    <h1>Have a Question📞</h1>
    <router-link to="/reserve" class="btn">Back to Reservation</router-link>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
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
