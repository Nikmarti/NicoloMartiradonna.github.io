function voti() {
    let voto= document.querySelector("[name=voto]");
    voto.value=parseFloat(voto.value);

    if(voto.value<6){
         document.querySelector("#out").innerHTML="Il voto è insufficiente";
    }
    else if(voto.value>=6 && voto.value<=6.9){
         document.querySelector("#out").innerHTML="Il voto è sufficiente";
    }
    else if(voto.value>=7 && voto.value<=7.9){
         document.querySelector("#out").innerHTML="Il voto è discreto";
    }
    else if(voto.value>=8)
    {
         document.querySelector("#out").innerHTML="Il voto è buono";
    }
}
