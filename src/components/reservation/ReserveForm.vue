<template>
  <div class="card">
    <h2>예약 선택</h2>
    <label>
      이름 :
      <input v-model="name" type="text" placeholder="이름을 입력해 주세요" required />
    </label>
    <br />
    <label>
      날짜 :
      <input v-model="date" type="date" required />
    </label>
    <br />
    <label>
      서비스 :
      <select v-model="service" required>
        <option>짐 보관</option>
        <option>제빙기 청소</option>
      </select>
    </label>
    <br />
    <button class="btn btn--primary" @click="reserve">예약하기</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 상태 저장
const name = ref("");
const date = ref("");
const service = ref("짐 보관");
const emit = defineEmits(["next"]);
// 예약 버튼 클릭시 부모에 신호 보내기
const reserve = () => {
  emit("next", { name: name.value, date: date.value, service: service.value });
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  //   width: 100%;
  //   max-width: 900px;
  label {
    text-align: start;
  }
}
</style>
