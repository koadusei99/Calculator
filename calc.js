const cursor = document.getElementById("cursor");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const resultButton = document.querySelector(".equals");
const outputField = document.querySelector("#output");
const clearButton = document.querySelector("#clear");

let Calculator = {
  current: 0,
  operation: null,
  previous: null,
  decimal: false,
  history: [],
  sum: function () {
    if (this.previous) {
      document.querySelector("#memory ul").innerHTML +=
        "<li>" + this.current + "</li>";
      switch (this.operation) {
        case "+":
          this.current = the.previous + this.current;
          break;
        default:
          this.current = 0;
      }
      this.current = parseInt(this.current * 100000) / 100000;
    }
  },
  performOp: function () {
    let res = outputField.innerText;
    res = res.replace("x", "*");
    res = res.replace("÷", "/");
    res = eval(res);
    outputField.innerText = res;
  },
  update: function () {
    document.querySelector("# display output").innerHTML =
      this.current + (this.decimal ? "." : "");
  },
  clearMemory: function () {
    document.querySelector("#memory ul").innerHTML = "";
  },
  addOperator: function (e) {
    outputField.innerText += e.target.innerText;
  },
  setNum: function (e) {
    outputField.innerText += e.target.innerText;
  },
  clearOutput: function (e) {
    outputField.innerText = "";
  },
  performAddOp: function () {
    let operationString = outputField.innerText;
    let operands = operationString.split("+");
    console.log(operands);
    let sum = operands.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    outputField.innerHTML = sum;
  },
  //   performAddOp: function () {
  //     let operationString = outputField.innerText;
  //     let operands = operationString.split("+");
  //     let sum = operands.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  //     outputField.innerHTML = sum;
  //   },
  //   performAddOp: function () {
  //     let operationString = outputField.innerText;
  //     let operands = operationString.split("+");
  //     let sum = operands.reduce((a, b) => parseInt(a) + parseInt(b), 0);
  //     outputField.innerHTML = sum;
  //   },
};

operators.forEach((op) => {
  op.addEventListener("click", Calculator.addOperator);
});
numbers.forEach((num) => {
  num.addEventListener("click", Calculator.setNum);
});
clearButton.addEventListener("click", Calculator.clearOutput);
resultButton.addEventListener("click", Calculator.performOp);
