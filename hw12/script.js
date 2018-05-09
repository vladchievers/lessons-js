var leftBtn = document.querySelector('.left');
var rightBtn = document.querySelector('.right');
var sliderCount = document.querySelectorAll('img');

leftBtn.addEventListener('click', (e) => {
	var currentSlide = document.querySelector('img.active');
	
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


rightBtn.addEventListener('click', (e) => {
	var currentSlide = document.querySelector('img.active');

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
