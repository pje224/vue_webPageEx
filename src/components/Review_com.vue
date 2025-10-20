<template>
  <div class="review_wrap">
    <h1>Review⭐</h1>
    <!-- 리뷰 카드 목록 -->
    <div class="reviews">
      <div v-for="(review, index) in reviews" :key="index" class="card">
        <h3>{{ review.user }}</h3>
        <p>{{ review.comment }}</p>
        <span>{{ "⭐".repeat(review.rating) }}</span>
      </div>
    </div>
    <div class="review">
      <h2>리뷰 남기기</h2>
      <!-- 이름 입력 -->
      <input type="text" v-model="name" placeholder="이름을 입력해 주세요" />
      <!-- 별점 선택 -->
      <div class="stars">
        <span v-for="n in 5" :key="n" @click="rating = n" :class="{ active: n <= rating }">★</span>
      </div>
      <!-- 후기 작성 -->
      <textarea v-model="reviewText" placeholder="리뷰를 입력해 주세요"></textarea>
      <!-- 사진 업로드 -->
      <input type="file" @change="uploadImg" accept="image/*" />
      <!-- 등록 버튼 -->
      <button @click="submitReview">등록하기</button>
      <!-- 리뷰 목록 -->
      <div class="review-list" v-if="reviewList.length > 0">
        <h3>작성된 리뷰</h3>
        <div v-for="(item, index) in reviewList" :key="index" class="review-item card">
          <div class="review-header">
            <p>{{ item.name }}</p>
          </div>
          <p class="stars">
            <span v-for="n in item.rating" :key="n">⭐</span>
          </p>
          <img v-if="item.image" :src="item.image" alt="리뷰사진" class="review-image" />
          <p class="text">{{ item.reviewText }}</p>
          <p>{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const reviews = [
  { user: "민지", comment: "서비스가 정말 좋아요!", rating: 5 },
  { user: "현우", comment: "배송도 빠르고 친절했습니다😊", rating: 4 },
  { user: "수연", comment: "깔끔하고 만족스러워요!", rating: 5 },
];

const name = ref("");
const rating = ref(0);
const reviewText = ref("");
const reviewList = ref([]);
const imageUrl = ref("");

// 등록하기 버튼 클릭시
const submitReview = () => {
  // 오늘 날짜 자동 입력
  const today = new Date().toLocaleDateString();
  if (name.value.trim() === "" || rating.value === 0 || reviewText.value.trim() === "") {
    alert("이름, 별점, 리뷰를 모두 입력해 주세요");
    return;
  }
  reviewList.value.push({
    name: name.value,
    rating: rating.value,
    reviewText: reviewText.value,
    date: today,
    image: imageUrl.value,
  });
  // 입력 초기화
  name.value = "";
  rating.value = 0;
  reviewText.value = "";
  imageUrl.value = "";
};
// 사진 업로드 함수
const uploadImg = (e) => {
  const file = e.target.files[0];
  if (file) {
    imageUrl.value = URL.createObjectURL(file);
  }
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/variables" as *;

.review_wrap {
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
  .reviews {
    display: grid;
    gap: 20px;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    .review-card {
      background: #fff;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      transition: 0.3s;

      h3 {
        margin-bottom: 10px;
      }

      span {
        display: inline-block;
        margin-top: 10px;
        font-weight: bold;
      }
    }
  }
  .review {
    max-width: 450px;
    margin: 50px auto;
    background: #fff;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    text-align: center;
    input,
    textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }
    input[type="file"] {
      border: none;
    }
    textarea {
      resize: none;
      height: 80px;
    }
    .stars {
      font-size: 28px;
      color: #ccc;
      cursor: pointer;
      margin-bottom: 10px;
      span {
        transition: all 0.3s;
        &.active {
          color: rgb(255, 230, 2);
        }
      }
    }
    button {
      background-color: steelblue;
      color: #fff;
      border: none;
      padding: 10px 16px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      transition: 0.3s;
    }
  }
  .review-item {
    background: $bg-light;
    border-radius: 10px;
    padding: 12px;
    margin-bottom: 12px;

    .review-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      color: #555;
      margin-bottom: 4px;
    }

    .stars {
      font-size: 20px;
      color: #ffcc00;
      margin-bottom: 5px;
    }

    .text {
      font-size: 14px;
      color: #333;
      margin-bottom: 6px;
    }

    .review-image {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-top: 8px;
    }
  }
}
</style>
