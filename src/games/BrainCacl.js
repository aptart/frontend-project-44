import { theMotor } from "../../index.js";
import { getRandomNum } from "./brainEven.js";
const description = 'What is the result of the expression?';
const getResultOfExpression = (firstValue, operator, secondValue) => {
    switch (operator) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      default:
        throw new Error(`Unknown operator: '${operator}'!`);
    }
};
  
const operators = ['+', '-', '*'];
  
  
const genRounds = () => {
    const firstNumber = getRandomNum(1, 25);
    const secondNumber = getRandomNum(1, 25);
    const operator = operators[getRandomNum(0, operators.length - 1)];
  
    const question = `${firstNumber} ${operator} ${secondNumber}`;
    const resultOfExpression = getResultOfExpression(firstNumber, operator, secondNumber);
    const correctAnswer = resultOfExpression.toString();
  
    return [question, correctAnswer];
};
  
const readyGameCalc = () => {
    theMotor(description, genRounds);
};

export default readyGameCalc;