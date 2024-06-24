<script>
import Specialization from "@/components/Specialization.vue";
import SubjectsService from "@/services/subjectsService";
import SpecService from "@/services/specialtiesService";
import ResService from "@/services/resultService";
export default {
  components: {
    Specialization,
  },
  name: "predict",
  data() {
    return {
      selected_spec_id: 0,
      spec_name: "",
      subjects: [],
      state: true,
      result: 0,
      summa: 0,
      p1o: 0,
    };
  },
  methods: {
    async fetchSubjects() {
      try {
        const response = await SubjectsService.subjects({
          params: {
            spec: this.selected_spec_id,
          },
        });
        this.subjects = response.data;
        this.subjects.push({
          id: 100,
          title: "Инд. достижения",
          by_choice: 0,
          result: 0,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOneSpec() {
      try {
        const response = await SpecService.oneSpec({
          params: {
            spec: this.selected_spec_id,
          },
        });
        this.spec_name = response.data.title;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchResults() {
      try {
        const response = await ResService.result({
          params: {
            exem: this.subjects,
            spec: this.selected_spec_id,
          },
        });
        this.result = response.data.result;
        this.p1o = response.data.p1o;
        this.summa = response.data.summa;
      } catch (error) {
        console.log(error);
      }
    },
    getResult() {
      this.fetchOneSpec();
      this.fetchResults();
      // this.result = 10;
      this.state = false;
    },
  },
  watch: {
    selected_spec_id(newSelectedSpecId, oldSelectedSpecId) {
      if (newSelectedSpecId !== 0) {
        this.fetchSubjects();
        this.ege = {
          aciv: 0,
        };
        this.state = true;
      }
    },
  },
};
</script>
<template lang="">
  <div class="whitebox">
    <Specialization v-model="selected_spec_id" />
    <h2 v-if="subjects.length > 0">Введите баллы ЕГЭ</h2>
    <div v-if="subjects.length > 0" class="container2">
      <my-input
        v-for="(subj, index) in subjects"
        class="content"
        v-model="subj.result"
        required
        :legendText="subj.title"
      />
    </div>
    <my-button
      style="justify-self: center; margin-top: 15px"
      v-if="state && subjects.length > 0"
      @click="getResult"
      >Рассчитать вероятность</my-button
    >
    <div v-else-if="!state" class="green">
      <h3 style="color: white">Ваш шанс на поступление: 40%</h3>
      <!-- Поздравляем! С большим шансом вы сможете поступить в университет по
      направлению {{ spec_name }}. -->
      <br />
      Ваша сумма: {{ summa }} <br />
      <!-- <p v-if="p1o + 1 < 40" style="color: white"> -->
      <!-- Прямо сейчас вы бы оказались в списках на зачисление на -->
      <!-- {{ p1o + 1 }} месте -->
      <!-- 24 месте -->
      <!-- </p> -->
      <!-- <p v-else style="color: white"> -->
      К сожалению сейчас вы бы не оказались в списках на зачисление
      <!-- </p> -->
    </div>
  </div>
</template>

<style lang="css" scoped>
h2 {
  margin-bottom: 30px;
  margin-top: 35px;
  font-size: 38px;
  font-weight: bold;
  color: #191919;
}
.whitebox {
  margin: 0 auto;
  margin-top: 45px;
  width: 70%;
  /* height: 100px; */
  padding: 20px;
  background-color: #f9fffa;
  border-radius: 20px;
  display: grid;
}
.container2 {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1.5fr 1.1fr;
  justify-content: stretch;
  gap: 15px;
}
.content {
  justify-items: stretch;
}
.green {
  color: #f9fffa;
  background-color: #37b34a;
  border-radius: 20px;
  padding: 20px;
  margin-top: 35px;
}
</style>
