<script>
import SpecService from "@/services/specialtiesService";
export default {
  name: "spec",
  data() {
    return {
      optionsLevel: [],
      optionsInst: [],
      optionsSpec: [],
      select_level: 0,
      select_inst: 0,
      select_spec: 0,
    };
  },
  props: {
    modelValue: Number,
  },
  methods: {
    async fetchInst() {
      try {
        const response = await SpecService.allInst();
        this.optionsInst = response.data;
        // console.log(this.optionsInst);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchLevel() {
      try {
        const response = await SpecService.eduLevel();
        this.optionsLevel = response.data;
        // console.log(this.optionsLevel);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSpec() {
      try {
        const response = await SpecService.spec({
          params: {
            level: this.select_level,
            inst: this.select_inst,
          },
        });
        this.optionsSpec = response.data;
        // console.log(this.optionsLevel);
      } catch (error) {
        console.log(error);
      }
    },
    getSpec(event) {
      if (this.select_level !== 0 && this.select_inst !== 0) {
        this.fetchSpec();
      }
    },
    updateSpec(event) {
      this.$emit("update:modelValue", this.select_spec);
      this.$emit("changed");
    },
  },
  mounted() {
    this.fetchInst();
    this.fetchLevel();
  },
};
</script>
<template lang="">
  <h2>Выберите направление</h2>
  <div class="container">
    <my-select
      class="content"
      :options="optionsLevel"
      :legendText="'Уровень образования'"
      :id="'level'"
      v-model="select_level"
      @change="getSpec"
    />
    <my-select
      class="content"
      :options="optionsInst"
      :legendText="'Институт'"
      :id="'inst'"
      v-model="select_inst"
      @change="getSpec"
    />
    <my-select
      class="content"
      :options="optionsSpec"
      :legendText="'Направление подготовки'"
      :id="'spec'"
      v-model="select_spec"
      @change="updateSpec"
    />
  </div>
</template>

<style lang="css" scoped>
h2 {
  margin-bottom: 30px;
  font-size: 38px;
  font-weight: bold;
  color: #191919;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: stretch;
  gap: 15px;
}
.content {
  justify-items: stretch;
}
</style>
