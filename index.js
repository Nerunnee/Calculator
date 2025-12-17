const args = process.argv;

const firstNumber = Number(args[2]);
const secondNumber = Number(args[4]);
const operator = args[3];

const sum = () => {
  if (operator === "+") {
    return firstNumber + secondNumber;
  }

  if (operator === "-") {
    return firstNumber - secondNumber;
  }

  if (operator === "*") {
    return firstNumber * secondNumber;
  }

  if (operator === "/") {
    return firstNumber / secondNumber;
  }
};

console.log(sum());
