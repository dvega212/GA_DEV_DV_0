
//===== User Triggers =====//

$('.container').hover(function(){
	beginAnimation();
});



//===== Functions =====//
function beginAnimation(){
	var numOfBars = $('.bar').length;

	for (var i = 1; i <= numOfBars; i++){
		var myBar = $('.inner' + i);
		var transitionHeight = myBar.attr("transition-height");
		animateBar(myBar, transitionHeight);
	}
}

function animateBar(element, newHeight){
	element.animate({
		height: newHeight + "px"
	}, 5000);
}


