function getTime () {
	const date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	if(hours < 10) {hours = '0' + hours};
	if(minutes < 10) {minutes = '0' + minutes};
	if(seconds < 10) {seconds = '0' + seconds};

	let time =  `${hours} : ${minutes} : ${seconds}`;

	document.querySelector('.watch').textContent = time;
	setInterval( function() {getTime()}, 1000);

	let alarm_
}

window.addEventListener('onload', getTime());
