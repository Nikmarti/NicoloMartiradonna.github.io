let w=900
let h=450
let c=0
let delta=1




function setup() {
    createCanvas(w, h)
}



function draw() {
    background(0, 255, 0)
    noStroke()
    

    c=c+delta
    circle(c, h/2,60)


    if(c===w) {
        delta=-delta
    }
    if(c===0) {
        delta=-delta
    }

}

