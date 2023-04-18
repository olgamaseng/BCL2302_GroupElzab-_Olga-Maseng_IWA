// script.js

/*The add function was fixed by removing the equals sign = and adding curly braces {} around the function body.
The multiply function was fixed by changing the subtraction operator - to multiplication operator *.
In the internal function, you added a missing semicolon ; after the added variable assignment. Additionally, you fixed the parameters of the multiply function call to pass in this.internal.a and this.internal.b. Finally, you updated the console logs to multiply added by this.internal.c and log multiplied.*/

function add(a, b ) { return a + b ;}

function multiply(a, b) { return a * b  ;} //remove - sign



function internal() {
	const added = this.add(this.internal.a, this.internal.b); 
	const multiplied = this.multiply(added, this.internal.c); 
	console.log(multiplied)
	
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
