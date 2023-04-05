const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

// added const on all of them and added G on WARNIN as it was missing a G
// Removed '' on 0 as it is not a string but a number

let shipping = null
const customers = 1
let  Location = 'RSA' // changed const to let as it is declared again in the code using different country names
let currency = 'R'

if (Location = 'RSA') {
	shipping = 400  
	currency = 'R' }
 else if (Location = 'NAM') {
	shipping = 600
	 currency = $
   }
else {
	shipping = 800 
	currency = $
}

//Removed && on the initial code and separated shipping and currency because if not separated there is an error
// added '' marks  on all countries to state that it is a string
// removed null as a value on shipping and added the right value and currency on the the other countries

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 

//removed '' on the declaration  NONE_SELECTED as it is not a string nor a value

if (shoes + batteries + pens + shirts + toys  > 1000 ) {   //added toys to make up the missing amount
	if (Location = 'NAM' && customers === 1) {  //added '' on NAM and removed < 2 and replaced with === 1 as that was the requirement
			if (location = 'RSA')
		    shipping = 0  // removed || calcshipping
		}
		if (Location = 'NK') { 
			console.log(BANNED_WARNING) // added this location under the if statement as it is one command
		   }
	
	}


	console.log('price', currency, shoes + batteries + toys + shipping)
	
if (shipping = 0 && customers !== 1) {
	 console.log (FREE_WARNING)  //added FREE as the declaration was missing so it would have not executed the command as expected
	}


 
 


