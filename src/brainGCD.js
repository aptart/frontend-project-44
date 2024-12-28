import { getRandomNum } from "./brainEven.js";
import { TheMotor } from "../index.js";
const alert = "Find the greatest common divisor of given numbers.";
const getNOD = (num1, num2)=>{
    if (num1 === 0){
        return num2;
    }
    return getNOD(num2 % num1, num1);
};
const genRounds = ()=>{
    const num1 = getRandomNum(1, 250);
    const num2 = getRandomNum(1, 250);
    const question = `${num1} ${num2}`;
    const NOD = getNOD(num1, num2);
    const correctAnswer = NOD.toString();
    return [question, correctAnswer];

}
const ReadygameGCD = ()=>{
    TheMotor(alert, genRounds)
};
export default ReadygameGCD;
