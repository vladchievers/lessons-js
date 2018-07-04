class Hamburger {
	constructor (size = {price: 0, col: 0} , stuffing = {price: 0, col: 0}){
		this.size = size;
		this.stuffing = stuffing;
		this.topping = {price: 0,col: 0};
	}

	static get SIZE_SMALL() {return {price: 50, col: 20};}
	static get SIZE_BIG() {return {price: 100, col: 40};}
	static get STUFFING_SALAT() {return {price: 20, col: 5};}
	static get STUFFING_CHEESE() {return {price: 10, col: 20};}
	static get STUFFING_POTATE() {return {price: 15, col: 10};}
	static get TOPPING_MAYO() {return {price: 20, col: 5};}
	static get TOPPING_SAUCE() {return {price: 15, col: 0};}

	calculatePrice () {
		return  this.size.price + this.stuffing.price + this.topping.price;	
	};

	calculateCalories () {
		return this.size.col + this.stuffing.col + this.topping.col;
	};

	addTopping (topping){
		this.topping.price += topping.price;
		this.topping.col +=  topping.col;
		return this.topping;
	};

	removeTopping (){
		this.topping.price = 0;
		this.topping.col =  0;
		return this.topping;
	};




	[Symbol.iterator]() {
		const keys = Object.keys(this);
		let index = 0;
		return{
			next() {
				if(index === keys.length){
					return {done: true};
				};

				return { 
					value: keys[index++],
					done: false 
				};

			}
		};
	};

};

const hamburger = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAT);

console.log("Price " + hamburger.calculatePrice());
console.log("Calories " + hamburger.calculateCalories());
hamburger.addTopping(Hamburger.TOPPING_SAUCE)
console.log("Price " + hamburger.calculatePrice())
hamburger.addTopping(Hamburger.TOPPING_MAYO)
console.log("Price with topping " + hamburger.calculatePrice());
console.log("Calories with topping " + hamburger.calculateCalories());
hamburger.removeTopping();
console.log("Price " + hamburger.calculatePrice());
console.log("Calories " + hamburger.calculateCalories());

console.log('=========')

for(let el of hamburger){
	console.log(el)
}


