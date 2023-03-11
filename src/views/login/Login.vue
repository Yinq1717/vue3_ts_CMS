<template>
   <div class="login">
      <LoginPanel @keyup.enter="handleLogin"></LoginPanel>
   </div>
</template>

<script setup lang="ts">
import LoginPanel from "./c-cpns/login-panel.vue";

function handleLogin(e) {
   console.log(e.target);
}
</script>

<style lang="scss">
.login {
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   // background-image: url("@/assets/image/bj3.jpg");
   background-image: url("@/assets/image/bj4.jfif");
   background-size: cover;
}
</style>
