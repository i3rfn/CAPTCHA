let Cbox = document.getElementById("Cbox");
let random = document.getElementById("random");
let vorodi = document.getElementById("vorodi");
let submit = document.getElementById("sabt");
let change = document.getElementById("change");
let notRobot = document.querySelector(".not_robot");
let dis = document.querySelector(".dis");

dis.style.display = "none";

Cbox.addEventListener("click", function () {
  dis.style.display = "block";
  notRobot.style.display = "none";
});
vorodi.addEventListener("focusin", function () {
  vorodi.style.backgroundColor = "#dde6ed";
  vorodi.style.color = "black";
});
vorodi.addEventListener("focusout", function () {
  vorodi.style.backgroundColor = "#27374D";
  vorodi.style.color = "white";
});

vorodi.addEventListener("click", function () {
  vorodi.setAttribute("placeholder", "");
});
vorodi.addEventListener("focusout", function () {
  vorodi.setAttribute("placeholder", "Enter the number below...");
});

random.innerHTML = `${Math.floor(Math.random() * 10000000)}`;

change.addEventListener("click", function () {
  random.innerHTML = `${Math.floor(Math.random() * 10000000)}`;
});

submit.addEventListener("click", function () {
  if (vorodi.value == random.innerHTML) {
    alert("You are human | You shall pass.");
    vorodi.value = "";
  } else {
    alert("You are a robot | Access  Denied.");
    vorodi.value = "";
  }
  random.innerHTML = `${Math.floor(Math.random() * 10000000)}`;
});
