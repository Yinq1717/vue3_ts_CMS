<template>
  <div class="login">
    <LoginPanel></LoginPanel>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from "./c-cpns/login-panel.vue";
import { request } from "@/service";
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/image/login_bj.jpg");
  background-size: cover;
}
</style>
