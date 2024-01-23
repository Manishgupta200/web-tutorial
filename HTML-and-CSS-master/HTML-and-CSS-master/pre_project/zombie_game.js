const zombie = document.getElementById("zombie");
const bulbon = document.getElementById("bulbon");
const bulboff = document.getElementById("bulboff");
const bulb = document.getElementById("bulb");
const body = document.getElementById("body");

var status = "bulboff";
bulboff.onclick=()=>
{
    if (status == "bulboff") {
        body.style.backgroundColor = "white";
        zombie.style.visibility = "visible";
        bulbon.style.display = "block";
        bulboff.style.display = "none";
        status = "bulbon";
    }
    else
    {
        body.style.backgroundColor = "black";
        zombie.style.visibility = "hidden";
        bulbon.style.display = "none";
        bulboff.style.display = "block";
        status = "bulboff";
    }
}
