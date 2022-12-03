let ampiezza = 50
		let frequenza = 2
		let fase = 0
		let angle = 0 
		let increment = 0.005

		function setup() 
		{
		  createCanvas(900, 400);
		  background(220);
		  line(0,200,900,200)
		}

		function draw() 
		{
		  let x = map(angle,0,2*PI,0,400)
		  let ysin = ampiezza*sin(2*PI*frequenza*angle+fase)
      let ycos = ampiezza*cos(2*PI*frequenza*angle+fase)
		  stroke(0,0,255)
		  strokeWeight(3)
		  point(x,ysin+200)
		  stroke(255,0,0)
      point(x,ycos+200)
		  angle += increment
		  if(x >= 400){
		  	background(220)
		  	strokeWeight(1)
		  	stroke(0)
		  	line(0,200,400,200)
		  	angle = 0
		  }
		}

		let amplitudeInput = document.querySelector("[name=ampiezza]"),
			frequencyInput = document.querySelector("[name=frequenza"),
			phaseInput = document.querySelector("[name=fase")

		console.log(amplitudeInput.value)

    amplitudeInput.addEventListener("input", function(e){ 
			ampiezza = parseInt(amplitudeInput.value)
			console.log(`amplitude changed -> ${amplitudeInput.value}`)
		})

    frequencyInput.addEventListener("input", function(e){ 
			frequenza = parseInt(frequencyInput.value)
			console.log(`amplitude changed -> ${frequencyInput.value}`)
		})

    phaseInput.addEventListener("input", function(e){ 
			fase = parseInt(phaseInput.value)
			console.log(`amplitude changed -> ${phaseInput.value}`)
		})