
// script.js

// Order1

const order1Root = document.querySelector('body > section:nth-child(3) > dl'); 

const order1Biscuits = document.querySelector('body > section:nth-child(3) > dl > div.biscuits > dd'); 
order1Biscuits.innerText = order1Root.dataset.biscuits ;

const order1Donuts = document.querySelector('body > section:nth-child(3) > dl > div.donuts > dd')
order1Donuts.innerText = order1Root.dataset.donuts;

const order1Pancakes = document.querySelector('body > section:nth-child(3) > dl > div.pancakes > dd') 
order1Pancakes.innerText = order1Root.dataset.pancakes;

const order1Status = document.querySelector('body > section:nth-child(3) > dl > div.status > dd') 
order1Status.innerText = order1Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'; 

/*Called the root by adding order1 and ensuring that I camelCase. I used inspect to copy selectior of the path i wanted in the elements tab.
Ussed innerText to get the iner text of the particular element and dataSet to get values of data attributes that are on the HTML.*/ 

//Order 2
const order2Root = document.querySelector('body > section:nth-child(4) > dl');

const order2Biscuits = document.querySelector('body > section:nth-child(4) > dl > div.biscuits > dd'); 
order2Biscuits.innerText = order2Root.dataset.biscuits ;

const order2Donuts = document.querySelector('body > section:nth-child(4) > dl > div.donuts > dd')
order2Donuts.innerText = order2Root.dataset.donuts;

const order2Pancakes = document.querySelector('body > section:nth-child(4) > dl > div.pancakes > dd') 
order2Pancakes.innerText = order2Root.dataset.pancakes;

const order2Status = document.querySelector('body > section:nth-child(4) > dl > div.status > dd') 
order2Status.innerText = order2Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'; 

// Order 3

const order3Root = document.querySelector('body > section:nth-child(5) > dl');

const order3Biscuits = document.querySelector('body > section:nth-child(5) > dl > div.biscuits > dd'); 
order3Biscuits.innerText = order3Root.dataset.biscuits ;

const order3Donuts = document.querySelector('body > section:nth-child(5) > dl > div.donuts > dd')
order3Donuts.innerText = order3Root.dataset.donuts;

const order3Pancakes = document.querySelector('body > section:nth-child(5) > dl > div.pancakes > dd') 
order3Pancakes.innerText = order3Root.dataset.pancakes;

const order3Status = document.querySelector('body > section:nth-child(5) > dl > div.status > dd') 
order3Status.innerText = order3Root.dataset.delivered === 'true' ? 'Delivered' : 'Pending'; 

