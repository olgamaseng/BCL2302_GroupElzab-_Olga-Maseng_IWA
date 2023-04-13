/*// Select elements for order 1
const order1Root = document.querySelector('body > section:nth-child(3) > dl');
const order1Biscuits = order1Root.querySelector('.biscuits .count');
const order1Donuts = order1Root.querySelector('.donuts .count');
const order1Pancakes = order1Root.querySelector('.pancakes .count');
const order1Status = order1Root.querySelector('.status dd');

// Set values for order 1
order1Biscuits.textContent = order1Root.dataset.biscuits;
order1Donuts.textContent = order1Root.dataset.donuts;
order1Pancakes.textContent = order1Root.dataset.pancakes;
order1Status.textContent = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// Select elements for order 2
const order2Root = document.querySelector('body > section:nth-child(4) > dl');
const order2Biscuits = order2Root.querySelector('.biscuits .count');
const order2Donuts = order2Root.querySelector('.donuts .count');
const order2Pancakes = order2Root.querySelector('.pancakes .count');
const order2Status = order2Root.querySelector('.status dd');

// Set values for order 2
order2Biscuits.innerHTML = order2Root.dataset.biscuits;
order2Donuts.innerHTML = order2Root.dataset.donuts;
order2Pancakes.innerHTML = order2Root.dataset.pancakes;
order2Status.innerHTML = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

// Select elements for order 3
const order3Root = document.querySelector('[data-key="order3"]');
const order3Biscuits = order3Root.querySelector('.biscuits .count');
const order3Donuts = order3Root.querySelector('.donuts .count');
const order3Pancakes = order3Root.querySelector('.pancakes .count');
const order3Status = order3Root.querySelector('.status dd');

// Set values for order 3
order3Biscuits.textContent = order3Root.dataset.biscuits;
order3Donuts.textContent = order3Root.dataset.donuts;
order3Pancakes.textContent = order3Root.dataset.pancakes;
order3Status.textContent = order3Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending';*/


// script.js

const biscuits1 = document.querySelector('body > section:nth-child(3) > dl > div.biscuits > dd')
biscuits.innerText = 10,
const donuts1 = document.querySelector('body > section:nth-child(3) > dl > div.donuts > dd')
donuts1.innerText = 13,
const pancakes1 = document.querySelector('body > section:nth-child(3) > dl > div.pancakes > dd') 
pancakes1.innerText = 0,
const status1 = document.querySelector('body > section:nth-child(3) > dl > div.status > dd') 
status1.innerHTML = delivered, 

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending