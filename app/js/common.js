$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });
	$(document).ready(function () {
		$('#slider_vertical').lightSlider({
			gallery: true,
			item: 1,
			vertical: true,
			verticalHeight: 390,
			vThumbWidth: 75,
			thumbItem: 7,
			thumbMargin: 4,
			keyPress: true,
			slideMargin: 0
		});
	});
	$(".popular_slider").owlCarousel({
		autoPlay: 5000,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: false,
		items: 4,
		navigationText: ['<span class="prev_button"></span>', '<span class="next_button"></span>']
	});
// tabu
$('.tabs_controls ul').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('.tabs_description').find('div.tabs_description_inner').removeClass('active').eq($(this).index()).addClass('active');
});
});
