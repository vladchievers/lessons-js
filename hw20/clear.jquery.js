// $.fn.clearText = function(userSettings){
// 	var defaultSettings = {
// 		side: 'right'
// 	};
// 	var settings = $.extend(defaultSettings , userSettings);


// 	var $elem = $('input , textarea');
// 	var $wrapper = $elem.wrap('<div class="elem-wrap right"></div>');
// 	var $clear =  $wrapper.after($('<div class="clear-text"></div>'));


// 	$elem.on('keyup' , function(){
		
// 		if($(this).val() !== ''){
// 			$(this).next().addClass('active');
// 		}
// 	})
	

// 	if(defaultSettings.side === 'right'){
// 		$wrapper.parent().removeClass('left').addClass('right');
// 	}else{
// 		$wrapper.parent().removeClass('right').addClass('left');
// 	};


// 	$('.clear-text').on('click', function(){
// 		$(this).parent().find($elem).val('');
// 		$(this).removeClass('active');
// 	});
// };

class Clear {
	constructor({side = 'right'}){};

	clearText({side}){
		const elem = document.querySelectorAll('input');
		let wrapper = document.createElement('div');
		let clear = document.createElement('div');
		wrapper.appendChild(elem);
		wrapper.appendChild(clear);
		document.body.appendChild(wrapper);
	}
}

const clear = new Clear();

clear.clearText();