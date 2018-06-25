class Clear {
	constructor(elem){
		this.elem = document.querySelectorAll(elem);
		this.defSettings = {side: 'right'};
	};

	init(userSettings) {
		const settings = Object.assign(this.defSettings, userSettings);


		this.elem.forEach( (el) => {
			const wrapper = document.createElement('div');
			wrapper.classList.add('elem-wrap');

			if(settings.side === 'left') {
				wrapper.classList.remove('right');
				wrapper.classList.add('left');
			}else{
				wrapper.classList.remove('left');
				wrapper.classList.add('right');
			};

			const x = document.createElement('span');
			x.classList.add('clear-text');

			const parent = el.parentElement;

			wrapper.appendChild(el);
			wrapper.appendChild(x);
			parent.appendChild(wrapper);

			el.addEventListener('keyup', ()=> { 				
				if(el.value !== "") {
					x.classList.add('active');
				}else{
					x.classList.remove('active');
				}
			});

			x.addEventListener('click' , function () {
				this.previousElementSibling.value = "";
				this.classList.remove('active');
			});
		});
	};
};



new Clear('input').init({
	side: 'right'
});

new Clear('textarea').init();

