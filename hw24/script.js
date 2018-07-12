
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
		let remIndex = -1;
		console.log(id)
		let data =  this.data.todo.map(function(elem, index) {
			console.log("текущ " + id)
			console.log(elem.id)
			if(elem.id == id){
				remIndex = index;
			}
		})

		if ( remIndex > -1 ){
			this.data.todo.splice(remIndex, 1);
		}

		this.save();
	}

	newId() {
		return parseInt(new Date().getMilliseconds());
	}

	newTitle () {
		return document.querySelector('.input-text').value;
	}

	newTodo() {

		const obj = {
			id: this.newId(),
			title: this.newTitle(),
			check: false
		};

		this.save(obj);
		this.add(obj);
	}

	save(obj) {
		this.data.todo.push(obj);

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

		
			self.removeTodo(+id);

			this.parentElement.remove();
		});
	};

	
}

const task = new CreateTask();
task.init();

document.querySelector('.save').addEventListener('click' , () =>{
	
	task.newTodo();
	
})





