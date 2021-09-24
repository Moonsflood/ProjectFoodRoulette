'use strict';

//Array to store the food types
let foodTypes = [
  'Fast Food',
  'Thai Food',
  'Turkish food',
  'Mexican Food',
  'Spanish Food',
  'Italian food',
  'French Food',
  'Japanese Food',
  'Chinese Food',
];

//Configuring the random food button
const ranFoodBtn = document.querySelector('.ran--Food--Btn');
//const ranFoodBtn1 = document.getElementById('ran--Food--Btn1');

//DOM for food button
/*ranFoodBtn.addEventListener('click', function () {
  let randomFood = foodTypes[Math.trunc(Math.random() * foodTypes.length)];
  console.log(randomFood);
});*/

//If a resturant type is selected, then loop through random resutrants of the type that has been displayed

let randomFood;
let resturantFood;

/*
function FdBtn() {
  let randomFood = foodTypes[Math.trunc(Math.random() * foodTypes.length)];
  console.log(randomFood);
  document.querySelector('.randomFood').innerHTML = randomFood;
}
*/

function foodButton() {
  let randomFood = foodTypes[Math.trunc(Math.random() * foodTypes.length)];
  //console.log(randomFood);
  document.querySelector('.randomFood').innerHTML = randomFood;
}
function resturantButton() {
  if (randomFood === fastFood) {
    let resturantFood = fastFood[Math.trunc(Math.random() * fastFood.length)];
    //console.log(randomFood);
    document.querySelector('.resturantFood').innerHTML = resturantFood;
  } else if (randomFood === thaiFood) {
    let resturantFood = thaiFood[Math.trunc(Math.random() * fastFood.length)];
    document.querySelector('.resturantFood').innerHTML = resturantFood;
  }
}
//Array for each food type to select options/resturants
const fastFood = [
  "Wendy's",
  'Tacobell',
  "McDonald's",
  'Subway',
  'Chick-fila',
  'Sonic',
  'Chipolte',
  'Dominoes',
];
const thaiFood = ['Thai', 'Thai1', 'Thai2', 'Thai3', 'Thai4', 'Thai5', 'Thai6'];
const turkishFood = [
  'Turkish',
  'Turkish1',
  'Turkish2',
  'Turkish3',
  'Turkish4',
  'Turkish5',
  'Turkish6',
];
const mexicanFood = [
  'Mexican',
  'Mexican1',
  'Mexican2',
  'Mexican3',
  'Mexican4',
  'Mexican5',
  'Mexican6',
];
const spanishFood = [
  'Spanish',
  'Spanish1',
  'Spanish2',
  'Spanish3',
  'Spanish4',
  'Spanish5',
  'Spanish6',
];
const italianFood = [
  'Italian',
  'Italian1',
  'Italian2',
  'Italian3',
  'Italian4',
  'Italain5',
  'Italian6',
];
const frenchFood = [
  'French',
  'French1',
  'French2',
  'French3',
  'French4',
  'French5',
  'French6',
];
const japaneseFood = [
  'Japanese',
  'Japanese1',
  'Japanese2',
  'Japanese3',
  'Japanese4',
  'Japanese5',
  'Japanese6',
];
const chineseFood = [
  'Chinese',
  'Chinese1',
  'Chinese2',
  'Chinese3',
  'Chinese4',
  'Chinese5',
  'Chinese6',
];

/*function resturantButton () {
  if (foodButton(randomFood) === fastFood) {
    let resturantFood = fastFood[Math.trunc(Math.random() * fastFood.length)];
    console.log(randomFood);
    document.querySelector("resturantFood").innerHTML = resturantFood;
    
  } 
}
*/
