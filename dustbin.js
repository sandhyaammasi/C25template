class dustbin
{
	constructor(x,y,width,height)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=width;
		this.dustbinHeight=height;
		this.dustbinbody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.dustbinHeight, {isStatic:true})
		World.add(world, this.dustbinbody)
		
	}
	display()
	{
			var pos=this.dustbinbody.position;
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			fill(255)
			stroke(255)
			rectMode(CENTER)
			rect(0,0,this.dustbinWidth, this.dustbinHeight);
			pop()
		
	}

}





























//this.image=loadImage("dustbingreen.png");


//imageMode (CENTER)
			//rect(0,0,this.dustbinWidth, this.dustbinHeight);
			//image (this.image,0,0,100, 100);