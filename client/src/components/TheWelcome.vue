<script>
export default {
  name: "welcome",
};
</script>
<template lang="">
  <h1>
    <span style="color: #37b34a">SPbPU.Rating</span> – не просто рейтинговые
    списки.<br />
    Это нейросеть, которая поможет оценить<br />
    ваши шансы на поступление.
  </h1>
  <div class="container">
    <div class="minicon">
      <div class="white block">
        Используя мощь больших данных и нейронных сетей, наш сервис
        предоставляет быстрый и точный прогноз шансов поступления абитуриентам.
      </div>
      <div class="green block">
        Благодаря обучению на реальных рейтинговых списках, наша нейронная сеть
        на основе brain.js способна с точностью до 95% определить вашу
        вероятность на поступление.
      </div>
    </div>
    <div class="gray block">
      <div class="tx">
        <h2 style="margin-bottom: 24px; color: white">
          Быстрый способ узнать результат
        </h2>
        Наш интеллектуальный инструмент, использующий передовые алгоритмы
        машинного обучения, станет вашим помощником в планировании
        образовательного пути.
      </div>
      <my-button @click="$router.push('/predict')">Узнать свои шансы</my-button>
    </div>
  </div>
</template>

<style lang="css" scoped>
h1 {
  margin-top: 47px;
  text-align: center;
  font-size: 38px;
  font-weight: bold;
  color: white;
}
.container {
  margin: 0 auto;
  margin-top: 47px;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 15px;
  width: 70%;
}
.minicon {
  display: grid;
  gap: 15px;
}
.block {
  border-radius: 20px;
  padding: 20px;
  font-weight: 20px;
}
.white {
  background-color: #f9fffa;
  color: #191919;
}
.green {
  background-color: #37b34a;
  color: white;
}
.gray {
  background-color: #2b2b2b;
  border: 1px solid #575757;
  display: grid;
  align-items: end;
  justify-items: center;
  color: white;
}
.tx {
  align-self: start;
  color: white;
}
</style>
