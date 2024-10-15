/*
	Using https://en.wikipedia.org/wiki/Flood_fill#Pseudocode as a reference. 
	Opted to implement a combined span and fill span algorithm published in 1990
	as it's faster than recursive, easy to understand, cache and bitplane friendly

	Unfortunately I was unable to successfully implement this tool. It doesn't work. 
*/

var fillColour;
var ctx = canvas.getContext('2d');
var c = document.getElementById('c'),
    ctx = c.getContext('2d'),
    current = {x: null, y: null},
    last = {x: null, y: null};
    
    
function BucketFillTool() 
{
	this.icon = "assets/iconBucketFill.jpg";
	this.name = "bucketFillTool";


	this.fill = function(x, y) {
        if (x > 0 && x < c.width && y > 0 && y < c.height) 
        {
            var imgData = ctx.getImageData(x, y, 1, 1);
            var pixel = imgData.data;

            var bg = hexToRgb(fillColour);

            if (pixel[0] != bg.r || pixel[1] != bg.g || pixel[2] != bg.b) 
            {
                return;
            }

            var flood = hexToRgb(fillColour);

            pixel[0] = flood.r;
            pixel[1] = flood.g;
            pixel[2] = flood.b;
            pixel[3] = 255;

            ctx.putImageData(imgData, x, y);

            setTimeout(function() 
            {
                floodFill(x + 1, y);
                floodFill(x - 1, y);
                floodFill(x, y + 1);
                floodFill(x, y - 1);  
            }, 1);
        }
    }




	this.draw = function()
	{
		//save the fill colour to a variable
		fillColour = document.getElementById('colourWheel').value;	

		//find out which colour to replace
		oldColour = get(mouseX, mouseY);

		//launch bucket fill once mouse has been clicked
		if(mouseIsPressed)
		{
			this.fill(mouseX, mouseY);
		}

	}







}







