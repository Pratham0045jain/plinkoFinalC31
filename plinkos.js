class Plinkos {
    constructor(x, y, radius,color){
        var options= {
            restitution:0.4,
            isStatic:'true'
     }
     this.radius = radius;
     this.body = Bodies.circle(x,y,this.radius,options)
     //this.color = color("white");


     World.add(world, this.body);

    }

    display(){

        
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        noStroke();
        //fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius,color);
        pop();
    }

}