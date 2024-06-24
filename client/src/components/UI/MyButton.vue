<template lang="">
  <button class="btn"><slot></slot></button>
</template>
<script>
export default {
  name: "my-button",
};
</script>
<style lang="css" scoped>
.btn {
  background: #37b34a;
  border-radius: 15px;
  padding: 10px;
  border: none;
  color: #ffffff;
  font-weight: bold;
  width: 100%;
  transition: ease-out 0.2s;
}
.btn:hover {
  box-shadow: 0 0 0 2px #16471c;
}

.btn:active {
  background: #16471c;
}
</style>
