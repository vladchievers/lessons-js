const data = [];



class CreateTask {
	constructor (id , text , bool){
		this.id = id;
		this.text = text;
		this.checkbox = bool;
	}

	init() {
		const ul = document.querySelector('ul');
		let idCount = 0;

		document.querySelector('.btn').addEventListener('click' , () =>{
			const value = document.querySelector('.input-text').value;

			const li = document.createElement('li');
			const span = document.createElement('span');
			span.innerHTML = value;
			const inp = document.createElement('input');
			inp.setAttribute("type", "checkbox");
			const remove = document.createElement('button');
			remove.classList.add('remove');


			li.setAttribute('id', idCount)
			if(ul.children === 'undefined'){
				idCount = 0;
			}

			li.appendChild(inp);
			li.appendChild(span);
			li.appendChild(remove);
			ul.appendChild(li);


			inp.addEventListener('onchange' , () =>{
				if(inp.hasAttribute("checked")){
					this.checkbox = true;
				}else{
					
				}
			});
			

			

			remove.addEventListener('click', function(){
				const id = this.parentElement.getAttribute('id')
				this.parentElement.remove();
				if(ul.children.length === 0){
					idCount = 0;
				};
				localStorage.removeItem('Task ' + id);
			});
			idCount++;
			this.id = idCount;
			this.text = value;
			this.checkbox = false;
			console.log(this)

		});
		
	}
}

new CreateTask().init();
console.log(new CreateTask)



