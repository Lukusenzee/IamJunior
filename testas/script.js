// 1 uzduotis

const heading = document.getElementById("heading");
const text = document.getElementById("text");
const box = document.getElementById("box");

heading.textContent = "Sveiki atvykę į Salūną :)";
text.innerHTML =
  "Kiek jums metų? <i class='small-text'>*Įleidžiame nuo 18metų.</i>";
box.className = "black-box";

document.getElementById("red-box").className = "red-box";

// 2 uzduotis (pasunkinta, nes prideda button)

const birthdayButton = document.getElementById("birthday-button");
const birthdaySection = document.getElementById("birthday-section");
const birthdayText = document.getElementById("birthday-text"); // elementas bus apkeistas

birthdayButton.addEventListener("click", function () {
  const birthdayCard = document.createElement("div");
  birthdayCard.className = "birthday-card";
  birthdayCard.textContent = "Su gimtadieniu sveikina draugai!";

  birthdaySection.replaceChild(birthdayCard, birthdayText); // sukeitimas
  //   birthdaySection.removeChild(birthdayButton);
  birthdayButton.remove();
  //   birthdayButton.className = "hide";
});
