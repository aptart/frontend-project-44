
import { TheMotor } from '../index.js';
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


const alert =  '"yes" if the number is even, otherwise answer "no".';
const Game = ()=>{
    const minNum = 1;
    const maxNum = 1000;
    const randomNum = getRandomNum(minNum, maxNum);
    const rightAnswer =  randomNum % 2 === 0 ? 'yes' : 'no';
    return [randomNum, rightAnswer];

}
const gameven = () =>{
    TheMotor(alert, Game)
};

export {getRandomNum, gameven};

