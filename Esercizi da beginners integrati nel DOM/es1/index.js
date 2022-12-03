function calcolaremese()
{
    let mese = document.querySelector("[name=mese]");
    if(mese.value=="gennaio")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="febbraio")
    {
        document.querySelector("#out").innerHTML = "Ha 28 giorni"
    }
    else if(mese.value=="marzo")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="aprile")
    {
        document.querySelector("#out").innerHTML = "Ha 30 giorni"
    }
    else if(mese.value=="maggio")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="giugno")
    {
        document.querySelector("#out").innerHTML = "Ha 30 giorni"
    }
    else if(mese.value=="luglio")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="agosto")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="settembre")
    {
        document.querySelector("#out").innerHTML = "Ha 30 giorni"
    }
    else if(mese.value=="ottobre")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
    else if(mese.value=="novembre")
    {
        document.querySelector("#out").innerHTML = "Ha 30 giorni"
    }
    else if(mese.value=="dicembre")
    {
        document.querySelector("#out").innerHTML = "Ha 31 giorni"
    }
}