//class to create the numerous blocks that is resting in the holder.
class Block{
    constructor(x,y,w,h){
    this.w = w;
    this.h = h;
    this.body = Bodies.rectangle(x,y,w,h);
    World.add(world,this.body);


}

display(){
var angle = this.body.angle;
var pos = this.body.position;
    push()
        translate(pos.x,pos.y);
       rotate(angle);
       rect(0,0,this.w,this.h);
    pop()

}


}