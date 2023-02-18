
function decimalebinario(n){
    if(n===0){
        return "Inserire numero diverso da 0";
    }
    else if(n===1){
        return "1";
    }
    else{
        return decimalebinario((n-(n%2))/2)+(n%2);
    }
}
let dec=parseInt(prompt("Inserisci un numero decimale: "));
let bin=decimalebinario(dec)
console.log(bin);

