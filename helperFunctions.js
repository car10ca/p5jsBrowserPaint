
function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		//ensure rgb mode is set (using rainbow brush sets hsl colour mode and results in purple background after clear has been pressed)
		colorMode(RGB, 255); 
		background(255, 255, 255);
		//mirror tool: needed clear canvas
		loadPixels();
		//editable shape tool: reset array to empty so that canvas can be cleared when in editMode
		currentShape = [];
	});

	//event handler for the save image button. saves the canvas to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas("myPicture", "jpg");
	});


}
	