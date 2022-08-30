/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
      console.log(data);
    });
  function renderUsers(users) {
    const otpt = document.getElementById("output");
    otpt.innerHTML = "";
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "card";
      const userLogin = document.createElement("div");
      const userAvatar = document.createElement("img");
      userLogin.textContent = user.login;
      userAvatar.src = user.avatar_url;
      card.append(userLogin, userAvatar);
      otpt.append(card);
    });
  }
});
