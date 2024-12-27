import readlineSync from "readline-sync"
export const needAnswers = 3;
function TheMotor(feature, description) {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(description);
    for (let i = 1; i <=needAnswers; i+=1){
        const [exp, rightAnswer] = feature();
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