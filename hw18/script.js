var cows = [
  {name: "Legolas", type: "calf", hadCalf: false},
  {name: "Gimli", type: "bull", hadCalf: false},
  {name: "Arwen", type: "cow", hadCalf: false},
  {name: "Galadriel", type: "cow", hadCalf: false},
  {name: "Eowyn", type: "cow", hadCalf: "Legolas"}
];


Object.prototype.noCalves = function(){
	if(this.type === "cow" && this.hadCalf === false){
		return true;
	}else{
		return false;
	}
}
console.log(cows[3].noCalves())


Array.prototype.countCows = function(){
	var count = 0;
	this.forEach(function(elem){
		if(elem.type === 'cow' && elem.hadCalf === false){
		 	return count++;
		};
	});
	return count;
};

console.log(cows.countCows());