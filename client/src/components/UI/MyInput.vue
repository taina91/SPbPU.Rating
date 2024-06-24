<template lang="">
  <div>
    <fieldset>
      <legend>{{ legendText }}</legend>
      <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        :type="type"
      />
    </fieldset>
  </div>
</template>
<script>
export default {
  name: "my-input",
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: [String, Number],
    legendText: {
      type: String,
      default: "",
    },
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", Number(event.target.value));
    },
  },
};
</script>
<style lang="css" scoped>
.input {
  border-radius: 12px;
  border: none;
  border: 2px solid transparent;
  width: 80%;
  padding: 10px 15px;
  color: #2b2c2e;
  background-color: rgba(188, 188, 188, 0.36);
  /* min-width: 1%; */
}
.input:focus {
  outline: none;
  border: 2px solid #37b34a;
}
input::-webkit-calendar-picker-indicator {
  display: none;
}
fieldset {
  padding: 2px;
  border: none;
  margin: 2px;
}
legend {
  margin-left: 10px;
  color: rgba(87, 87, 87, 0.77);
  font-size: 10pt;
}
</style>
