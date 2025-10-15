<template>
  <div class="card">
    <h2>예약 확인</h2>
    <p>{{ reservation.name }}님 예약이 완료 되었습니다✅</p>
    <p>날짜 : {{ reservation.date }}</p>
    <p>서비스 : {{ reservation.service }}</p>
    <p>결제 금액 : {{ reservation.price.toLocaleString() }}</p>
    <p>예약 상태 : {{ reservation.status }}</p>
    <button class="btn btn--danger" @click="reserveCancel">취소하기</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  reservation: {
    type: Object,
    required: true,
  },
});
const emit = defineEmits(["reset"]);
const reserveCancel = () => {
  const confirmCancel = confirm("예약을 취소하시겠습니까?🥺");
  if (confirmCancel) {
    alert("예약이 취소되었습니다😥");
    emit("reset");
    router.push("/reserve");
  } else {
    router.push("/");
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  p {
    text-align: start;
  }
}
</style>
