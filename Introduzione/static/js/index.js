let lista=[];
window.onload=function(){
document.getElementById("submit").addEventListener("click", 
function(event){
	event.preventDefault();
	
	let nome =document.getElementById("nome").value;
	let cognome =document.getElementById("cognome").value;
	let numero =document.getElementById("numero").value;
	let scelta =document.getElementById("scelta").value;

	let oggetto={
		numero:numero,
		nome:nome, 
		cognome:cognome,
		scelta:scelta
	};

	
	lista.push(oggetto)
	console.log(lista)
}

);
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
