const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let owed =`R ${(parseFloat( leoBalance * -1 ) + parseFloat( sarahBalance * -1 )).toFixed(2)}`
const leo = `${leoName + leoSurname} Owed: R  ${parseFloat( leoBalance * -1).toFixed(2)}\n`
const sarah = `${sarahName + sarahSurname} Owed: R ${parseFloat( sarahBalance * -1).toFixed(2)}\n\n`
const total = `\n Total amount owed: ${owed} \n`
const result = leo + sarah + divider + total + divider
console.log(result)




/*const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt('R' + leoBalance + sarahBalance)
const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
const total = "Total amount owed: "
const result = leo + sarah + divider + divider + total + owed + divider

console.log(result)*/