const TRANSITION_TIME = 5000;

$(document).ready(function () {
	let images = $('.slider-container').children();
	let reverseImages = $('.slider-reverse-container').children();

	function transitionImage(index) {
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

	let index = 0;
	setInterval(() => {
		if (index >= images.length) {
			index = 0;
		}
		transitionImage(index)
		++index;
	}, TRANSITION_TIME)
})