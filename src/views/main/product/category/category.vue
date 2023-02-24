<template>
  <div class="category">
    <page-search
      :search-config="searchConfig"
      @queryEvent="handleQuery"
      @resetFormEvent="handleResetForm"
    ></page-search>
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @addPageEvent="handleAddEvent"
      @updatePageEvent="handleUpdateEvent"
    ></page-content>
    <page-modal :modal-config="modalConfig" ref="modalRef"></page-modal>
  </div>
</template>

<script setup lang="ts">
import pageSearch from "@/components/page-search/page-search.vue";
import pageContent from "@/components/page-content/page-content.vue";
import pageModal from "@/components/page-modal/page-modal.vue";

import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageContentHook from "@/hooks/usePageContentHook";
import usePageModalHook from "@/hooks/usePageModalHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook();
const { contentRef, handleQuery, handleResetForm } = usePageContentHook();
</script>

<style lang="scss" scoped>
.category {
}
</style>
