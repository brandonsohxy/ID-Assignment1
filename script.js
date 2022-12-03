const toggleButton = document.getElementById("toggle-button")
const naviList = document.getElementById("navi-list")

toggleButton.addEventListener('click', () =>{
  naviList.classList.toggle('active');

})

import Character from ".Character";

const mrkrabs = new Character(
  "Mr Krabs",
  "Crab",
  "Male",
  "Owner & Manager",
);

const squidward = new Character(
  "Squidward",
  "Giant Pacific Octopus",
  "Male",
  "Cashier"
);

const spongebob = new Character(
  "Spongebob",
  "Sea Sponge",
  "Male",
  "Fry cook"
)
