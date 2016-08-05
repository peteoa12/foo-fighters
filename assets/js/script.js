$(document).ready(function (){

		//get all link with class panel
	$('a.panel').click(function () {


        //reset and highlight the clicked link
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		
		//grab the current item, to be used in resize function
		current = $(this);
		
                //scroll it to the destination
		$('#wrapper').scrollTo($(this).attr('href'), 1000);

		
                //cancel the link default behavior
		// return false;
		
		
	});


	// TweenMax.to(".wheels", .1, {rotation:360, repeat:-1});
	// 

	//resize all the items according to the new browser size
	$(window).resize(function () {
		
	});

	//waypoint function

	var currentXPosition = $("body").scrollLeft();
	var currentInnerWidth = $("body").innerWidth();

	$("body").on('mousewheel', event, function(event) {

		if($("body").innerWidth() < 768) return;
		
		event.preventDefault();

		$("body").scrollLeft($("body").scrollLeft() - (event.deltaY * event.deltaFactor));
		
		currentXPosition = $("body").scrollLeft();

		console.log(currentXPosition / currentInnerWidth);

	});

});


