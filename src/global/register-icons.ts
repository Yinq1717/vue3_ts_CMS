// 注册全部icon
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import type { App } from "vue";
function registerIcons(app: App<Element>) {
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
}

export default registerIcons;
