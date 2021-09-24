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

function foodButton() {
  let randomFood = foodTypes[Math.trunc(Math.random() * foodTypes.length)];
  console.log(randomFood);
  document.querySelector(".randomFood").innerHTML = randomFood;
}

//Array for each food type to select options/resturants 
const fastFood = ['Wendy\'s', 'Tacobell', 'McDonald\'s', 'Subway', 'Chick-fila', 'Sonic', 'Chipolte', 'Dominoes'];
const thaiFood = ['Thai', 'Thai1', 'Thai2', ];
const turkishFood = [];
const mexicanFood = [];
const spanishFood = [];
const italianFood = [];
const frenchFood = [];
const japaneseFood = [];
const chineseFood = [];






