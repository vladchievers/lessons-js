Hamburger.SIZE_SMALL = {price: 50, col: 20};
Hamburger.SIZE_BIG = {price: 100, col: 40};
Hamburger.STUFFING_CHEESE = {price: 10, col: 20};
Hamburger.STUFFING_SALAT = {price: 20, col: 5};
Hamburger.STUFFING_POTATE = {price: 15, col: 10};
Hamburger.TOPPING_MAYO = {price: 20, col: 5};
Hamburger.TOPPING_SAUCE = {price: 15, col: 0};



function Hamburger (size , stuffing) {
	this._size = size;
	this._stuffing = stuffing;
	this._topping = {
		price: 0,
		col: 0
	};
};

Hamburger.prototype.calculatePrice = function() {
	return  this._size.price + this._stuffing.price + this._topping.price;	
};

Hamburger.prototype.calculateCalories = function() {
	return this._size.col + this._stuffing.col + this._topping.col;
};
Hamburger.prototype.addTopping = function(topping){
	this._topping.price += topping.price;
	this._topping.col +=  topping.col;
	return this._topping;
};
Hamburger.prototype.removeTopping = function(){
	this._topping.price = 0;
	this._topping.col =  0;
	return this._topping;
};

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


