import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "@/router";
import "@/utils/requestMethod"
const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router) // ++ 挂载路由
  .mount("#app");
