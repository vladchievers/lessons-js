var sq = document.querySelectorAll('.sq');

sq.forEach(function(el){
	el.addEventListener('click', function(e){
		console.log(e);
		if(e.spaceKey){
			console.log('1');
		}
		this.innerHTML++;
		e.stopPropagation();
	});
});

// function (e){
// 	var div = document.querySelector('.block');
// }
// function ololo(e){

// 	if('')
// }
// document.documentElement.addEventListener('click' , ololo);
// document.documentElement.addEventListener('onkeypress' , ololo);
