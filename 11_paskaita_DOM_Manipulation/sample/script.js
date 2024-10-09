const pNameElement = document.getElementById("name");
const nameElementByQuerySelector = document.querySelector("#name");
const allListItem = document.querySelectorAll(".list-item");
// pNameElement.textContent = "Mano vardas Jonas";
const randomDiv = document.getElementById("random");
 randomDiv.innerHTML = "Kaip <strong> Kaip sekasi </strong>";


const changeNameButton = document.getElementById("change-name");
console.log(changeNameButton);

changeNameButton.addEventListener("click", function(){
    pNameElement.textContent = "Mano vardas Jonas";
})


const nightButton = document.getElementById("night");
const background = document.getElementById("night-mode");
console.log(background);

nightButton.addEventListener("click", function(){
    background.style.backgroundColor = "#e7a94f";
    background.style.width= "50%";
    

})



const addAnimal = document.getElementById("add-animal");
const animalList = document.getElementById("animall");
addAnimal.addEventListener("click", function(){
    const newListItem = document.createElement("li");
    newListItem.textContent ="Asiliukas";
    animalList.appendChild(newListItem);
})

