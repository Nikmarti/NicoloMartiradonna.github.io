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




function draw() {
    background(0, 255, 0)
    noStroke()
    

    let dimFiore = d*2
    let posY,posX

   
    posY = y
    while(posY < h + dimFiore) {
        
        posX = x
        while(posX < w + dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX + dimFiore
        }
        
        posX = x - dimFiore
        while(posX > 0 - dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX - dimFiore
        }
        posY = posY + dimFiore
    }

   
    posY = y - dimFiore
    while(posY > 0 - dimFiore) {
        
        posX = x
        while(posX < w + dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX + dimFiore
        }
        posX = x - dimFiore
        while(posX > 0 - dimFiore) {
            drawFlower(posX, posY, d)
            posX = posX - dimFiore
        }
        posY = posY - dimFiore
    }
    







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


}

