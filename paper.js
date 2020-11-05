class Paper {
    constructor(x, y) {
      var options = {
         
          restitution:0.8,
          friction:0.5,
          density:1.0
      }
      this.body = Bodies.circle(x, y, 23, options);
      this.r=50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("purple");
      ellipse(0, 0,23,23);
      pop()
    }
  };
  