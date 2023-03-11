import { ref } from "vue";
import type PageModal from "@/components/page-modal/page-modal.vue";
export default function usePageModalHook(Cb?: (...args: any[]) => void) {
   const modalRef = ref<InstanceType<typeof PageModal>>();
   // 处理子组件的添加事件
   function handleAddEvent() {
      Cb && Cb();
      modalRef.value?.openDialog(undefined);
   }
   // 处理子组件的更新事件
   function handleUpdateEvent(formData: any) {
      Cb && Cb(formData);

      modalRef.value?.openDialog(formData);
   }
   return {
      modalRef,
      handleAddEvent,
      handleUpdateEvent,
   };
}
