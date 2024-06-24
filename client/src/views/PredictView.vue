<script setup>
import Predict from "@/components/Predict.vue";
</script>

<template>
  <main>
    <top-bar />
    <Predict />
  </main>
</template>
<style lang="css" scoped>
main {
  z-index: 2;
  width: 100%;
}
</style>
