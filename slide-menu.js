(function ($) {
	$.fn.slideMenu = function(buttonSelector) {
		var _this = $(this),
			_slide = {
				menu: $('.slide-menu'),
				page: $('.slide-page'),
				button: $(buttonSelector)
			}

		_slide.button.on('click', function (e) {
			e.preventDefault();
			_slide.page.toggleClass('open');
		});
	};

})( jQuery );
