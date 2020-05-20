class Rain {
    constructor(x,y){
        this.rain = Bodies.circle(x,y,5,5);
        this.width = width;
        this.height = height;
        //this.velocityY = 5;
        World.add(world,this.rain);
    }
    display(){
        fill("green");
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
    }
}