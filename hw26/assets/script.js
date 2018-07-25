function createLi (data) {
	let arr = data.results;

	let li = arr.reduce((prev , el) => {
		return prev += `<li>
							<h3>${el.name}</h3>
							<p>mass: ${el.mass}</p>
							<p>height: ${el.height}</p>
							<p>sex: ${el.gender}</p>
						</li>`
	},'');
	
	return li;
};

function createUl (li) {

	let ul = `<ul>${li}</ul>`
	
	return ul;
};

function addHTML (ul) {
	document.querySelector('.wrapper').innerHTML = ul;
	document.querySelector('.loader').style.display = 'none';
	document.body.classList.add('bg');
	document.querySelector('.btn-add').classList.add('after');
};



document.querySelector('.btn-add').addEventListener('click' , () => {
	document.querySelector('.loader').style.display = 'block';

	fetch('https://swapi.co/api/people')
		.then(data => data.json())
		.then(createLi)
		.then(createUl)
		.then(addHTML)
		.catch(console.error);
});


