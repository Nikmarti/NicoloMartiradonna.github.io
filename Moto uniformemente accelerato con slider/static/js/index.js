let w=400 //larghezza del canvas
let h=400 //altezza del canvas
let ax=-0.01 
let vx=0
let x=0
let ay=-0.01 
let vy=0
let y=h/2
let d=50




function setup() {
  createCanvas(w, h);
  background(255, 255, 255);
}

function draw() {
  background(220);
  fill(255);
  circle(x, y, d);
  vx=vx+ax;
  x=x+vx;
  
  if(x>=w+(d/2)){
    x=-d/2; 
  }
  
  if(x<-d/2){
    x=w+(d/2);
  }

  vy=vy+ay;
  y=y+vy;
  
  if(y>=h+(d/2)){
    y=-d/2; 
  }
  
  if(y<-d/2){
    y=h+(d/2);
  }


}

let axInput = document.querySelector("[name=ax]"),
			vxInput = document.querySelector("[name=vx]"),
      ayInput = document.querySelector("[name=ay]"),
      vyInput = document.querySelector("[name=vy]")
    
  axInput.addEventListener("input", function(e){ 
  ax = parseFloat(axInput.value)
  console.log(x + " " + vx + " " + ax)
})

  vxInput.addEventListener("input", function(e){ 
  vx = parseFloat(vxInput.value)
  console.log(x + " " + vx + " " + ax)
})

ayInput.addEventListener("input", function(e){ 
  ay = parseFloat(ayInput.value)
  console.log(y + " " + vy + " " + ay)
})

  vyInput.addEventListener("input", function(e){ 
  vy = parseFloat(vyInput.value)
  console.log(y + " " + vy + " " + ay)
})


