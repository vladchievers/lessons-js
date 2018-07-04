class Student {
	constructor(firstname, lastname, born, rating){
		this.firstname = firstname;
		this.lastname = lastname;
		this.born = born;
		this.rating = rating;
		this.visits = [];	
	};

	age ()  {
		const date = new Date();
		return  date.getFullYear() - this.born;
	};

	score() {
		const score = this.rating.reduce((prev, el) => {
			prev += el;
			return prev;
		}, 0);

		return score / this.rating.length;
	};

	present() {
		this.visits.length < 25 && this.visits.push(true);
	};

	absent() {
		this.visits.length < 25 && this.visits.push(false);
	};

	summary() {
		const score = this.score();

		const countVisits = this.visits.reduce((prev, el) => {
			el === true && prev++;
			return prev;
		}, 0)

		const summaryVisits =  countVisits / this.visits.length ;

		if(score >= 90 && summaryVisits >= 0.9){
			return "Молодчинка!";
		}else if(score < 90 && summaryVisits >= 0.9 || score >= 90 && summaryVisits < 0.9 ){
			return "Норм, но можно лучше";
		}else if(score < 90 && summaryVisits < 0.9){
			return "Редиска";
		}
	};
}



const Ivanov = new Student('Ivan' , 'Ivanov' , 1994 , [90, 100, 50, 50, 80]);

console.log(Ivanov.age())
console.log(Ivanov.score())

Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.absent()
Ivanov.present()
Ivanov.absent()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()
Ivanov.present()


console.log(Ivanov.summary())


console.log('--------------------------------')

const Petrov = new Student('Petr' , 'Petrov' , 1985 , [90, 100, 50, 50, 80, 90, 69, 46, 99, 100]);


console.log(Petrov.age())
console.log(Petrov.score())

Petrov.present()
Petrov.absent()
Petrov.present()
Petrov.present()
Petrov.absent()
Petrov.present()
Petrov.present()
Petrov.absent()
Petrov.present()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()
Petrov.absent()



console.log(Petrov.summary())
