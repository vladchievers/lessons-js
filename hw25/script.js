
class Alarm {
	constructor () {
		this.alarm = "";
	};
	init() {
		setInterval(() => {
			const date = new Date();
			let hours = date.getHours();
			let minutes = date.getMinutes();
			let seconds = date.getSeconds();

			if(hours < 10) {hours = '0' + hours};
			if(minutes < 10) {minutes = '0' + minutes};
			if(seconds < 10) {seconds = '0' + seconds};

			let time =  `${hours} : ${minutes} : ${seconds}`;
			let forAlarm = `${hours} : ${minutes}`;

			document.querySelector('.watch').textContent = time;

			this.setAlarm(forAlarm);
			
		}, 1000);
	};

	setAlarm(time) {
		document.querySelector('.setAlarm').addEventListener('click', () =>{
			
			let hours = document.querySelector('.alarm-hours').value;
			let minutes = document.querySelector('.alarm-minutes').value;

			if(hours < 10 ) {hours = '0' + hours};
			if(minutes < 10 ) {minutes = '0' + minutes};

			let alarm = `${hours} : ${minutes}`;

			this.alarm = alarm;
			document.querySelector('.setAlarm').style.backgroundColor = 'grey';
		});

		
		if(this.alarm === time){
			document.querySelector('audio').play();
		}

		document.querySelector('.stop').addEventListener('click', () =>{
			document.querySelector('audio').pause();

			let hours = document.querySelector('.alarm-hours');
			let minutes = document.querySelector('.alarm-minutes');

			hours.value = 0;
			minutes.value= 0;

			document.querySelector('.setAlarm').style.backgroundColor = 'lightgreen'

		});

	}
};

new Alarm().init();


