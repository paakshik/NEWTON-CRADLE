class Bob{
    constructor(x,y){
this.body = Bodies.circle(x,y,50,{ isStatic: false,
            restitution: 1,
            friction:1,
            density:0.8})
World.add(world,this.body)

    }
    display(){
push();
        fill('aqua');
    stroke('white')
       
ellipse(this.body.position.x,this.body.position.y,100)
pop()
    }
}