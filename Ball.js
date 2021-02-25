  
  class Ball {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,23,options);
        fill('blue');
        stroke('skyblue')
        this.image = loadImage('paper.png');
        strokeWeight(5)
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,65,65);
            pop();
        }

};