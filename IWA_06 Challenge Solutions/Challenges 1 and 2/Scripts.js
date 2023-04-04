//challenge 1

const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

//change typeof number == to /^\d+$/.test ( which is a regular expression used to check if string contains only digits)

const primaryValid = /^\d+$/.test(primaryPhone); 
const secondaryValid = /^\d+$/.test(secondaryPhone);

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )

//Challenge 2


const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay !== undefined && minuteOfDay !== undefined && hourOfDay === 00 && minuteOfDay === 00) {
  const taxAsDecimal =  parseFloat(tax) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
  const balance = startingAfterTax  - transport - food - rent;
    console.log('R' + balance.toFixed(2));  

   }
	
  
 
 //change 3 to  2 to ensure it shows cents up to 2 decimals and prefix balance with 'R'

 //change balace to balance

 //move the console log inside the if statement to ensure it is read as one command

 //change null to undefined as stated in the question. Add the same thing to hourofday as it was initially not declared

 // remove '' in 1, 00 and 100 because it is a number. also change the 00 to 0 as stated in the question

 // add brackets (parenthesis) to the if statemnet and remove the  brackets inside to ensure it reads as one command

 //Add AfterTax next to starting next to the balance

 // Fix == to ===