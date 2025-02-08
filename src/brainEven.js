
import { TheMotor } from '../index.js';
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const description =  '"yes" if the number is even, otherwise answer "no".';
const genRounds = ()=>{
    const minNum = 1;
    const maxNum = 100;
    const randomNum = getRandomNum(minNum, maxNum);
    const rightAnswer =  randomNum % 2 === 0 ? 'yes' : 'no';
    return [randomNum, rightAnswer];

}
const gameven = () =>{
    TheMotor(description, genRounds)
};

export {getRandomNum, gameven};

