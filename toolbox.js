
//store the toolname in a global variable so I can access anywhere. 
//want to hide / show certain elements depending on tool that's active.

//container object for storing the tools. Functions to add new tools and select a tool
function Toolbox() {

	var self = this;

	this.tools = [];
	this.selectedTool = null;
		
	//shape tool: don't show shape tool dropdown option 
    showDropdown = false;
	//shape tool: set counter of tool clicks to 0
	shapeToolCount = 0;
	editableShapeToolCount = 0;


	var toolbarItemClick = function() {
		//remove any existing borders
		var items = selectAll(".sideBarItem");
		for (var i = 0; i < items.length; i++) {
			items[i].style('border', '0')
		}

		var toolName = this.id().split("sideBarItem")[0];
		self.selectTool(toolName);

		//call loadPixels to make sure most recent changes are saved to pixel array
		loadPixels();

	}


	//add a new tool icon to the html page
	var addToolIcon = function(icon, name) {
		var sideBarItem = createDiv("<img src='" + icon + "'></div>");
		sideBarItem.class('sideBarItem')
		sideBarItem.id(name + "sideBarItem")
		sideBarItem.parent('sidebar');
		sideBarItem.mouseClicked(toolbarItemClick);
	};

	//add a tool to the tools array
	this.addTool = function(tool) {
		//check that the object tool has an icon and a name
		if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
			alert("make sure your tool has both a name and an icon");
		}
		this.tools.push(tool);
		addToolIcon(tool.icon, tool.name);

		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if (this.selectedTool == null) {
			this.selectTool(tool.name);
		}
	};

	this.selectTool = function(toolName) {
		//search through the tools for one that's name matches
		//toolName
		for (var i = 0; i < this.tools.length; i++) {
			if (this.tools[i].name == toolName) {
				//if the tool has an unselectTool method run it.
				if (this.selectedTool != null && this.selectedTool.hasOwnProperty(
						"unselectTool")) {
					this.selectedTool.unselectTool();
				}
				//select the tool and highlight it on the toolbar
				this.selectedTool = this.tools[i];
				select("#" + toolName + "sideBarItem").style("border", "2px solid #c1272d");

				//editable shape tool - usability: once clicked, advise user how to use tool 
				if(toolName == "editableShapeTool")
				{
					//only display alert box with instructions once
					if(editableShapeToolCount == 0)
					{
						alert("Click on the canvas to create your shape's starting / end point.\n\nRed button: the edit shape button allows you to manipulate your shape by clicking and slowly dragging the red ellipses\n\nGreen button: the finish shape button should be clicked once you've completed your shape. You may create a new shape afterwards.");
						editableShapeToolCount = 1;
					}
				}

				//shape tool: populate shape options
				if(toolName == "shapeTool") 
				{
					//only display dropdown menu once tool is selected for the 1st time
					showDropdown = true;
					if(showDropdown == true) 
					{	
						//check that shape tool hasn't previously been selected
						if(shapeToolCount == 0) 
						{
							//advise user where to select shapes from only once
							alert("Please select a shape from the dropdown menu.\n\nThen click, drag and release the mouse.");
							//set counter to 1 => prevent displaying alert box a 2nd time
							shapeToolCount = 1; 
						}
						
						//shape options in dropdown 
						dropdownShapes = createSelect();
						dropdownShapes.position(400, 10);
						dropdownShapes.option('select...');
						dropdownShapes.option('line');
						dropdownShapes.option('ellipse');
						dropdownShapes.option('rectangle');
						dropdownShapes.option('triangle');
						dropdownShapes.option('stadium');
						dropdownShapes.option('arc');
						dropdownShapes.selected('select...');
						dropdownShapes.changed(selectedShape);
							
						function selectedShape() 
						{
							item = dropdownShapes.value();
						}
					}
				}



				//if the tool has an options area. Populate it now.
				if (this.selectedTool.hasOwnProperty("populateOptions")) {
					this.selectedTool.populateOptions();

					//it appears that each tool can only have one item in the options area. 
					//I've not been able to find a way to add two items, eg. two buttons.
					//as many of my options apply to several tools, I've opted for adding the additions to the toolbox instead 

				}

			}
		}
	};


}
