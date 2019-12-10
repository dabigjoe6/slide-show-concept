const TRANSITION_TIME = 4000;

$(document).ready(function () {


	let transitionDuration = TRANSITION_TIME - 2000;
	$('img').css('transition-duration', `${transitionDuration}ms`);

	let images = $('.slider-container').children();
	let reverseImages = $('.slider-reverse-container').children();

	//transition individual image
	function transitionImage(index) {

		//change top position of images
		$(images[index]).addClass('active');
		$(reverseImages[index]).addClass('active');

		setTimeout(function () {
			$(images[index]).removeClass('active');
			$(reverseImages[index]).removeClass('active');

			$(images[index]).addClass('dormant');
			$(reverseImages[index]).addClass('dormant-reverse');
		}, TRANSITION_TIME)

		setTimeout(function () {
			$(images[index]).removeClass('dormant');
			$(images[index]).css("display", "none");
			$(reverseImages[index]).removeClass('dormant-reverse');
			$(reverseImages[index]).css("display", "none");

		}, TRANSITION_TIME + 3000);

		setTimeout(function () {
			$(images[index]).css("display", "inline-block");
			$(reverseImages[index]).css("display", "inline-block");
		}, TRANSITION_TIME + 3100)
	}

	//start transition of every single image at interval of TRANSITION_TIME
	let index = 0;
	setInterval(() => {
		if (index >= images.length) {
			index = 0;
		}
		transitionImage(index)
		++index;
	}, TRANSITION_TIME)
})