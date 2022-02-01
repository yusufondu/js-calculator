const display = document.querySelector(".calculator-input");
const keysOperator = document.querySelectorAll(".operator");
const keysNumber = document.querySelectorAll(".number");
const keysDecimal = document.querySelector(".decimal");
const keysClear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let result = [];
let operatorIndex;
let sliceFirst;
let sliceLast;
let arr;

const updateUI = function () {
  pressOperator();
  pressNumber();
  pressDecimal();
  pressClear();
};

const handleSlicePart = function (operatorIndex) {
  sliceFirst = Number(result.slice(0, operatorIndex).join(""));
  sliceLast = Number(result.slice(operatorIndex + 1).join(""));
  result = [];
};

const showAdditionResult = function () {
  handleSlicePart(result.indexOf("+"));
  arr = [sliceFirst + sliceLast];
  display.value = arr.join("");
};

const showMultiplicationResult = function () {
  handleSlicePart(result.indexOf("*"));
  arr = [sliceFirst * sliceLast];
  display.value = arr.join("");
};

const showDivisionResult = function () {
  handleSlicePart(result.indexOf("/"));
  arr = [sliceFirst / sliceLast];
  display.value = arr.join("");
};

const showSubtractionResult = function () {
  handleSlicePart(result.indexOf("-"));
  arr = [sliceFirst - sliceLast];
  display.value = arr.join("");
};

const pressOperator = function () {
  keysOperator.forEach((el) => {
    el.addEventListener("click", (e) => {
      const operatorType = e.target.value;

      if (result.includes("+") && operatorType === "=") {
        showAdditionResult();
      } else if (result.includes("-") && operatorType === "=") {
        showSubtractionResult();
      } else if (result.includes("*") && operatorType === "=") {
        showMultiplicationResult();
      } else if (result.includes("/") && operatorType === "=") {
        showDivisionResult();
      } else {
        result.push(operatorType);
        display.value = result.join("");
      }
    });
  });
};

const pressNumber = function () {
  keysNumber.forEach((el) => {
    el.addEventListener("click", (e) => {
      const numbers = Number(e.target.value);
      result.push(numbers);
      display.value = result.join("");
    });
  });
};

const pressDecimal = function () {
  keysDecimal.addEventListener("click", (e) => {
    result.push(e.target.value);
    display.value = result.join("");
  });
};

const pressClear = function () {
  keysClear.addEventListener("click", () => {
    result = [];
    display.value = 0;
  });
};

updateUI();
