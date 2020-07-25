class Particle {
    constructor(x, y, radius,color){
        var options= {
            restitution:0.4
     }
     this.radius = radius;
     this.body = Bodies.circle(x,y,this.radius,options)
     this.color = color(random(0,255),random(0,255),random(0,255));


     World.add(world, this.body);
     Matter.Body.setVelocity(this.body,{x:0 , y:10});

    }

    display(){

        if(this.body.position.y > 720){
            this.body.position.y = 0;
            Matter.Body.setVelocity(this.body,{x:0 , y:10});
          }
        
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius, color);
        pop();
    }

}