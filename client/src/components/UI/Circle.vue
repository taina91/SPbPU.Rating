<template lang="">
  <div v-if="type == false" class="circle big"></div>
  <div v-else class="circle small"></div>
</template>
<script>
export default {
  name: "my-circle",
  props: {
    type: Boolean,
  },
};
</script>
<style lang="css" scoped>
.circle {
  position: absolute;
  background: radial-gradient(
    circle closest-side,
    #267a30,
    rgb(32, 74, 37) 40%,
    rgba(28, 49, 31, 0.2) 80%,
    transparent 90%
  );
  opacity: 70%;
  border-radius: 50%;
  z-index: 1;
}
.big {
  width: 1000px;
  height: 1000px;
  top: 200px;
  left: -420px;
}
.small {
  width: 500px;
  height: 500px;
  top: -80px;
  left: 1000px;
}
</style>
