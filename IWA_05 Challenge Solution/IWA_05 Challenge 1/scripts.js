const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0


let shipping = null
const customers = 1
let  Location = 'RSA'
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



const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED 


if (shoes + batteries + pens + shirts + toys  > 1000 ) {
	if (Location = 'NAM' && customers === 1) {
			if (location = 'RSA')
		    shipping = 0 
		}
		if (Location = 'NK') { 
			console.log(BANNED_WARNING) 
		   }
	}


	console.log('price', currency, shoes + batteries + toys + shipping)
	
if (shipping = 0 && customers !== 1) {
	 console.log (FREE_WARNING) 
	}


 
 


