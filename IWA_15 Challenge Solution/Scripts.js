// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below


/*const { first = 1 } = data.first || {1}
const { second = 1 } = data.second || {1}
const { third = 1 } = data.third || {1}*/

const first = data.lists[0][1]        //removed curly brackest and || sign, also removed = 1 and used the method used to call a specific array  
const second = data.lists[1][1]
const third  = data.lists[2][1]
 

const result = []


const extractBiggest = () => {
// get the last value of each array

const biggestValue1 = first[first.length-1] 
const biggestValue2 = second[second.length-1]
const biggestValue3 = third[third.length-1]

// compare last value of each array, remove the largest value and added to result array
	if (biggestValue1 > biggestValue2) {
		return first.pop()
	}

	else if (biggestValue2 > biggestValue3) {
		return second.pop()
	}
	
	{
	return third.pop()
}
} // add closing curly bracket


// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
