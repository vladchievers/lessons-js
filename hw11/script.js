var sq = document.querySelectorAll('.sq');

sq.forEach(function(el){
	el.addEventListener('click', function(e){
		this.innerHTML++;
		e.stopPropagation();
	});
});

function ololo(e){
	if(e.type == 'click' || e.keyCode == 32){
		var div = document.querySelector('.block');

		var width = div.offsetWidth;
		var height = div.offsetHeight;

		var left = Math.floor(Math.random() * (document.documentElement.clientWidth - width));
		var top = Math.floor(Math.random() * (document.documentElement.clientHeight - height));

		div.style.top = top + 'px';
		div.style.left = left + 'px';
	}
	
}
document.documentElement.addEventListener('click' , ololo);
document.documentElement.addEventListener('keypress' ,ololo);

