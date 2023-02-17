import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/CSS/index.css";
import { router } from "./router";
import pinia from "./store";
import registerIcons from "./global/register-icons";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
// import "element-plus/theme-chalk/el-message.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(registerIcons);
// app.use(ElementPlus);
app.mount("#app");
