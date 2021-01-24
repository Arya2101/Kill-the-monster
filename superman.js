class superman{
       constructor(x,y,width,height){
            var option = {
              density:1,
              frictionAir:0.005
            }
            this.body = Bodies.rectangle(x,y,width,height,option);
            this.width = width;
            this.height = height;
            this.image = loadImage("Superhero-01.png")
            World.add(world,this.body);
        }
        display(){
            var angle = this.body.angle;
            var pos= this.body.position;
            push();
            translate(pos.x, pos.y);
           rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width, this.height);
            pop();
          }
        
          
          
         
      

}