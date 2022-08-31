/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

fetch("./cars.json")
  .then((response) => response.json())
  .then((data) => {
    renderCars(data);
  });

function renderCars(cars) {
  cars.forEach((car) => {
    const out = document.getElementById("output");
    const card = document.createElement("div");
    const carBrand = document.createElement("h3");
    const brandModels = document.createElement("div");
    card.id = "brandCard";
    brandModels.id = "models";
    carBrand.textContent = car.brand;
    brandModels.textContent = car.models.join(", ");
    out.append(card);
    card.append(carBrand, brandModels);
  });
}
