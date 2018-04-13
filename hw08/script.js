function setStringToArray(str){
	var arr = [];
	for (var i = 0; i < str.length; i++) {
		arr[i] = str[i];
	};
	return arr;
};
console.log(setStringToArray('ololo'));




var str = "12, 42, 63, 56, 122, 17, 117, 25, 645, 722, 964";

var arr = str.split(', ');

var newArr = arr.filter(function(el){
	return !(el%2);
});
console.log(newArr);



var ololo = [1, 3, 1, 3, 5, 2, 2, 4, 4];

var kokoko = ololo.reduce(function(prev,el){
		if(prev.indexOf(el) === -1){
			prev.push(el)
		};
		return prev;
}, []);
console.log(kokoko)