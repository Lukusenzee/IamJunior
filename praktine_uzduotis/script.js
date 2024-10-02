

function myFunction(){
    var x = document.getElementById("navli");
    if (x.className === "navigate") {
      x.className += " responsive";
    } else {
      x.className = "navigate";
    }
}