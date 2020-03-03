/* eslint-disable no-undef */
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


var leftProductImg = document.querySelector('#left_product_img');
var centerProductImg = document.querySelector('#center_product_img');
var rightProductImg = document.querySelector('#right_product_img');
var groupProductImages = document.getElementById('all_products');
var products = [];//an array to store all products object
var totalClicks = 0;

/////////////////////////////////////////////////////////////////////////////

//constructor function to generate dynamic product objects
function Product(name){
  this.name = name.split('.')[0];
  this.urlImage = `images/${name}`;
  this.clicksNumber = 0;
  this.viewsNumber = 0;
  products.push(this);//this its refer to the object that im created
}

//////////////////////////////////////////////////////////////////////////////

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

  a();

}
////////////////////////////////////////////////////////////////
function a(){
  var one = products[randomNumber(0 , products.length-1 )];
  var two = products[randomNumber(0 , products.length-1 )];
  var three = products[randomNumber(0 , products.length-1 )];

  leftProductImg.setAttribute('src' , one.urlImage);
  leftProductImg.setAttribute('alt' , one.name);
  centerProductImg.setAttribute('src' , two.urlImage);
  centerProductImg.setAttribute('src' , two.urlImage);
  rightProductImg.setAttribute('src' , three.urlImage);
  rightProductImg.setAttribute('alt' ,three.name);

  //var arr =[leftImageRandom, centerImageRandom ,rightImageRandom];
  while ((one === leftImageRandom || one===centerImageRandom || one===rightImageRandom)&&
         (two===leftImageRandom || two===centerImageRandom || two===rightImageRandom) &&
         (three===leftImageRandom || three===centerImageRandom || three===rightImageRandom)){

          randomNumber();
         }

  
}

/////////////////////////////////////////////////////////////////////////

for(var i = 0; i< productImages.length ; i++){
// console.log(productImages[i]);
  new Product(productImages[i]);//we pass the name of the product from the array
}
pickRandomImages();

// Variables to store the product already on the page
// the allImages array is a property of the ProductPicture constructor

//////////////////////////////////////////////////////////////////////////

groupProductImages.addEventListener('click' , clickImage);

function clickImage(e){

  if(totalClicks < products.length ){

    if( e.target.id === 'left_product_img'){
      leftImageRandom.clicksNumber++;
    } if (e.target.id === 'center_product_img' ){
      centerImageRandom.clicksNumber++;
    } if (e.target.id === 'right_product_img'){
      rightImageRandom.clicksNumber++;
    }
    totalClicks++;
    leftImageRandom.viewsNumber++;
    rightImageRandom.viewsNumber++;
    centerImageRandom.viewsNumber++;
    pickRandomImages();

  } if (totalClicks === 25){
    groupProductImages.removeEventListener('click' , clickImage);
    render();
    renderChart();
    //console.log('finished');
  }
}


/////////////////////////////////////////////////////////////////////////

function render() {
  var ulE1 = document.getElementById('theEnd');
  for (var i =0; i<products.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${products[i].name} had ${products[i].clicksNumber} votes and was shown ${products[i].viewsNumber} times`;
    ulE1.appendChild(liE1);
  }
}

///////////////////////////////////////////////////////////////////////

// //helper functions
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

///////////////////////////////////////////////////////////////////////


// This function for the chart I declare 3 arr for names,views,clicks

function renderChart(){
  var myProductNames = [];
  var myProductClicks = [];
  var myviews = [];
  for(var i = 0 ; i < products.length ; i++){
    var productNames = products[i].name;
    myProductNames.push(productNames);
    var productClicks = products[i].clicksNumber;
    myProductClicks.push(productClicks);
    var productViews = products[i].viewsNumber;
    myviews.push(productViews);
  }
  var ctx = document.getElementById('myProducts').getContext('2d');
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: myProductNames,
      datasets: [{
        label: '# of Votes',
        data: myProductClicks,
        backgroundColor: 'rgba(238, 228, 82, 0.9)',
        borderColor: 'rgba(245, 231, 29, 0.84)',
        borderWidth: 1,

      },
      {

        label: '# of views',
        data: myviews,
        backgroundColor: 'rgba(88, 83, 13, 0.35)',
        borderColor: 'rgba(46, 44, 14, 0.84)',
        borderWidth: 1,


      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
