var arr1 = [1, 2, 3];

function generateList_v1(array){
	var ul = document.createElement('ul');

	array.forEach(function(el){
		var li = document.createElement('li');
		li.innerText = el
		ul.append(li);
	});
	document.body.append(ul);
}

generateList_v1(arr1);



var arr2 = [1, 2, [3.1, 3.2, 3.3], 4];

function generateList_v2(array){
	var ul = document.createElement('ul');

	array.forEach(function(el){
		var li = document.createElement('li');

		if(!(el instanceof Array)){
			li.innerText = el;
		}else{
			li.append(generateList_v2(el));
		}
		ul.append(li);
	});
	return  ul;
}

document.body.append(generateList_v2(arr2)); 

