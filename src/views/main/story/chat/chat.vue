<template>
   <div class="chat">
      <div style="border: 1px solid #ccc">
         <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" mode="default" />
         <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            mode="default"
            @onCreated="handleCreated"
         />
      </div>
      <div class="btn-container">
         <el-tooltip content="保存你的故事" placement="top">
            <el-button
               type="success"
               @click="save"
               size="large"
               plain
               circle
               icon="Promotion"
            ></el-button>
         </el-tooltip>
      </div>
   </div>
</template>

<script setup lang="ts">
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

import { request } from "@/service";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
   const editor = editorRef.value;
   if (editor == null) return;
   editor.destroy();
});

const handleCreated = editor => {
   editorRef.value = editor; // 记录 editor 实例，重要！
};

// 保存故事
function save() {
   const content: string = editorRef.value.getText();
   if (!content) return ElMessage.warning("输入不能为空");
   request
      .post({
         url: "/story",
         data: {
            title: "这是标题",
            content,
         },
      })
      .then(res => {
         ElMessage.success(res.data);
         valueHtml.value = "";
      });
}
</script>

<style lang="scss" scoped>
.chat {
   position: relative;
   .btn-container {
      // border: 1px solid red;
      position: absolute;
      right: 10px;
      bottom: 10px;
      border-radius: 10px;
      padding: 20px;
      // background-color: #eee;
   }
}
</style>
