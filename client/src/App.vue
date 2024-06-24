<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <router-view></router-view>
  <my-circle :type="false" />
  <my-circle :type="true" />
</template>

<style lang="css">
* {
  padding: 0;
  margin: 0;
  font-family: "PT Sans", "Calibri";
  color: #191919;
}
body {
  overflow: clip;
  height: 100vh;
  width: 100vw;
  background-color: #191919;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
