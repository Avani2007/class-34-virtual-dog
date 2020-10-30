//Create variables here
var dog, happyDog, database, foodS, foodStock;
var database;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var dogObj = createSprite(250,350,50,50)
  dogObj.addImage(dog)
  dogObj.scale =0.35;
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown ("UP_ARROW")){
    writeStock(foodS)
    dog.addImage(happyDog)
  }
  drawSprites();
 
  //add styles here
  textSize(30)
  stroke("blue")
  fill("Magenta")
  text ("Food left : "+ foodStock,170,100)
}

function readStock(data){
  foodStock = database.ref('Food')
  foodStock.on('value', readStock)
  foodS = data.val();  
}

function writeStock(x){
  datatbase.ref('/').update({
    'Food':x
  })
}