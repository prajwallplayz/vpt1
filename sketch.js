//Create variables here
var dog,doogy, happyDog, database, foodS, foodStock
function preload(){
doogy=loadImage("dogImg.png")
happyDog=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250)
  database=firebase.database()
  dog.addImage(doogy)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy)
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val
}
function writeStock(x){
  database.ref('/').update({
Food:x
  })
}

