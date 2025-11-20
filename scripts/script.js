// JavaScript Document
console.log("hi");
// hamburger menu hulp van ella met de code// 

const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

const openBtn = document.getElementById("MenuOpen");
const closeBtn = document.getElementById("MenuSluiten");

// Menu openen

openBtn.addEventListener("click", () => {
   menu.hidden = false;
   nav.classList.add("open")
   })

// Menu sluiten

closeBtn.addEventListener("click", () => {
   nav.classList.remove("open")
     // Wacht tot de animatie klaar is voordat hidden terug wordt gezet
        setTimeout(() => {
            menu.hidden = true;
        }, 300)
    })

 