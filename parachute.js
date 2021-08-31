class Parachute{
constructor(){
this.body=Bodies.rectangle(50,height/2-200,50,50,{isStatic:false})
World.add(world,this.body)
this.image=loadImage("Parachute.png")
Matter.Body.setVelocity(this.body,{x:6,y:0})
}

   display(){
image (this.image,this.body.position.x,this.body.position.y,100,100)
   }
moveUp(){
    Matter.Body.setVelocity(this.body,{x:6,y:-12})
}

}