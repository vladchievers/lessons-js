function warning(event){
	return function(street){
		var res = event + " на " + street
		return res;
	};
};
console.log(warning('ololo')('kokoko'));
var ololo = warning('Ремонт дороги');
console.log(ololo('Канатная 22')); 
console.log(ololo('Пушкинская 22')); 

var kokoko = warning('Авария');
console.log(kokoko('Успенская 10')); 
console.log(kokoko('Гайдара 12')); 



//------------------v_1---------------

// function currentNum(){
// 	var curNum = 0;
// 	return function(num){
// 		return curNum += num;
// 	} 
// }

// var sum = currentNum();

// console.log(sum(4));
// console.log(sum(3));
// console.log(sum(3));
// console.log(sum(4));
// console.log(sum(10));


//---------------v_2-------------

function currentNum(){
	var curNum = 0;
	return {
		plus: function(num){
			return curNum += num; 
		},
		delete: function(){
			return curNum = 0;
		}
	}

};

var sum = currentNum();

console.log(sum.plus(1));
console.log(sum.plus(5));
console.log(sum.plus(4));
console.log(sum.delete());
console.log(sum.plus(5))
console.log(sum.plus(10))
