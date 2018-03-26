var num = 3;

var i, j, mess;

for (i = 1; i <= num; i++) {
	mess = '';
	for (j = 1; j <= i; j++) {
		mess = mess + "*";
	}
	console.log(mess);
}



