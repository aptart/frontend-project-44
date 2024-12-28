import readlineSync from "readline-sync"
export const needAnswers = 3;
const TheMotor = (feat, alert) =>{
    const maxRoundCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(alert);

  for (let i = 1; i <= maxRoundCount; i += 1) {
    const roundData = feat();
    const [question, correctAnswer] = roundData;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export  {TheMotor};