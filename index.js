import readlineSync from "readline-sync"
export const needAnswers = 3;
const TheMotor = (feat, alert) =>{
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(alert);
    for (let i = 1; i <=needAnswers; i+=1){
        const [exp, rightAnswer] = feat();
        console.log(`Question: ${exp} `);
        const userAnswer = readlineSync.question('Your Answer: ');
        if (userAnswer !== rightAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \nLet's try again, ${name}!`);
            return;
        }
        console.log('Correct!');
        if (i === needAnswers) {
            console.log(`Congratulations, ${name}!`);
            return;
        }
    }
}
export  {TheMotor};