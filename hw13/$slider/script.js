$(function() {
	var image_width = 800;
	var rBtn = $('.right');
	var lBtn = $('.left');
	var sliderList = $('.slider-list');
	var sliderCount = $('img').length - 1;

	lBtn.on('click' , () => {
		var currentMargin = parseInt(sliderList.css('margin-left')) || 0;
		var maxMargin = sliderCount * image_width * -1;

		if(currentMargin === maxMargin){
			sliderList.css('margin-left' , '0');
		}else{
			sliderList.css('margin-left' , currentMargin - image_width);
		}
	});

	rBtn.on('click' , () => {
		var currentMargin = parseInt(sliderList.css('margin-left')) || 0;
		var maxMargin = 0 ;

		if(currentMargin === maxMargin){
			sliderList.css('margin-left' , sliderCount * -image_width); 
		}else{
			sliderList.css('margin-left' , currentMargin + image_width);
		}

	});
});
