function isSymbolPresentInString(str,symbol){
	for (var i = 0; i < str.length; i++) {
		if(str[i] === symbol){
			return true;
		}
	}
	return false;
}

console.log(isSymbolPresentInString("abclkdfgjkfdjgkd","k")); 


function getSymbolIndex(str,symbol){
	for (var i = 0; i < str.length; i++) {
		if(str[i] === symbol){
			return i;
		}
	} 
	return -1;
}

console.log(getSymbolIndex("jgkdkkjhg","k"));

function getNumberOfEven(n){
	var str = n + "";
	var b = 0;
	for (var i = 0; i < str.length; i++) {
		 if(!(str[i] % 2)){
		 	 b++;
		 }
	}
	return b;
}

console.log(getNumberOfEven(3634383888334))

