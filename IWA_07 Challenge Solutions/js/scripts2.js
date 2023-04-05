const nickname= "Timmy";
const firstname = "Timothy";

console.log(`Good Morning, ${nickname}!`)
console.log(`Good Morning, ${firstname}!`)
console.log(null ?? 'Good Morning')

//We have to change from quotes to template literals `` and add $ (valid identifier)


//to ensure that you get only the message, you have to use nullish coalescing operator ?? and null becuase it is automatically a falsy so it will not log, but log the second value(operand).

//or

if (nickname)
{ console.log(`Good Morning, ${nickname}!`);
}
else if  (firstname)
{ console.log(`Good Morning, ${firstname}!`);
}
 else   
 { console.log('Good Morning');
}
