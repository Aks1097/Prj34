class Hero{

    constructor(x,y,r)
    {
        var options= {
            density:1,
            frictionsAir:1
        };

        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("Images/Superhero-02.png");
        this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
        World.add(world,this.body);
    }
    display(){

        var Heropos=this.body.position;		

			push()
			translate(Heropos.x, Heropos.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
    }
    
}