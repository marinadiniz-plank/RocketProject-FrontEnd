export function addRocket(event: React.FormEvent) {
	event.preventDefault();
  
	const createRocket = {
	  name: (document.getElementById('add-rocket-form-name') as HTMLInputElement).value
	};
  
	fetch('http://localhost:80/rocket', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(createRocket)
	})
	  .then(async response => {
		if (response.ok) {
		  // Lógica para atualizar o componente após a adição da rocket
		} else {
		  const data = await response.json();
		  alert(`Could not create rocket\n\n${data.message}`);
		}
	  })
	  .catch(error => alert(`Sorry, an error occurred:\n${error}`));
  }

export function updateRocket(event: React.FormEvent) {
	event.preventDefault();
  
	const createRocket = {
	  id: (document.getElementById("add-rocket-form-rocketCode") as HTMLInputElement).value,
	  name: (document.getElementById("add-rocket-form-date") as HTMLInputElement).value
	};
  
	fetch(`http://localhost:80/rocket/${id}`, {
	  method: 'PUT',
	  headers: {
		"Content-Type": "application/json",
	  },
	  body: JSON.stringify(createRocket),
	}).then(async response => {
	  if (response.ok) {
		// const rocketList = document.getElementById("rocket-table-body");
		// renderrocketList(rocketList);
		// updateRocketModal.style.display = "none";
	  } else {
		const data = await response.json();
		alert(`Could not update launch:\n\n${data.message}`);
	  }
	}).catch(error => alert('Sorry, an error occurred:\n' + error));
  }