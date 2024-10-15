
var dropdownShapes; //variable for dropdown list inside toolbox.js
var item; //dropdown list item
var showDropdown; //will be defined in toolbox.js
var shapeToolCount; //used in toolbox.js - help to control display of alert window


function ShapeTool(){
	this.name = "shapeTool";
    this.icon = "assets/iconShapes.jpg"; 
    
    var startShapeMouseX = -1;
	var startShapeMouseY = -1;
	var drawingShape = false;

    this.draw = function() {

		cursor(CROSS); //improve user feedback: click and drag
	
		//get colours and line thickness from html element
		var colourWheel = document.getElementById('colourWheel').value;	
		var thickness = document.getElementById('lineWidth').value;

			//only draw if mouse was clicked within canvas
			if(mouseX <= width && 
				mouseX >= 0 && 
				mouseY <= height && 
				mouseY >= 0 &&
				mouseIsPressed) 
			{
				
				//if it's the start of drawing a new line
				if(startShapeMouseX == -1)
				{
					startShapeMouseX = mouseX;
					startShapeMouseY = mouseY;
					drawingShape = true;
					//save the current pixel Array
					loadPixels();
				}

				else
				{
					//update the screen with the saved pixels to hide any previous
					//line between mouse pressed and released
					updatePixels();
					//draw the line
					noFill();
					stroke(colourWheel);
					strokeWeight(thickness);

					/* check if rectangle was selected, then draw it */
					if(item == "rectangle") 
					{
						rect(startShapeMouseX, startShapeMouseY, mouseX-startShapeMouseX, mouseY-startShapeMouseY);
					}

					/* check if ellipse was selected, then draw it */
					if(item == "ellipse") 
					{
						ellipse(startShapeMouseX, startShapeMouseY, mouseX-startShapeMouseX, mouseY-startShapeMouseY);
					}

					/* check if triangle was selected, then draw it */
					if(item == "triangle") 
					{
						triangle(startShapeMouseX, startShapeMouseY, startShapeMouseX+mouseX, startShapeMouseY, startShapeMouseX+mouseX/2, startShapeMouseY-mouseY/2);
					}

					/* check if stadium was selected, then draw it */
					if(item == "stadium") 
					{
						//BUG known to p5: if shape is draged to the left, an error occurs because of negative values and the rounded corner
						//fix with abs() which forces the shape to be drawn to the right side at all times
						rect(abs(startShapeMouseX), abs(startShapeMouseY), abs(mouseX-startShapeMouseX), abs(mouseY-startShapeMouseY), abs(30));
					}	

					/* check if line was selected, then draw it */
					if(item == "line") 
					{
						line(startShapeMouseX, startShapeMouseY, mouseX, mouseY);
					}


					/* check if arc was selected, then draw it */
					if(item == "arc") 
					{
						arc(startShapeMouseX, startShapeMouseY, mouseX, mouseY, PI, TWO_PI);
					}

				}

			}

			else if(drawingShape)
			{
				//save the pixels with the most recent line and reset the
				//drawing bool and start locations
				loadPixels();
				drawingShape = false;
				startShapeMouseX = -1;
				startShapeMouseY = -1;
			}



    }; 

        

}
   


    

