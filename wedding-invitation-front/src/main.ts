import { createApp } from "vue";
import "@/assets/styles/reset.css";
import "@/assets/styles/global.scss";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
