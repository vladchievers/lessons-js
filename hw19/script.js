function Hamburger (size , stuffing) {
	
	var Hamburger = {
		SIZE_SMALL : {
			price: 50, 
			col: 10
		}

	}
	console.log(Hamburger.SIZE_SMALL)
	

	this.calculatePrice = function(){
		return size.price;
	}
}

var hamburger = new Hamburger(Hamburger.SIZE_SMALL , Hamburger.STUFFING_CHEESE);
console.log(hamburger)
console.log(hamburger.calculatePrice())