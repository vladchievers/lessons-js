var arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];


var obj = arr.reduce( function(prev, el){
		if(prev[el]){
			prev[el]++;
		}else{
			prev[el] = 1;
		}
		return prev;
}, {});

console.log(obj);




var ololo = {
	name: 'mykola', 
	age: 56
}; 

function reverse(obj){
	var obj_rev = {};
	for(var key in obj){
		obj_rev[obj[key]] = key;
	}
	return obj_rev;
};

console.log(reverse(ololo));