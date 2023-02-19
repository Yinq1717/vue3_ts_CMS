import { createPinia } from "pinia";
import type { App } from "vue";
const pinia = createPinia();
import useLoginStore from "./login/login";

function registerStore(app: App<Element>) {
  app.use(pinia);
  const loginStore = useLoginStore();
  loginStore.loadLocalCacheACtion();
}

export default registerStore;
