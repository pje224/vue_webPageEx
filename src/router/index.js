import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Reserve from "@/views/Reserve.vue";
import Review from "@/views/Review.vue";
import Contact from "@/views/Contact.vue";
import ProductDetail from "../views/ProductDetail.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/reserve", component: Reserve, name: "Reserve" },
  { path: "/review", component: Review, name: "Review" },
  { path: "/contact", component: Contact, name: "Contact" },
  { path: "/product-detail/:id", component: ProductDetail, name: "ProductDetail" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
