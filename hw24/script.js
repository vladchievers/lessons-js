
class CreateTask {
	constructor (){
		let data = localStorage.getItem("todo");
	
		this.data = JSON.parse(data) ||{
			todo : [] 
		};
	}

	init(){
		this.data.todo.forEach((elem) =>{
			this.add(elem);
		});
	}

	removeTodo(id) {
		console.log(id);
		const ind = this.data.todo.findIndex(item => item.id == id);
		console.log(ind);
		this.data.todo.splice(ind, 1);

		this.save();
	}

	newTitle () {
		return document.querySelector('.input-text').value;
	}

	newTodo() {

		const obj = {
			id: this.data.todo.length,
			title: this.newTitle(),
			check: false
		};

		console.log(obj)

		this.save(obj);
		this.add(obj);
	}

	save(obj) {
		if (obj) {
			this.data.todo.push(obj);
		}
		

		localStorage.setItem("todo", JSON.stringify(this.data));
	}

	add(obj){
		if(!obj){return}

		const ul = document.querySelector('ul');

		const li = document.createElement('li');
		li.dataset.id = obj.id;

		const title = document.createElement('span');
		title.innerHTML = obj.title;
		

		const checkbox = document.createElement('input');
		checkbox.setAttribute("type", "checkbox");

		obj.check && checkbox.setAttribute('checked');
		

		const remove = document.createElement('button');
		remove.classList.add('remove');



		li.appendChild(checkbox);
		li.appendChild(title);
		li.appendChild(remove);
		ul.appendChild(li);


		

		checkbox.addEventListener('click' , function() {
			console.log('1')
		});

		const self = this;

		remove.addEventListener('click', function(){

			const id = this.parentElement.dataset.id; 

		
			self.removeTodo(id);

			this.parentElement.remove();
		});
	};

	
}

const task = new CreateTask();
task.init();

document.querySelector('.save').addEventListener('click' , () =>{
	
	task.newTodo();
	
})





