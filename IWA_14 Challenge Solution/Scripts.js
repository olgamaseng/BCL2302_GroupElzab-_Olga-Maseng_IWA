
/*firstName = 'John';
age = 35;
hobby = 'Coding';

//removes const Logtwice as the initial code had two functions, so I did not see the need of two.
//Changed the variable to Logtwice to avoid there being a bug because hobby is already declared.
// We call logtwice function twice, so that it can console log the same thing twice.
function logTwice () {
  console.log(`Hello, ${firstName} (${age}). I love $ {hobby}!`); //change name variable to firstName so that we may be able to call the right variable value
}

logTwice();
logTwice();*/


const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (parameter) => {
  console.log(parameter)
  console.log(parameter)
}

function me () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)
}

me()

