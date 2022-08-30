/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", calculate);
function calculate(event) {
  event.preventDefault();
  document.getElementById("output").innerHTML = "";
  const weight = document.querySelector("input").value;
  const weightList = document.createElement("ul");
  const lb = document.createElement("li");
  const gram = document.createElement("li");
  const oz = document.createElement("li");
  lb.textContent = `Svoris svarais (lb) = ${weight * 2.2046}`;
  gram.textContent = `Svoris gramais (g) = ${weight / 0.001}`;
  oz.textContent = `Svoris uncijomis (oz) = ${weight * 35.274}`;
  weightList.append(lb, gram, oz);
  document.getElementById("output").append(weightList);
}
