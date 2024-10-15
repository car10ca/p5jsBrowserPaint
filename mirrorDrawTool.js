var directionButton;


function mirrorDrawTool() {
	this.icon = "assets/iconMirrorDraw.jpg";
	this.name = "mirrorDraw";

	//which axis is being mirrored (x or y) x is default
	this.axis = "x";
	//line of symmetry is halfway across the screen
	this.lineOfSymmetry = width / 2;

	//this changes in the jquery click handler. So storing it as
	//a variable self now means we can still access it in the handler
	var self = this;

	//where was the mouse on the last time draw was called.
	//set it to -1 to begin with
	var previousMouseX = -1;
	var previousMouseY = -1;

	//mouse coordinates for the other side of the Line of symmetry.
	var previousOppositeMouseX = -1;
	var previousOppositeMouseY = -1;

	this.draw = function(){
	
	cursor(ARROW); //ensure cursor is back to arrow

	//get colours and line thickness from html element
	var colourWheel = document.getElementById('colourWheel').value;	
	var thickness = document.getElementById('lineWidth').value;


	//create button for horizontal / vertical toggle
	directionButton = createButton("Horizontal mirroring");

		//apply css style to button (different method to previously styled elements in css document)
		directionButton.style("position", "absolute");
		directionButton.style("bottom", "115px");
		directionButton.style("left", "615px");
		directionButton.style("background", "#333");
		directionButton.style("border", "1px solid #fff");
		directionButton.style("padding", "5px");
		directionButton.style("color", "#1e90ff");
	
		directionButton.mousePressed(function() 
		{
			if (self.axis == "x") 
			{
				self.axis = "y";
				self.lineOfSymmetry = height / 2;
				directionButton.html("Vertical mirror draw");
			} 
			else 
			{
				self.axis = "x";
				self.lineOfSymmetry = width / 2;
				directionButton.html("Horizontal mirror draw");
			}
		});


		//display the last save state of pixels
		updatePixels();


		//do the drawing if the mouse is pressed
		if (mouseIsPressed) {
			//if the previous values are -1 set them to the current mouse location
			//and mirrored positions
			if (previousMouseX == -1) {
				previousMouseX = mouseX;
				previousMouseY = mouseY;
				previousOppositeMouseX = this.calculateOpposite(mouseX, "x");
				previousOppositeMouseY = this.calculateOpposite(mouseY, "y");
			}

			//if there are values in the previous locations
			//draw a line between them and the current positions
			else {
				stroke(colourWheel); //apply colour as per html colour element
				strokeWeight(thickness); //line thickness selected from menu
				line(previousMouseX, previousMouseY, mouseX, mouseY);
				previousMouseX = mouseX;
				previousMouseY = mouseY;

				//these are for the mirrored drawing the other side of the
				//line of symmetry
				var oX = this.calculateOpposite(mouseX, "x");
				var oY = this.calculateOpposite(mouseY, "y");
			
				line(previousOppositeMouseX, previousOppositeMouseY, oX, oY);
				previousOppositeMouseX = oX;
				previousOppositeMouseY = oY;
			}
		}
		//if the mouse isn't pressed reset the previous values to -1
		else {
			previousMouseX = -1;
			previousMouseY = -1;

			previousOppositeMouseX = -1;
			previousOppositeMouseY = -1;
		}

		//after the drawing is done save the pixel state. We don't want the
		//line of symmetry to be part of our drawing

		loadPixels();


		//push the drawing state so that we can set the stroke weight and colour
		push();


		//draw the line of symmetry
		strokeWeight(3);
		stroke("#c1272d");
		if (this.axis == "x") 
		{
			line(width / 2, 0, width / 2, height);
		} 
		else 
		{
			line(0, height / 2, width, height / 2);
		}
		//return to the original stroke
		pop();

	};



	/*calculate an opposite coordinate the other side of the
	 *symmetry line.
	 *@param n number: location for either x or y coordinate
	 *@param a [x,y]: the axis of the coordinate (y or y)
	 *@return number: the opposite coordinate
	 */
	this.calculateOpposite = function(n, a) {
		//if the axis isn't the one being mirrored return the same
		//value
		if (a != this.axis) {
			return n;
		}

		//if n is less than the line of symmetry return a coorindate
		//that is far greater than the line of symmetry by the distance from
		//n to that line.
		if (n < this.lineOfSymmetry) {
			return this.lineOfSymmetry + (this.lineOfSymmetry - n);
		}

		//otherwise a coordinate that is smaller than the line of symmetry
		//by the distance between it and n.
		else {
			return this.lineOfSymmetry - (n - this.lineOfSymmetry);
		}
	};


	//when the tool is deselected update the pixels to just show the drawing and
	//hide the line of symmetry. Also clear options
	this.unselectTool = function() {
		updatePixels();
			
	};



	
}