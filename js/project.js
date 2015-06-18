$(document).ready(function(){

	$('h1').removeClass('animation');

	$(document).on('scroll', function(){
		
		var currentScrollPos = $(document).scrollTop();
		var moveImagesBy = Math.floor( currentScrollPos / 3 );

		$('#oneA').css('left', moveImagesBy );
		$('#oneB').css('right', moveImagesBy );
		$('#twoA').css('right', moveImagesBy*2 );
		$('#twoB').css('left', moveImagesBy*2 );
	});

	$('#threeA').waypoint( function(direction){
		$('#threeA').toggleClass('fadeInUp');
			}, {offset : 800});

	$('#threeB').waypoint( function(direction){
		$('#threeB').toggleClass('fadeInUp');
			}, {offset : 600});

	$('#threeC').waypoint( function(direction){
		$('#threeC').toggleClass('fadeInUp');
			}, {offset : 500});

	$('#four').waypoint(function(direction){
		$('#four').css('width', 240);
			}, {offset : 400});

	$('#fiveA').waypoint(function(direction){
		$('#fiveA').css('margin-top', 0);
			}, {offset : 200});
	$('#fiveB').waypoint(function(direction){
		$('#fiveB').css('margin-top', 0);
			}, {offset : 800});

	$('#six').waypoint(function(direction){
		$('#six').css('opacity', 1);
			}, {offset : 400});

	$('#seven').waypoint(function(direction){
		$('#seven').css('width', 480);
			}, {offset : 400});

	$('.eight').waypoint(function(direction){
		$('.eight').removeClass('rotateA').removeClass('rotateB');
			}, {offset : 400});
	});














