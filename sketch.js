//global variables 
var c; //make canvas size a global variable
var toolbox = null;
//var colourWheel;
//KK var colourP = null;
var helpers = null;
var beagle; //for stamp tool


function preload() {
	//stamp tool: preload beagle image so it's ready when required
	beagle = loadImage('beagleHead.png');

}


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");


	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	
	
	//colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new ShapeTool());
	toolbox.addTool(new EditableShapeTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new ConfettiTool());
	toolbox.addTool(new StampTool()); 
	toolbox.addTool(new RainbowBrushTool());
	toolbox.addTool(new BucketFillTool());
	background(255);

}







function draw() {
	

	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) 
	{
		toolbox.selectedTool.draw();
	} 
	
	else 
	{
		alert("it doesn't look like your tool has a draw method!");
	}
}