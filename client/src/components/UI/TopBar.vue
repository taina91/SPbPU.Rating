<template lang="">
  <div class="item">
    <img alt="poly logo" class="logo" src="@/assets/poly.svg" />
    <div class="text">SPbPU.Rating</div>
  </div>
</template>
<script>
export default {
  name: "top-bar",
};
</script>
<style lang="css" scoped>
.item {
  margin: 0 auto;
  margin-top: 30px;
  width: 70%;
  height: 58px;
  display: flex;
  position: relative;
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.19);
  border-radius: 14px;
  align-items: center;
}
.logo {
  display: block;
  width: 40px;
  height: 41px;
  margin: 0 10px;
}
.text {
  font-weight: bold;
  font-size: 24;
  color: #fff;
}
</style>
