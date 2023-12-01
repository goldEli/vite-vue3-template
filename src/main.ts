import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router";

createApp(App)
  .use(router) // ++ 挂载路由
  .mount("#app");
