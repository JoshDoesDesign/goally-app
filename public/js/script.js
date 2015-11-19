
/************************************* 
********** JQUERY & JS CODE ********** 
*************************************/

$(document).ready(function() {
	/* Video Module Popup */
	$('.video-icon').on('click', function(){
		console.log('registered open click');
		$('.video-lightbox').css('display', 'block');
		$('.lightbox-background-cover').css('visibility', 'visible');
	});

	/* Close Video Module*/
	$('.close-x').on('click', function(){
		console.log('registered close click');
		$('.video-lightbox').css('display', 'none');
		$('.lightbox-background-cover').css('visibility', 'hidden');
	});
});