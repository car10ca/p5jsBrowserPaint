/*
	1) draw a shape using several vertices
		- add a button to switch between adding new vertices and editing existing ones
		- add vertex to array, then draw without saving to canvas
	2) edit vertices using a mouse drag
		- if editing is on
		- highlight the vertices
		- when mouse pressed is near vertex (use dist()) update the vertex xy with mouse xy
	3) confirm final shape

*/
var editButton;
var finishButton;

var editMode = false;

var currentShape = [];


function EditableShapeTool(){
	this.name = "editableShapeTool";
    this.icon = "assets/iconEditableShape.jpg"; 

//SETUP AREA
	noFill();
	loadPixels();



	editButton = createButton("Edit Shape");
	//applying css style to the button
	editButton.style("position", "absolute");
	editButton.style("bottom", "115px");
	editButton.style("left", "305px");
	editButton.style("background", "#333");
	editButton.style("border", "1px solid #fff");
	editButton.style("padding", "5px");
	editButton.style("color", "#ff0000");

	editButton.mousePressed(function() {
		if(editMode)
		{
			editMode = false;
			editButton.html("Edit Shape");
		}
		else
		{
			editMode = true;
			editButton.html("Add Vertices")
		}
	})



	finishButton = createButton("Finish Shape");

	//apply css style to button (different method to previously styled elements in css document)
	finishButton.style("position", "absolute");
	finishButton.style("bottom", "115px");
	finishButton.style("left", "415px");
	finishButton.style("background", "#333");
	finishButton.style("border", "1px solid #fff");
	finishButton.style("padding", "5px");
	finishButton.style("color", "#32cd32");

	finishButton.mousePressed(function() 
	{
		editMode = false;
		//recall canvas without red editing dots
		draw();
		loadPixels();
		currentShape = [];
	})


    this.draw = function() {

		cursor(ARROW); //ensure cursor is back to arrow

		updatePixels();

		//get colours and line thickness from html element
		var colourWheel = document.getElementById('colourWheel').value;	
		var thickness = document.getElementById('lineWidth').value;

		//only draw if mouse is pressed within canvas area 
		if(mouseX <= width && 
			mouseX >= 0 && 
			mouseY <= height && 
			mouseY >= 0 &&
			mouseIsPressed)
		{
			if(!editMode)
			{
				cursor(ARROW);
				currentShape.push({
					x: mouseX,
					y: mouseY
				});
			}
			else
			{
				cursor(MOVE); //provide user feedback via mouse icon
				for(var i = 0; i < currentShape.length; i++)
				{	
					//editable dots to follow around the mouse location
					if(dist(currentShape[i].x, currentShape[i].y, mouseX, mouseY) < 20)
					{
						currentShape[i].x = mouseX; 
						currentShape[i].y = mouseY;
					}
				}
			}
		}


		beginShape();
		for(var i = 0; i < currentShape.length; i++)
		{	
			strokeWeight(thickness);
			stroke(colourWheel);
			noFill();
			vertex(currentShape[i].x, currentShape[i].y);
			if(editMode)
			{
				
				fill("red");
				strokeWeight(0);
				//increase editable ellipses size along with vertices line thickness
				ellipse(currentShape[i].x, currentShape[i].y, 8+(thickness*1.5));
				noFill();
				strokeWeight(thickness);
			}
		}
		endShape();
     
	
	}


}
   

