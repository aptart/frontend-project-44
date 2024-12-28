import { TheMotor } from "../index.js";
import { getRandomNum } from "./brainEven.js";
const alert = 'What is the result of the expression?';
const operations = ()=>{
    const maxVal = 10;
    const minVal = 1;
    const firstNum = getRandomNum(minVal, maxVal);
    const secondNum = getRandomNum(maxVal,maxVal);
    const ops = ["+", "-", "*"];
    const minIndex = 0;
    const MaxIndex = ops.length-1;
    const randomOp = ops[getRandomNum(minIndex, MaxIndex)];
    return `${firstNum} ${randomOp} ${secondNum}`
}
const StartValueOPS = (exs)=>{
    const convert = exs.split(' ');
    const num1 = +convert[0];
    const num2 = +convert[convert.length - 1];
    const ops = convert[1];
    let result = 0;

    switch (ops) {
        case '+': result = num1 + num2;
            break;
        case '-': result = num1 - num2;
            break;
        case '*': result = num1 * num2;
            break;
        default: throw new Error(`Unknown order state: '${exs}'!`);
    };

    return result;
};
const gameCalc = ()=>{
    const ops = operations();
    const rightAnswer = StartValueOPS(ops);
    return [ops, rightAnswer];
}
const ReadyGameCalc = ()=>{
    TheMotor(gameCalc, alert);
}

export default ReadyGameCalc;