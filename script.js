$( document ).ready(function() {
	$("#order").on('change', initTriangle); 
	$(window).on("resize", initTriangle);
});

function initTriangle(){
	var $canvas = $("canvas");
	var height = $(window).height() - $("#control").outerHeight() - $("footer").outerHeight(); // to allow for the control div and footer
	var width = $(window).width();
	$canvas.attr("height",height);
	$canvas.attr("width",width);
    var order = $("#order").val();
    var size = Math.min(height, width);
    var x = (width - size) / 2; 
    var y = (height - (Math.sqrt(3) / 2 * size)) / 2;
    context = $canvas[0].getContext('2d');
   	context.clearRect(0, 0, width, height);
   	drawBackground(x, y, size);
    drawTriangle(x, y, size, order);
}

function drawBackground(x, y, size){
	context.fillStyle="#948C75";
    context.beginPath();
    // top
	context.moveTo(x, y);
	context.lineTo(x + size, y);
	// the left diagonal
	context.lineTo(x + (size/2), y + size/2 * Math.sqrt(3));
    // the right diagonal
	context.moveTo(x + (size/2), y + size/2 * Math.sqrt(3));
	context.closePath();
	context.fill();
}


/*
Draws tiangles!
*/

function drawTriangle(x, y, size, order) {
	var $canvas = $("canvas");
	context = $canvas[0].getContext('2d');
	
	// base case: k = 1 (order 1) has 0 triangles inside it
    if(order == 1){ // draw 1 triangle
    	context.fillStyle="#99B2B7";
        context.beginPath();
        // top
		context.moveTo(x, y);
		context.lineTo(x + size, y);
		// the left diagonal
		context.lineTo(x + (size/2), y + size/2 * Math.sqrt(3));
        // the right diagonal
		context.moveTo(x + (size/2), y + size/2 * Math.sqrt(3));
		context.closePath();
		context.fill();


    } else if(order > 1) {
         drawTriangle(x, y, size/2, order-1);
         drawTriangle(x + (size/2), y, size/2, order-1);
         drawTriangle(x + (size/4), y + (Math.sqrt(3) * size/4), size/2, order-1);
    }
}