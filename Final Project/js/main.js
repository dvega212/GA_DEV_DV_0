

$(document).ready(function(){

	//===== User Triggers =====//
	$('.container-div').hover(function(){
   		attachClass();                       
	});


	//===== Functions =====//
	function attachClass(){
	  	$('.inner, .inner2').addClass("my-animation");
	}
});


