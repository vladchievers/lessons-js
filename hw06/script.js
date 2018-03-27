var num = +prompt('Введите число)');

if(!num){
	alert("Только числа!");
}else{
	function factorial(n){
		var a = 1;
		for (var i = 1; i <= n; i++) {
			a = a * i;
		}
		return a;
	}
	console.log(factorial(num))
}



