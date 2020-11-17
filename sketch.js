const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball,sling;

var ground1,ground2;

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ball= new Ball(50,200,20);
   sling = new Slingshot(ball.body,{x:100,y:200});

   block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
     block3 = new Block(360,275,30,40);
      block4 = new Block(390,275,30,40);
       block5 = new Block(420,275,30,40);
        block6 = new Block(450,275,30,40);
         block7 = new Block(480,275,30,40);
          block8 = new Block(330,235,30,40);
           block9 = new Block(360,235,30,40);
            block10 = new Block(390,235,30,40);
             block11 = new Block(420,235,30,40);
              block12 = new Block(450,235,30,40);
               block13 = new Block(360,195,30,40);
                block14 = new Block(390,195,30,40);
                 block15 = new Block(420,195,30,40);
                  block16 = new Block(390,155,30,40);
                   blocks1 = new Block(640,175,30,40);
                    blocks2 = new Block(670,175,30,40);
                     blocks3 = new Block(700,175,30,40); 
                     blocks4 = new Block(730,175,30,40); 
                     blocks5 = new Block(760,175,30,40);
                      blocks6 = new Block(670,135,30,40); 
                      blocks7 = new Block(700,135,30,40);
                       blocks8 = new Block(730,135,30,40); 
                       blocks9 = new Block(700,95,30,40);
      ground1 = new Ground(390,340,250,10);
      ground2 = new Ground(700,220,150,10);

}
function draw() {
  background("#382C2C"); 
  ball.display();
  sling.display();
  fill("skyblue");
   block1.display();
    block2.display();
     block3.display();
      block4.display();
       block5.display();
        block6.display();
         block7.display();
          fill("pink");
           block8.display();
            block9.display();
             block10.display();
              block11.display();
               block12.display();
                fill("turquoise");
                 block13.display();
                  block14.display();
                   block15.display();
                    fill("grey");
                     block16.display();
                      fill("skyblue");
                       blocks1.display();
                        blocks2.display();
                         blocks3.display();
                          blocks4.display();
                           blocks5.display();
                            fill("turquoise");
                             blocks6.display();
                              blocks7.display();
                               blocks8.display();
                                fill("pink");
                                 blocks9.display();

ground1.display();
ground2.display();

}

function mouseDragged(){
Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  console.log("fart")
  sling.fly();
}


