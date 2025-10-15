<template>
  <div class="review_wrap">
    <h1>Review⭐</h1>
    <!-- 리뷰 카드 목록 -->
    <div class="reviews">
      <div v-for="(review, index) in reviews" :key="index" class="review-card">
        <h3>{{ review.user }}</h3>
        <p>{{ review.comment }}</p>
        <span>{{ "⭐".repeat(review.rating) }}</span>
      </div>
    </div>
    <router-link to="/" class="btn">Back to Home</router-link>
  </div>
</template>

<script setup>
const reviews = [
  { user: "민지", comment: "서비스가 정말 좋아요!", rating: 5 },
  { user: "현우", comment: "배송도 빠르고 친절했습니다😊", rating: 4 },
  { user: "수연", comment: "깔끔하고 만족스러워요!", rating: 5 },
];
</script>

<style lang="scss" scoped>
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
}
</style>
