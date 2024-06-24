const fs = require("fs");
const brain = require("brainjs");

class Result {
  constructor() {
    this.loadedModel = this.loadModel();
  }

  loadModel() {
    const modelData = fs.readFileSync(
      "/Users/tainazitina/Desktop/ДИПЛОМ/project/server/src/neuralnetwork/model2.json",
      "utf-8"
    );
    return new brain.NeuralNetwork().fromJSON(JSON.parse(modelData));
  }

  calcResult(data) {
    console.log(data);
    const output = this.loadedModel.run(data);
    console.log(output);
    return Math.floor(output.status * 100);
  }
}

module.exports = new Result();
