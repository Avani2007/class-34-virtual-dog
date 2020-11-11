//Create variables here
var dog, happyDog, database, foodS, foodStock, dogObj;
var database;

function preload()
{
  //load images here
  dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dogObj = createSprite(250,350,50,50)
  dogObj.addImage(dog)
  dogObj.scale =0.35;
}


function draw() {  
  background(46, 139, 87);
  if (keyWentDown ("UP_ARROW")){
    writeStock(foodS)
    //Food = foodS.Food - 1
    dogObj.addImage(happyDog)
  }
  if (keyWentUp ("UP_ARROW")){
    dogObj.addImage(dog)
  }
  readStock()
  drawSprites();
 
  //add styles here
  textSize(30)
  stroke("blue")
  fill("Magenta")
 text ("Food left : "+ foodS ,170,100)
}

function readStock(){
  foodStock = database.ref('Food')
  foodStock.on('value', (data)=>{
    foodS=data.val()
  })
  console.log(foodS)
}

function writeStock(x){
  database.ref('/').update({
    'Food':foodS-1
  })
}

