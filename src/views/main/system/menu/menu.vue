<template>
  <div class="menu">
    <page-content
      :content-config="contentConfig"
      @addPageEvent="handleAddEvent"
      @updatePageEvent="handleUpdateEvent"
    >
    </page-content>
    <page-modal :modal-config="modalConfig" ref="modalRef"></page-modal>
  </div>
</template>

<script setup lang="ts">
import { formatUTC } from "@/utils/time-format";

import pageContent from "@/components/page-content/page-content.vue";
import pageModal from "@/components/page-modal/page-modal.vue";

import contentConfig from "./config/content.config";
import modalConfig from "./config/modal.config";

import usePageModalHook from "@/hooks/usePageModalHook";
const { modalRef, handleAddEvent, handleUpdateEvent } = usePageModalHook();
</script>

<style lang="scss" scoped>
.menu {
}
</style>
