let celleOccupate=0
let fine=false


let links = document.querySelectorAll(".gridBtn"),
			currentPlayer = 1,
    cellIsOccupied = true

	let td = document.querySelector(".risultato")
	let d = document.querySelector(".pulsante")

		d.addEventListener("click", function(e){
			e.preventDefault()
			td.innerHTML=``
			for(let i=0; i<links.length; i++){
				links[i].classList.remove("player1", "player2")
			}
			celleOccupate=0
			currentPlayer = 1
    		cellIsOccupied = true
			fine=false
		})

		for(let i = 0; i < links.length; i++){
			let link = links[i]
			link.addEventListener("click", function(e){
				e.preventDefault()
        cellIsOccupied = e.currentTarget.classList.contains("player2") || e.currentTarget.classList.contains("player1")	;			
        
        console.log(cellIsOccupied)

		if(!cellIsOccupied && !fine){
		celleOccupate++;
		

        e.currentTarget.classList.toggle(`player${currentPlayer}`)//è LA STRINGA PLAYER E IL DOLALRO CONCATENA CON IL VALORE PLAYER ovvero player 1 e player 2
		if((links[0].classList.contains(`player${currentPlayer}`) && links[1].classList.contains(`player${currentPlayer}`) && links[2].classList.contains(`player${currentPlayer}`))||
		(links[3].classList.contains(`player${currentPlayer}`) && links[4].classList.contains(`player${currentPlayer}`) && links[5].classList.contains(`player${currentPlayer}`))||
		(links[6].classList.contains(`player${currentPlayer}`) && links[7].classList.contains(`player${currentPlayer}`) && links[8].classList.contains(`player${currentPlayer}`))||
		(links[0].classList.contains(`player${currentPlayer}`) && links[3].classList.contains(`player${currentPlayer}`) && links[6].classList.contains(`player${currentPlayer}`))||
		(links[1].classList.contains(`player${currentPlayer}`) && links[4].classList.contains(`player${currentPlayer}`) && links[7].classList.contains(`player${currentPlayer}`))||
		(links[2].classList.contains(`player${currentPlayer}`) && links[5].classList.contains(`player${currentPlayer}`) && links[8].classList.contains(`player${currentPlayer}`))||
		(links[0].classList.contains(`player${currentPlayer}`) && links[4].classList.contains(`player${currentPlayer}`) && links[8].classList.contains(`player${currentPlayer}`))||
		(links[2].classList.contains(`player${currentPlayer}`) && links[4].classList.contains(`player${currentPlayer}`) && links[6].classList.contains(`player${currentPlayer}`))){
			console.log(`player${currentPlayer} Ha vinto`)
			if(currentPlayer==1){
			td.style.color="blue"
			}else{
				td.style.color="red"
			}

			td.innerHTML=`player${currentPlayer} Ha vinto`
			fine=true
		}
		else {
			if(celleOccupate==9){
				td.style.color="brown"
				console.log("Nessuno ha vinto");
				td.innerHTML=`Nessuno ha vinto`
				fine=true
			}
		}

	
	
		currentPlayer = currentPlayer === 1 ? 2 : 1
        }
			})
		}

		