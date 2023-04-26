let lista=[];

function aggiungiIndividuo(event){
	event.preventDefault();
	let nome=document.getElementById("nome").value

	let cognome=document.getElementById("cognome").value

	let numero=document.getElementById("numero").value

	let scelta=document.getElementById("scelta").value

	let individuo = {
		nome:nome,
		cognome: cognome,
		numero:numero,
		scelta:scelta
	};

	lista.push(individuo);
	console.log(lista);
}


function stampa(){
	for(let i=0; i<lista.length; i++){
		let l=lista[i]
		console.log("Nome: " +l.nome)
		console.log("Cognome: " +l.cognome)
		console.log("Numero: " +l.numero)
		console.log("Sesso: " +l.scelta)
		console.log("       ")
	}
}
