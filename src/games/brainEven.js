import theMotor from "../index.js";

import { getRandomNum } from "../randomNumGen.js";
const isEven = (number) => number % 2 === 0;

const description =  'Answer "yes" if the number is even, otherwise answer "no".';
const genRounds = ()=>{
    const minNum = 1;
    const maxNum = 100;
    const randomNum = getRandomNum(minNum, maxNum);
    const rightAnswer = isEven(randomNum) ? 'yes' : 'no';
    return [randomNum, rightAnswer];

}
const gameven = () =>{
    theMotor(description, genRounds);
};

export {getRandomNum, gameven};