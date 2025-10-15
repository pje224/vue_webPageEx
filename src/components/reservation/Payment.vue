<template>
  <div class="card">
    <h2>예약 결제</h2>
    <p>이름 : {{ reservation.name }}</p>
    <p>날짜 : {{ reservation.date }}</p>
    <p>서비스 : {{ reservation.service }}</p>
    <p>결제 금액 : {{ price.toLocaleString() }}원</p>
    <!--  결제 버튼 : 클릭하면 pay함수가 실행 -->
    <button class="btn btn--primary" @click="pay">결제하기</button>
  </div>
</template>

<script setup>
const props = defineProps({
  // 형식이기에 동일하게 적어주기🔽
  reservation: { type: Object, required: true },
});
const emit = defineEmits(["next"]);
// 결제 금액
const price = props.reservation.service === "짐 보관" ? 10000 : 20000;

const pay = () => {
  // 복사해서 쓰는 형식(...) 사용🔽
  emit("next", { ...props.reservation, price, status: "결제 완료" });
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
