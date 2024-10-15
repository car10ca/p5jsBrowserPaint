//this tool lets you 'stamp' a beagle head onto the canvas
//a slider will allow the user to alter the stamp size
//image preload for the stamp sits within sketch.js 
var beagleSize;

function StampTool(){
	this.name = "stampTool";
    this.icon = "assets/iconStampBeagle.jpg"; 
    sizeSliderControl = createSlider(30, 200, 40);
    sizeSliderControl.parent("#sizeControl");

    this.draw = function() {
        
        if(mouseIsPressed) {

            var beagleSize = sizeSliderControl.value();
       
            var beagleX = mouseX + beagleSize/2;
            var beagleY = mouseY + beagleSize/2;
            image(beagle, mouseX, mouseY, beagleSize, beagleSize);
        }   
	}; 
    
}

