var num = +prompt("Введите число");
var a = "";

if(!num){
	alert("Можно вводить только числа!!")
}else{
	for (var i = 1; i <= num; i++) {
		for (var j = 0; j < i; j++) {
			a = a + "*";
		};
		a = a + "\n";
	};
	console.log(a);
};
