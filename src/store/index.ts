import { createPinia } from "pinia";
import type { App } from "vue";
const pinia = createPinia();
import useLoginStore from "./login/login";
import useMainStore from "./main/main";

function registerStore(app: App<Element>) {
  app.use(pinia);
  const loginStore = useLoginStore();
  const mainStore = useMainStore();
  loginStore.loadLocalCacheACtion();
  mainStore.getRoleAndDepartmentActions();
}

export default registerStore;
