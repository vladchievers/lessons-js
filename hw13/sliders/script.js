var leftBtn = document.querySelectorAll('.left');
var rightBtn = document.querySelectorAll('.right');


leftBtn.forEach((item) =>{
	item.addEventListener('click', (e) => {
		var sliderCount = item.parentElement.querySelectorAll('img');
		var currentSlide = item.parentElement.querySelector('img.active');

		sliderCount.forEach((el) =>{

			if (el === currentSlide) {
				el.classList.remove('active');

				if(currentSlide.previousElementSibling === null){
					el = sliderCount[sliderCount.length - 1].classList.add('active')
				}else{
					el.previousElementSibling.classList.add('active');
				};
			};
		});
	});
});


rightBtn.forEach((item) => {
	item.addEventListener('click', (e) => {
		var sliderCount = item.parentElement.querySelectorAll('img');
		var currentSlide = item.parentElement.querySelector('img.active');
		
		sliderCount.forEach((el) => {

			if (el === currentSlide) {
				el.classList.remove('active');

				if(currentSlide.nextElementSibling === null){
					el = sliderCount[0].classList.add('active')
				}else{
					el.nextElementSibling.classList.add('active');
				};
			};
		});
	});
});


