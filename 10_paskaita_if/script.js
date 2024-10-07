function riskCalc(age=18, bmi=25, smokes=false) {
    // debugger;
 
    return (age<30&& bmi<25&& smokes==false)?
    alert("small risk"):((age >= 30 && age <= 50) && (bmi >= 25 && bmi < 30) && !smokes)?
    alert("average risk"):((age > 50 || bmi >= 30 || smokes) && !(age > 50 && bmi >= 30 && smokes))?
    alert("high risk"):(age > 50 && bmi >= 30 && smokes)?
    alert("Extremely high risk"): alert("This option is not overseen") ;
      
}

 
riskCalc(51, 30, true);


let age = prompt("Enter age", 18);
// let daysLived= 89;
let citizenship = confirm("Confirm if you have countries citizenship",);
// let age =17;
// (age>=18 && citizenship)? alert("this citizen is able to vote"):alert("this citizen is unablee to vote")

let livedLonger30days=confirm("Confirm if you lived long in this country than 30 days");
(age>=18&& livedLonger30days && citizenship)?
 console.log("This citizen is able to vote"): (age>=18&& livedLonger30days && !citizenship)
 ? console.log("This person does not have citizen ship"): console.log("this person either doesnt have required age or havent lived long enough in this country") ;

