<template>
   <div class="overview">
      <!-- 关于 -->
      <el-card>
         <template #header> <h4>关于</h4> </template>
         <div>
            vue3_ts_CMS 是基于 Vue3、TypeScript、Pinia、VueRouter、Vite、 ElementPlus 、Echart5
            等后台系统解决方案
         </div>
      </el-card>
      <!-- 项目架构 -->
      <el-card>
         <template #header> <h4>项目架构</h4> </template>
         <ul>
            <!-- <li>开发工具：<el-link type="primary">Visual Studio Code</el-link></li> -->
            <li>编程语言：<el-link type="primary">TypeScript 4.x</el-link></li>
            <li>构建工具：<el-link type="primary">Vite 2.x</el-link></li>
            <li>前端框架：<el-link type="primary">Vue 3.x</el-link></li>
            <li>路由工具：<el-link type="primary">Vue Router 4.x</el-link></li>
            <li>状态管理：<el-link type="primary">Pinia 2.x</el-link></li>
            <li>UI框架：<el-link type="primary">Element Plus</el-link></li>
            <li>可视化：<el-link type="primary">Echart5.x</el-link></li>
            <li>富文本：<el-link type="primary">WangEditor</el-link></li>
            <li>工具库：<el-link type="primary">dayjs + countup.js</el-link></li>
            <li>CSS预编译：<el-link type="primary">Sass</el-link></li>
            <li>HTTP工具：<el-link type="primary">Axios</el-link></li>
            <li>自动部署：<el-link type="primary">Centos + Jenkins + Nginx</el-link></li>
         </ul>
      </el-card>
   </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.overview {
   .el-card {
      margin-bottom: 10px;
      ul {
         // list-style: circle;
         li {
            list-style-type: disc;
            margin: 0 20px 20px;
            .el-link {
               font-family: "Arial, sans-serif";
            }
         }
      }
   }
}
</style>
