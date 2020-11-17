//a class that creates a constraint
class Slingshot{
 constructor(bodyA,pointB){
var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:0.1,
length:20
}

this.sling = Constraint.create(options);
World.add(world,this.sling);
 }

fly(){
    console.log("I EAT POO")
this.sling.bodyA = null;

}

 display(){
     if(this.sling.bodyA){
var posA = this.sling.bodyA.position;
var posB = this.sling.pointB;

    line(posA.x,posA.y,posB.x,posB.y);

     }
 }
}