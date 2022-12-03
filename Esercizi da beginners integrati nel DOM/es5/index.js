
    function ore() {
    let x=document.querySelector("[name=x]");
    let m=document.querySelector("[name=m]");

    let xValore = parseInt(x.value);

    let y;
    let c=24-xValore;
    
    y=xValore-6;
    let ny=(xValore+c+y)%24;

    y=xValore+7;
    let tk=(xValore+c+y)%24;

    y=xValore+1;
    let mo=(xValore+c+y)%24;


    document.querySelector("#outNY").innerHTML=("New York "+ny+"."+m.value);
    document.querySelector("#outTK").innerHTML=("Tokyo "+tk+"."+m.value);
    document.querySelector("#outMO").innerHTML=("Mosca "+mo+"."+m.value);
}