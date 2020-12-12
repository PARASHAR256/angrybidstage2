class Bird extends BaseClass{
    constructor(x, y) { // parent class is called super
      super(x,y,50,50); 
      this.image = loadImage("sprites/bird.png");
    }
    display(){ // function overriding
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        super.display();
    }
}
  