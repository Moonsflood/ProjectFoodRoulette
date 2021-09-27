'use strict';

//Array to store the food types

let randomFood;
let resturantFood;

let foods = {
  fastFood: ['wendy', 'tacobell', 'subway'],
  thaiFood: ['bedford thai', 'thai1', 'thai2'],
  turkishFood: ['Laylas', 'Betis', 'Istanbul rest'],
  mexicanFood: ['Mexican', 'Mexican1', 'Mexican2', 'Mexican3', 'Mexican4'],
  spanishFood: ['Spanish1'],
};

//Function to get a random key from an object
function getRandomKeyFromObject(obj) {
  return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
}

//function to return random element from an array
function getRandomElementFromArray(array) {
  return array[[Math.trunc(Math.random() * array.length)]];
}

// Food button function selects a random array from the object
function foodButton() {
  randomFood = getRandomKeyFromObject(foods);
  //console.log(randomFood);
  document.querySelector('.randomFood').innerHTML = randomFood;
  //Resturant Button function should select the random selected array - then select a random food.
}

function resturantButton() {
  let randomRest = getRandomElementFromArray(foods[randomFood]);
  document.querySelector('.resturantFood').innerHTML = randomRest;
}
