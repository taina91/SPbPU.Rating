<script>
export default {
  name: "my-select",
  data() {
    return {
      selected: 0,
    };
  },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    legendText: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "select",
    },
  },
  methods: {
    updateSelect(event) {
      this.$emit("update:modelValue", Number(event.target.value));
    },
  },
};
</script>
<template lang="">
  <div>
    <fieldset>
      <legend>{{ legendText }}</legend>
      <select :id="id" v-model.number="selected" @change="updateSelect">
        <option v-if="options.length == 0" :value="-1" disabled>
          Нет подходящих вариантов
        </option>
        <option v-for="option in options" :value="option.id">
          {{ option.text }}
        </option>
      </select>
    </fieldset>
  </div>
</template>

<style lang="css" scoped>
select {
  padding: 10px 15px;
  border-radius: 12px;
  background-color: rgba(188, 188, 188, 0.36);
  border: none;
  width: 100%;
  height: 50px;
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
