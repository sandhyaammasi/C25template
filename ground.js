class ground
{
	constructor(x,y,w,h)
	{
	
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.groundbody=Bodies.rectangle(x, y, w, h , {isStatic:true});
 		World.add(world, this.groundbody);

	}
	display()
	{
			
			var groundPos=this.groundbody.position;		

			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}