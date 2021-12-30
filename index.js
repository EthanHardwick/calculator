let result = 0;
let currentNumber = "";
let currentOperator = "";
let sum = [];

const display = document.querySelector(".display");

const updateDisplay = (status) => {
  switch (status) {
    case 'currentNumber':
      display.innerHTML = currentNumber;
      break;
    case 'result':
      display.innerHTML = result;
      break;
    default:
      break;
  }
}

const calculateResult = () => {
  console.log(sum)
  result = eval(sum[0] `${currentOperator}`, sum[1]);
  updateDisplay('result')
  sum = [];
  sum.push(result)
}

const numbers = document.querySelectorAll(".number-box");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    // console.log(event.currentTarget.innerHTML);
    currentNumber += event.currentTarget.innerHTML;
    updateDisplay('currentNumber');
    console.log(currentNumber);
  });
});

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) =>{
  operator.addEventListener("click", (event) =>{
    // console.log(event.currentTarget.innerHTML);
    currentOperator = event.currentTarget.innerHTML;
    sum.push(currentNumber)
    currentNumber = "";
    if (currentOperator === "=") {
      calculateResult();
    }
  });
});
