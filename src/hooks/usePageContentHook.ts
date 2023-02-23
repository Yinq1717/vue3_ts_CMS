import type PageContent from "@/components/page-content/page-content.vue";
import { ref } from "vue";

export default function usePageContentHook() {
  const contentRef = ref<InstanceType<typeof PageContent>>();

  // 处理搜索组件的查询事件
  function handleQuery(queryInfo: any) {
    contentRef.value?.getPageList(queryInfo);
  }
  // 处理搜索组件的重置表单事件
  function handleResetForm() {
    contentRef.value?.getPageList();
  }

  return {
    contentRef,
    handleQuery,
    handleResetForm,
  };
}
