$.fn.clearText = function(userSettings){
	var defaultSettings = {
		side: 'right'
	};
	var settings = $.extend(defaultSettings , userSettings);

	var $elem = $('input , textarea');
	var $wrapper = $elem.wrap('<div class="elem-wrap right"></div>');
	var $clear =  $wrapper.after($('<div class="clear-text"></div>'));


	if(defaultSettings.side === 'right'){
		$wrapper.parent().removeClass('left').addClass('right');
	}else{
		$wrapper.parent().removeClass('right').addClass('left');
	};


	$('.clear-text').on('click', function(){
		$elem.val('');
	});

};

