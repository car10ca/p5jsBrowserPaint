function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/iconSpraycan.jpg";

	var points = 13;
	var spread = 10;


	this.draw = function()
	{
		//get colours from html element
		var colourWheel = document.getElementById('colourWheel').value;	

		var r = random(5,10);
		if(mouseIsPressed){
			for(var i = 0; i < points; i++){
				strokeWeight(0); //prevent thick points if stroke weight was amended for other tools
				stroke(colourWheel);
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	};
}