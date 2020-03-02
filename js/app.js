'use strict';

var productImages = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
  'chair.jpg'
];

// Globals

var leftProductImg = document.querySelector('#left_product_img');
var centerProductImg = document.querySelector('#center_product_img');
var rightProductImg = document.querySelector('#right_product_img');
var groupProductImages = document.getElementById('all_products');
var products = [];//an array to store all products object
var totalClicks = 0;



//constructor function to generate dynamic product objects
function Product(name){
  this.name = name;
  this.urlImage = `images/${this.name}`;
  this.click = 0;
  this.views = 0;
  products.push(this);//this its refer to the object that im created
}


var leftImageRandom , centerImageRandom , rightImageRandom ;
function pickRandomImages(){
  leftImageRandom = products[randomNumber(0 , products.length-1 )];
  centerImageRandom = products[randomNumber(0 , products.length-1 )];
  rightImageRandom = products[randomNumber(0 , products.length-1 )];


  leftProductImg.setAttribute('src' , leftImageRandom.urlImage);
  leftProductImg.setAttribute('alt' , leftImageRandom.name);
  centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
  centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
  rightProductImg.setAttribute('src' , rightImageRandom.urlImage);
  rightProductImg.setAttribute('alt' ,rightImageRandom.name);


  while(leftImageRandom===centerImageRandom || rightImageRandom === centerImageRandom || leftImageRandom === rightImageRandom){
    //   while(((leftImageRandom||centerImageRandom)=== rightImageRandom) ||
    //   (( centerImageRandom || rightImageRandom )===leftImageRandom) ||
    //   (( leftImageRandom ||rightImageRandom )===centerImageRandom)){

    leftImageRandom = products[randomNumber(0 , products.length-1 )];
    centerImageRandom = products[randomNumber(0 , products.length-1 )];
    rightImageRandom = products[randomNumber(0 , products.length-1 )];

    leftProductImg.setAttribute('src' , leftImageRandom.urlImage);
    leftProductImg.setAttribute('alt' , leftImageRandom.name);
    centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
    centerProductImg.setAttribute('src' , centerImageRandom.urlImage);
    rightProductImg.setAttribute('src' , rightImageRandom.urlImage);
    rightProductImg.setAttribute('alt' ,rightImageRandom.name);

  }
}

for(var i = 0; i< productImages.length ; i++){
// console.log(productImages[i]);
  new Product(productImages[i]);//we pass the name of the product from the array
}
pickRandomImages();

// Variables to store the product already on the page
// the allImages array is a property of the ProductPicture constructor


groupProductImages.addEventListener('click' , clickImage);

function clickImage(e){

  if( e.target.id === 'left_product_img' || e.target.id === 'center_product_img'
  || e.target.id === 'right_product_img'){
    pickRandomImages();
    totalClicks++;
    click++;
    views++;
  }
  if(totalClicks === 24){
    groupProductImages.removeEventListener('click' , clickImage);

    console.log('finished');
  }
}




// function render() {
//   var ulE1 = document.getElementById('summary');
//   for (var i =0; i<products.length ; i++) {
//     var liE1 = document.createElement('li');
//     liE1.textContent = `${products[i].name} has ${products[i].clicks} clicks and ${products[i].views} views`;
//     ulE1.appendChild(liE1);
//   }
// }



// //helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
