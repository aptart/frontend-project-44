import { getRandomNum } from "./brainEven.js";
import { TheMotor } from "../index.js";
const isPrime = (num)=>{
    if (num <= 1){
        return false;
    };
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
          return false;
        }
    };
    return true;
};
const description = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
const genRounds = ()=>{
    const question = getRandomNum(1, 1000)
    const rightAnswer = isPrime(question) ? "yes": "no";
    return [question, rightAnswer];

}
const gamePrime = ()=>{
    TheMotor(description, genRounds);
}
export default gamePrime;

