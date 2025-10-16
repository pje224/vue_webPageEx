<template>
  <div class="home">
    <h1>HomePage🏡</h1>
    <RouterLink to="/reserve" class="btn">Reservation📅</RouterLink>
    <RouterLink to="/review" class="btn">Review⭐</RouterLink>
    <RouterLink to="/contact" class="btn">Have a Question📞</RouterLink>
    <!-- 상품 목록 -->
    <div class="product-wrap">
      <h2>Product</h2>
      <div class="product-list">
        <!-- for문 돌렸을 때, 하나만 꾸미고 싶을 때에는 :class="{클래스명 : 인덱스 === 번호}" 로 꾸며주기 -->
        <!-- 짝수만 꾸미고 싶을 때 {클래스명 : (i + 1) % 2 === 0} -->
        <!-- 여러 개 꾸미고 싶을 때 {클래스명 : [1,2].includes(i)} -->
        <div class="product" v-for="(product, i) in products" :key="product.id" :class="{ second: i === 1 }">
          <img :src="product.image" :alt="product.name" @click="goToDetail(product.id)" />
          <p>상품명 : {{ product.name }}</p>
          <p>가격 : {{ product.price.toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    image: "/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    image: "/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    image: "/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    image: "/images/product4.png",
  },
]);

const goToDetail = (id) => {
  // console.log(id);
  // 그냥 변수를 쓸 수 없어서 꼭 백틱(``) 안에 쓰기
  router.push(`/product-detail/${id}`);
};
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
  .product-list {
    display: flex;
    gap: 10px;
    justify-content: center;
    .product {
      cursor: pointer;
      // &.second{
      //   background-color: aliceblue;
      // }
    }
  }
}
</style>
