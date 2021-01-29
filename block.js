class Block{
  constructor(x, y) {
      var options = {
          density : 0.1,
          restitution :0.4,
          friction : 2,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 30;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
}