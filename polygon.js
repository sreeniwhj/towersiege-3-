class polygon {
    constructor(x, y) {
      var options = {
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.sling3 = loadImage('polygon.jpg');
      this.width = 50;
      this.height = 50;
      this.visibility = 255;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
    //  pos.x = mouseX;
    //  pos.y = mouseY;
      var angle = this.body.angle;
  
     /* push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')*/
      
     imageMode(CENTER)
      image(this.sling3,pos.x,pos.y , this.width, this.height);
    //  pop();
    };
  };
  