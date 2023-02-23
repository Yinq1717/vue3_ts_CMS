<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
      @queryEvent="handleQuery"
      @resetFormEvent="handleResetForm"
    ></page-search>
    <page-content
      @addPageEvent="handleAddEvent"
      @updatePageEvent="handleUpdateEvent"
      ref="contentRef"
      :content-config="contentConfig"
    >
    </page-content>
    <page-modal ref="modalRef" :modal-config="modalConfig"></page-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { formatUTC } from "@/utils/time-format";

import PageSearch from "@/components/page-search/page-search.vue";
import PageContent from "@/components/page-content/page-content.vue";
import pageModal from "@/components/page-modal/page-modal.vue";

import searchConfig from "./config/search.config";
import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageModalHook from "@/hooks/usePageModalHook";
import usePageContentHook from "@/hooks/usePageContentHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook();
const { contentRef, handleQuery, handleResetForm } = usePageContentHook();
</script>

<style lang="scss" scoped>
.department {
}
</style>
