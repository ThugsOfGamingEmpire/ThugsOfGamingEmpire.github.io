// html setup
var pupilsHTMLCollection = document.getElementsByClassName('theBlindPupil');
var pupilsArray = Array.from(pupilsHTMLCollection);

// input

var input = {
	mouseX:{
		start: 0,
		end: window.innerWidth,
		current: 0,
	},
	mouseY:{
		start:0,
		end: window.innerHeight,
		current: 0,
	}
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output

var output = {
	x: {
		start:-100,
		end:100,
		current: 0,
	},
	y: { 
		start:-75,
		end:75,
		current: 0,
	},
};


output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;


var handleMouseMove = function(event) {
	input.mouseX.current = event.clientX;
	input.mouseX.fraction = (input.mouseX.current - input.mouseX.start)/ input.mouseX.range;

	input.mouseY.current = event.clientY;
	input.mouseY.fraction = (input.mouseY.current - input.mouseY.start)/ input.mouseY.range;
    
    // output x
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

    pupilsArray.forEach(function(theBlindPupil,k){
    	theBlindPupil.style.transform = 'translate('+output.x.current+'px,'+output.y.current+'px)';    	 
    });


    // console.log('output.x.current',output.x.current);

    

	// console.log('fraction', input.mouseX.fraction);
	// console.log('fraction', input.mouseY.fraction);	
}

var handleResize = function () {
	input.mouseX.end = window.innerWidth;
	input.mouseX.range = input.mouseX.end - input.mouseX.start;

	input.mouseY.end = window.innerWidth;
	input.mouseY.range = input.mouseY.end - input.mouseY.start;

	input.mouseX.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);