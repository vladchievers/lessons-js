
class CreateTask {
	constructor (){
		let data = localStorage.getItem("todo");
	
		this.data = JSON.parse(data) ||{ todo : [] };
	}

	init(){
		this.data.todo.forEach((elem) =>{
			this.add(elem);
		});
	}

	removeTodo(id) {		
		const ind = this.data.todo.findIndex(item => item.id == id);
		
		this.data.todo.splice(ind, 1);

		this.save();
	}

	checked(id) {
		const ind = this.data.todo.findIndex(item => item.id == id);
		
		this.data.todo[ind].check = true;
		
		this.save();
	}
	unchecked(id) {
		const ind = this.data.todo.findIndex(item => item.id == id);
		
		this.data.todo[ind].check = false;
		
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

		this.save(obj);
		this.add(obj);
	}

	save(obj) {
		obj && this.data.todo.push(obj);
			
		localStorage.setItem("todo", JSON.stringify(this.data));
	}

	add(obj){
		if(!obj){return}

		const ul = document.querySelector('ul');

		const li = document.createElement('li');
		li.dataset.id = obj.id;

		const title = document.createElement('span');
		title.innerHTML = obj.title;
		document.querySelector('.input-text').value = "";
		

		const checkbox = document.createElement('input');
		checkbox.setAttribute("type", "checkbox");

		obj.check && checkbox.setAttribute('checked' , 'checked');
		

		const remove = document.createElement('button');
		remove.classList.add('remove');

		const checkmark = document.createElement('span');
		checkmark.classList.add('checkmark');

		li.appendChild(checkbox);
		li.appendChild(title);
		li.appendChild(remove);
		li.appendChild(checkmark);
		ul.appendChild(li);

		const self = this;
		

		checkbox.addEventListener('click' , function() {
			const id = this.parentElement.dataset.id;
			if(this.getAttribute('checked')){
				this.removeAttribute('checked');
				self.unchecked(id);
			}else{
				this.setAttribute('checked' , 'checked');
				self.checked(id);
			};
			
		});

		

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
	document.querySelector('.input-text').value ? task.newTodo() : alert('Enter the task')
	
	
})





