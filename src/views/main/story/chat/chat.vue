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
         <el-button type="primary" @click="save">保存</el-button>
         <el-button>重置</el-button>
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
   .btn-container {
      // border: 1px solid red;
      position: fixed;
      left: 50%;
      bottom: 16%;
      border-radius: 10px;
      box-shadow: 0 0 10px #000;
      padding: 20px;
      background-color: #eee;
      .el-button {
         padding: 10px 30px;
      }
   }
}
</style>
