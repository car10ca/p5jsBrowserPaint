//this tool creates a pattern of randomly sized shapes to create a confetti effect


function ConfettiTool(){
	this.name = "confettiTool";
	this.icon = "assets/iconConfetti.jpg"; 

    
    this.draw = function(){

    //ensure rgb mode is set (using rainbow brush sets hsl colour mode)
	colorMode(RGB, 255); 

        if(mouseIsPressed) {
            noStroke();
            //as random is up to but not including the number, increase by 1 to include 255 as rgb value 
            fill(random(256), random(256), random(256));
            ellipse(mouseX+10, mouseY+10, random(30), random(30));

            fill(random(256), random(256), random(256));
            rect(mouseX+20, mouseY+20, random(30), random(30));

            fill(random(256), random(256), random(256));
            triangle(mouseX, mouseY, mouseX+40, mouseY, mouseX+20, mouseY-30);
        }
        
	}; 
    
}

