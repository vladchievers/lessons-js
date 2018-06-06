Hamburger.SIZE_SMALL = {price: 50, col: 20};
Hamburger.SIZE_BIG = {price: 100, col: 40};
Hamburger.STUFFING_CHEESE = {price: 10, col: 20};
Hamburger.STUFFING_SALAT = {price: 20, col: 5};
Hamburger.STUFFING_POTATE = {price: 15, col: 10};
Hamburger.TOPPING_MAYO = {price: 20, col: 5};
Hamburger.TOPPING_SAUCE = {price: 15, col: 0};



function Hamburger (size , stuffing) {
	this._topping = {
		price: 0,
		col: 0
	};

	this.addTopping = function(topping){
		this._topping.price += topping.price;
		this._topping.col +=  topping.col;
		return this._topping;
	};

	this.removeTopping = function(){
		this._topping.price = 0;
		this._topping.col =  0;
		return this._topping;
	};

	this.calculatePrice = function() {
		return  size.price + stuffing.price + this._topping.price;	
	};

	this.calculateCalories = function() {
		return size.col + stuffing.col + this._topping.col;
	};
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_POTATE);

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


