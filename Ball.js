//class to create a Bodies.circle & add the polgon.png image to it
class Ball{

constructor(x,y,r){
    this.r = r;
this.poly = loadImage("polygon.png");
    this.body = Bodies.circle(x,y,r);
    World.add(world,this.body);



}

display(){
var angle = this.body.angle;
var pos = this.body.position;
    push()
        translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER);
       image(this.poly,0,0,this.r*2,this.r*2);
    pop()

    
}


}