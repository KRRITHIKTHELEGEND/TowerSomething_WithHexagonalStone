const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6;
var HexagonalStone;
var platform;
var slingshot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(570,190);
    block2 = new Block(600,190);
    block3 = new Block(630,190);
    block4 = new Block(585,170);
    block5 = new Block(615,170);
    block6 = new Block(600,150);
    HexagonalStone = new Polygon(10,200);
    platform = new Ground(600,200,100,10);
    ground = new Ground(600,height,1200,20);
    slingshot = new SlingShot(HexagonalStone.body,{x:200, y:50});
}

function draw(){

    background("cyan");
    Engine.update(engine);
    block6.display();
    block5.display();
    block4.display();
    block3.display();
    block2.display();
    block1.display();
    HexagonalStone.display();
    platform.display();
    ground.display();
    slingshot.display();

}

function mouseDragged(){
    //if (gameState !== "launched") {
    Matter.Body.setPosition(HexagonalStone.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched"
}

/*function keyPressed(){
    if(keyCode === 32){
        gameState = "OnSling"
        slingshot.attach(HexagonalStone.body);
    }
}*/

