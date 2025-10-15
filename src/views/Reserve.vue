<template>
  <div class="reserve">
    <h1>Reservation📅</h1>
    <div class="section">
      <ReserveForm v-if="step === 'form'" @next="goToPayment" />
      <Payment v-if="step === 'payment'" :reservation="reservation" @next="goToConfirm" />
      <ReserveConfirm v-if="step === 'confirm'" :reservation="reservation" @reset="resetReserve" />
    </div>
    <router-link to="/contact" class="btn">Have a Question</router-link>
    <router-link to="/" class="btn">Back to Home</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Payment from "../components/reservation/Payment.vue";
import ReserveForm from "../components/reservation/ReserveForm.vue";
import ReserveConfirm from "../components/reservation/ReserveConfirm.vue";

const step = ref("form");
const reservation = ref({});
const goToPayment = (data) => {
  console.log(data);
  reservation.value = data;
  step.value = "payment";
};
const goToConfirm = (data) => {
  reservation.value = data;
  step.value = "confirm";
};
// 예약 초기화
const resetReserve = () => {
  reservation.value = {};
  step.value = "form";
};
</script>

<style lang="scss" scoped>
.reserve {
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
