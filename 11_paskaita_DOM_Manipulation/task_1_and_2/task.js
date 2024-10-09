const paragra = document.getElementById("paragraph");
const frameDiv = document.getElementById("frame");
const header = document.getElementById("header")

paragra.textContent="Pakeičiamas tekstas";
frameDiv.style.color= "blue";
header.innerHTML = "<strong> Pakeistas header tekstas</strong>";
header.style.fontSize = "26px";



const area = document.getElementById("changing-section");
const changeButton = document.getElementById("button");
const text = document.getElementById("text");




changeButton.addEventListener("click",function(){
        const newDiv =document.createElement("div");
        newDiv.className ="nd-section";
        newDiv.textContent= "Naujas tekstas po pakeitimo";
        newDiv.style.backgroundColor="lightblue";
        
     
        area.replaceChild(newDiv, text);
    
        changeButton.remove()})
   





