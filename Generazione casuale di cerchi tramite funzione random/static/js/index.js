let w=900
let h=450



function setup() {
  createCanvas(w, h);
  background(0, 255, 0)
  noStroke()
}

function draw() {  
  let x=random(w)
  let y=random(h)
  let d=random(30, 90)
  let r=random(0, 255)
  let g=random(0, 255)
  let b=random(0, 255)
  let alpha=random(0, 255)

  fill(r, g, b, alpha)
  circle(x, y, d)

  if(frameCount==1000) {
    setup()
    frameCount=0
  }

}
