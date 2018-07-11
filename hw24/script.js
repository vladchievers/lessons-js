
class CreateTask {
	constructor (){
		this.data = [];
		this.obj = {
			title: '',
			check: false
		};
		this.count = this.data.length;
	}

	init() {
		const ul = document.querySelector('ul');

		

		console.log(this.data)
		console.log(this.count)

		
		const value = document.querySelector('.input-text').value;

		const li = document.createElement('li');
		li.dataset.id = this.count;

		const title = document.createElement('span');
		title.innerHTML = value;
		this.obj.title = value;

		const checkbox = document.createElement('input');
		checkbox.setAttribute("type", "checkbox");

		const remove = document.createElement('button');
		remove.classList.add('remove');



		li.appendChild(checkbox);
		li.appendChild(title);
		li.appendChild(remove);
		ul.appendChild(li);



		localStorage.setItem("todo", this.data);

		checkbox.addEventListener('click' , () =>{
			return (checkbox.checked) ? this.obj.check = true : this.obj.check = false;

			localStorage.setItem("todo", this.data);
		});

		this.data.push(this.obj)

		remove.addEventListener('click', function(){
			this.parentElement.remove();
			localStorage.setItem("todo", this.data);
		});
	};

}

document.querySelector('.save').addEventListener('click' , () =>{
	new CreateTask().init();
	console.log(new CreateTask())
})





