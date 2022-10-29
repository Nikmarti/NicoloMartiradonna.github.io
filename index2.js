let w=900
let h=450
let c=0
let delta=1

let x=0
let y=240
let d=60
let r=d/2




function setup() {
    createCanvas(w, h)
}



function draw() {
    background(0, 255, 0)
    noStroke()
    

   c=c+delta
   
   fill(255, 0, 0)    
   circle(x+r+c, y+r, d)

   fill(255, 0, 0)    
   circle(x+r+c, y-r, d)

   fill(255, 0, 0)    
   circle(x-r+c, y+r, d)

   fill(255, 0, 0)    
   circle(x-r+c, y-r, d)
    
   fill(0, 0, 255)
   circle(x+c, y, d)

  if(c===w) {
    delta=-delta
  }
  if(c===0) {
    delta=-delta
  }
  
}

