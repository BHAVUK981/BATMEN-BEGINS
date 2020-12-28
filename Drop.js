class Drop{
    constructor(x, y){
        var options = {
            isStatic:false,
            
            friction:0.1,
        }
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
    }

    update(){
      if(this.body.position.y>height){
        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,2)})
      }
    }

    display(){
        var pos = this.body.position;
        fill("blue");
        push();
        translate(pos.x, pos.y);
        
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y,5, 5);
        pop();
    }
}