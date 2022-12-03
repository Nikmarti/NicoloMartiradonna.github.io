function gradi() {
let gradiFahrenheit = document.querySelector("[name=gradi]");

let numeroGradi = parseInt(gradiFahrenheit.value);

let gradiCelsius = (numeroGradi - 32) * 5/9;

document.querySelector("#out").innerHTML = "Gradi Celsius "+gradiCelsius+"°C";
}