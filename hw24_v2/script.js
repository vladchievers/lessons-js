const data = {
	todo: []
};
console.log(data)
const dataString = JSON.stringify(data);




class TodoList{
	constructor (){
		this.data = {
			todo: []
		};

		// this.data = JSON.parse(localStorage.getItem('todoLsit'));
		
	}
	init () {
		const obj = {
			title: '',
			checkbox: false
		};
		let count = this.data.todo.length;
		console.log(count)
		console.log(this.data)

		const ul = document.querySelector('ul');

		const value = document.querySelector('input').value;

		const li = document.createElement('li');
		li.id = count;

		console.log(count)

		const title = document.createElement('span');
		title.innerHTML = value;
		obj.title = title.innerHTML;

		const checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');

		checkbox.addEventListener('click', function() {
			if(checkbox.checked){
				this.data.todo[this.parentElement.id].checkbox = true;
			}else{
				this.data.todo[this.parentElement.id].checkbox = false;
			}
			this.save();
		});


		const remove = document.createElement('button');

		this.data.todo.push(obj);
		console.log(this.data)

		li.appendChild(checkbox);
		li.appendChild(title);
		li.appendChild(remove);
		ul.appendChild(li);

		remove.addEventListener('click' , function () {
			this.parentElement.remove();
			this.data.todo.splice(this.parentElement.id , 1);
			this.save();
		})	
		
		this.save();
	}

	save() {
		localStorage.setItem('todoLsit' , JSON.stringify(this.data) );
	}
}



// localStorage.setItem('todoLsit', dataString)



const save = document.querySelector(".save");

save.addEventListener('click' , () => {
	new TodoList().init();
});