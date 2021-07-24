var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies",
]

var mains = [
 "Spaghetti and Meatballs",
 "Pineapple Chicken",
 "Shakshuka",
 "Thai Yellow Curry",
 "Bibimbap",
 "Chicken Parmesean",
 "Butternut Squash Soup",
 "BBQ Chicken Burgers",
 "Ramen",
 "Empanadas",
 "Chicken Fried Rice",
 "Sheet Pan Fajitas",
 "Margarita Pizza",
]

var desserts = [
 "Apple Pie",
 "Lemon Meringue Pie",
 "Black Forest Cake",
 "Banana Bread",
 "Peach Cobbler",
 "Cheesecake",
 "Funfetti Cake",
 "Flan",
 "Macarons",
 "Chocolate Cupcakes",
 "Pavlova",
 "Pumpkin Pie",
 "Key Lime Pie",
 "Tart Tatin",
 "Croissants",
 "Eclairs",
]

var result = document.querySelector('p');
var randomSide = sides[getRandomIndex(sides)];
var randomMain = mains[getRandomIndex(mains)];
var randomDessert = desserts[getRandomIndex(desserts)];
var cookBtn = document.getElementById('cook-btn');
var sideRadio = document.getElementById("side-radio");
var mainRadio = document.getElementById("main-radio");
var dessertRadio = document.getElementById("dessert-radio");
var entireMealRadio = document.getElementById("full-meal-radio");
var h2Ele = document.querySelector('h2');
var box2Img = document.querySelector('.second-box');

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

cookBtn.addEventListener('click', makeMeal);

function makeMeal() {
  event.preventDefault();
  box2Img.classList.add('second-box-hide-bg');
  h2Ele.classList.add('hidden');
  if (sideRadio.checked) {
      result.innerText = randomSide;
    }  else if (mainRadio.checked) {
        result.innerText = randomMain;
     } else if (dessertRadio.checked) {
          result.innerText = randomDessert;
     } else if (entireMealRadio.checked) {
          result.innerText = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`;
          h2Ele.classList.remove('hidden');
 }
}

