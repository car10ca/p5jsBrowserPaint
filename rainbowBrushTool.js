//this is a rainbow brush tool, the effect is achieved by making use of the HSL (Hue, Saturation and Lign) colour mode
//cycling through all the shades of each colour ultimately produced the rainbow effect
//I got the idea from https://kellylougheed.medium.com/rainbow-paintbrush-in-p5-js-e452d5540b25
//I added the size control to the tool

var rainbowSize;

function RainbowBrushTool() {

	this.name = "rainbowBrushTool";
    this.icon = "assets/rainbowBrush.jpg"; 
    hue = 0;
    sizeSliderControl.parent("#sizeControl");

    this.draw = function() {
        //set to hsl colour mode to cycle through various shades of each colour
        colorMode(HSL, 360);

        //if statement will reset hue to 0 once 360 is exceeded, otherwise only red appears in the end
        if(mouseIsPressed){
             rainbowSize = sizeSliderControl.value();
            if (hue > 360) {
                hue = 0;
            }
            else {
                hue = hue + 6;
            }
            noStroke(); //no borders will make it look more seamless
            fill(hue, 200, 200); 
            ellipse(mouseX, mouseY, rainbowSize, rainbowSize);
        }      

	};
    

    
}