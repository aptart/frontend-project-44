import { getRandomNum } from "./brainEven.js";
import { TheMotor } from "../index.js";
const genPRG = (length, firstElem, prgStep)=>{
    const progression = [];
    for (let i = 0; i < length; i += 1) {
        progression.push(firstElem + prgStep * i);
    }
    return progression;
}
const description = "What number is missing in the progression?";
const genRounds = () =>{
    const progressionLength = 10;
    const firstElem = getRandomNum(1, 10);
    const prgStep = getRandomNum(2,10);
    const progression = genPRG(progressionLength, firstElem, prgStep);
    const indexOfHide = getRandomNum(0, progressionLength - 1);
    const hiddenElem = progression[indexOfHide];
    progression[indexOfHide] = "..";
    const question = progression.join(" ");
    const rightAnswer = hiddenElem.toString();
    return [question, rightAnswer];

}
const gamePRG = () =>{
    TheMotor(description, genRounds);
}
export default gamePRG;