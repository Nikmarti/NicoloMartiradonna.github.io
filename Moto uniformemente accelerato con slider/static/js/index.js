
//mettere l'accelerazione sull'asse y
//mettere l'input nel file html
//fare due input ovvero uno sull'asse x e uno su quello y
//mettere il quesryselctor per fare il collegamento "AXFIELD.addeventlistener"
let ax=-0.01 
let vx=0
let x=0
let d=50
let r=d/2
let w=400 //larghezza del canvas
let h=400 //altezza del canvas


function setup() {
  createCanvas(w, h);
  background(255, 255, 255);
}

function draw() {
  background(220);
  fill(255);
  circle(x, 200, 50);
  vx=vx+ax;
  x=x+vx;
  
  if(x>=425){
    x=-25; 
  }
  
  if(x<-25){
    x=425;
  }
}

let axInput = document.querySelector("[name=ax]"),
			vxInput = document.querySelector("[name=vx]")
    
axInput.addEventListener("input", function(e){ 
  ax = parseFloat(axInput.value)
  console.log(x + " " + vx + " " + ax)
})

vxInput.addEventListener("input", function(e){ 
  vx = parseFloat(vxInput.value)
  console.log(x + " " + vx + " " + ax)
})
