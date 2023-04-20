let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below

//Remove the = after the const and add it as a declaration
const logCalc = () => {
    const isString = typeof calculated === 'string' // add == to make it a comparisson operator and remove 'numerical-string' and added number and the -
    const calculatedAsNumber = isString ?  parseInt(calculated): calculated    // Remove ParseNumber and make it ParseInt instead to be able to change the value from a string to a number and move the calculated after the parseInt so that it is logged after 
    calculated = calculatedAsNumber + 1 //remove == and make it a declaration instead of a comparisson operator
}

const calcUser = () => {
    logCalc ()
    if (calculated > 2) user = 'John'
    if (calculated > 2) state = 'requesting'
    if (calculated > 3) state = 'idle'
}

const checkUser = () => {
    if (user && state === 'requesting' ) {  // add calculated and the number of times which is 3 in this case
        console.log(`User: ${user} (${calculated})`)
    }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()