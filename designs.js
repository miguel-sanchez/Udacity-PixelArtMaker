/*
* JQUERY LISTENING AND CALLING MAKEGRID
* JavaScript runs line 39 when the document is loaded.
* Then it listens to a click event on the submit button.
* When clicked:
* - values of input text fields for width and height are assigned to 'width' and 'height' variables,
* - event.preventDefault() stops the submit button from submitting the form and reloading the page,
* - makeGrid function is invoked using 'width' and 'height' variables as arguments.
*
* MAKEGRID FUNCTION
* The function receives 'width' and 'height' parameters submitted by the user.
* The table '#pixel_canvas' is assigned to the 'canvas' variable.
* A for loop:
* - opens as many rows (<tr>) as 'height' value,
* - creates as many columns (<td></td>) as 'width' value,
* - closes as many rows (</tr>) as 'height' value,
* - stores the above structure into the 'grid' variable.
* That structure is set to be the HTML content of the #pixelCanvas table ('canvas' variable), so the grid is created and shown on the browser.
*
* JQUERY LISTENING AND PAINTING THE GRID
* jQuery is also listening to clicks on the '#pixel_canvas' table.
* The value of the '#colorPicker' form element is assigned to the 'color' variable.
* jQuery listens to the click event for a target (element that registered for the event or a descendant of it) and sets the target's (<td>) background to the 'color' variable.
*/

function makeGrid(height, width) {
	let canvas, grid;
	canvas = $('#pixel_canvas');
	for (let i = 0; i < height; i++) {
		grid += '<tr>';
		for (let i = 0 ; i < width; i++) {
			grid += '<td></td>';
		}
		grid += '</tr>';
	}
	canvas.html(grid);
}

$(document).ready(function() {
	$('[type="submit"]').click(function(event) {
		let height, width;
		height = $('#input_height').val();
		width = $('#input_width').val();
		event.preventDefault();
		makeGrid(height, width);
	});

	$('#pixel_canvas').click(function(event) {
		let color = $('#colorPicker').val();
		$(event.target).css('background', color);
	});
});
