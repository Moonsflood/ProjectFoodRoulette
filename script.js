'use strict';

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

let randomFood = foodTypes[Math.trunc(Math.random() * foodTypes.length)];

const ranFoodBtn = document.querySelector('.ran--Food--Btn');

ranFoodBtn.addEventListener('click', function () {
  console.log(foodTypes);
});


