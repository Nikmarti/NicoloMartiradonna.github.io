let w=900
let h=450
let c=0
let vx
let vy
let x
let y
let d=60
let r=d/2




function setup() {
    x=400
    y=400
    d=60

    vx=-2
    vy=1
    createCanvas(w, h)
}



function draw() {
    background(0, 255, 0)
    noStroke()


    x=x+vx
    y=y+vy
   
    if(x<0) {
      vx=-1*vx
    }
    if(x>400) {
      vx=-1*vx
    }
    if(y<0) {
      vy=-1*vy
    }
    if(y>400) {
      vy=-1*vy
    }

    
    fill(255, 0, 0)    
    circle(x-r+c, y-r+c, d)
 
    fill(255, 0, 0)    
    circle(x+r+c, y-r+c, d)
 
    fill(255, 0, 0)    
    circle(x-r+c, y+r+c, d)
 
    fill(255, 0, 0)    
    circle(x+r, y+r+c, d)
     
    fill(0, 0, 255)
    circle(x+c, y, d)
 
}

