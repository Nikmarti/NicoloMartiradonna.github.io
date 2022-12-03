function millisecondi() {
let ore=document.querySelector("[name=ore]");
let minuti=document.querySelector("[name=minuti]");

let numeroOre = parseInt(ore.value);
let numeroMinuti = parseInt(minuti.value);
let millisecondi =(numeroOre*60+numeroMinuti)*60*1000;

document.querySelector("#out").innerHTML= "I millisecondi sono "+millisecondi;
}