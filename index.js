let w=900
let h=450
let delta=1

let x = prompt("Inserisci il primo valore")
x=parseFloat(x)

let y = prompt("Inserisci il secondo valore")
y=parseFloat(y)

let d = prompt("Inserisci il valore del diametro: ")
d=parseFloat(d)


function setup() {
    createCanvas(w, h)
}


//d*2 è la dimensione del fiore

function draw() {
    background(0, 255, 0)
    noStroke()
    

    let dimFiore = d*2
    let posY,posX

    // Finché posY è minore dell'altezza più la dimensione del fiore, disegno un fiore e incremento posY della dimensione del fiore
    posY = y
    while(posY < h + dimFiore) {
        // Finché posX è minore della larghezza più la dimensione del fiore, disegno un fiore e incremento posX della dimensione del fiore
        posX = x
        while(posX < w + dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX + dimFiore
        }
        // Finché posX è maggiore di 0 meno la dimensione del fiore, disegno un fiore e decremento posX della dimensione del fiore
        posX = x - dimFiore
        while(posX > 0 - dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX - dimFiore
        }
        posY = posY + dimFiore
    }

    // Finché posY è maggiore di 0 meno la dimensione del fiore, disegno un fiore e decremento posY della dimensione del fiore
    posY = y - dimFiore
    while(posY > 0 - dimFiore) {
        // Finché posX è minore della larghezza più la dimensione del fiore, disegno un fiore e incremento posX della dimensione del fiore
        posX = x
        while(posX < w + dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX + dimFiore
        }
        // Finché posX è maggiore di 0 meno la dimensione del fiore, disegno un fiore e decremento posX della dimensione del fiore
        posX = x - dimFiore
        while(posX > 0 - dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX - dimFiore
        }
        posY = posY - dimFiore
    }
    







    //drawFlower(x, y, d)
    //drawFlower(x+d*2, y, d)
    //drawFlower(x, y+d*2, d)
}


function drawFlower(x, y, d) {
    let r = d/2
    fill(255, 165, 0)
    circle(x-r, y-r, d)

    circle(x+r, y-r, d)

    circle(x-r, y+r, d)

    circle(x+r, y+r, d)

    fill(255, 0, 0)
    circle(x, y, d)


    if(x===w) {
        delta=-delta
    }
    if(x===0) {
        delta=-delta
    } 

}

