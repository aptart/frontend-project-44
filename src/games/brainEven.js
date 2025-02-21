
import { theMotor } from '../../index.js';
const getRandomNum = (min = 1, max = 99) => Math.floor(Math.random() * (max - min + 1) + min);
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
    theMotor(description, genRounds)
};

export {getRandomNum, gameven};