$(document).ready(function(){

	console.log("it works.");
	
	
	
	var mil = "start";

	
/*
	
	
	var milImg = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		$(".millions").css("backgroundImage", z);
		console.log("new mil img");
		
	};
	
	
	var minImg = function(y){
	
		var z = ("url(images/" + y + ".jpg)");
		$(".minnow").css("backgroundImage", z);
		console.log("new min img");
		
	};
	
	
*/	
	
	
	
	var show = function(y){
		console.log(y);
		$(y).removeClass("hide");
		$(y).addClass("show");
	}
	
	
	var hide = function(y){
		console.log("hiding "+y);
		$(y).removeClass("show");
		$(y).addClass("hide");
	}
	

	
	
	

	
	
	
	
});