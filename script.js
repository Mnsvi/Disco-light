let hero = document.querySelector(".hero");
let box = document.querySelector(".box");

//  ------------------------------------------------------
//method 1
// function getRandomRGBColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r}, ${g}, ${b})`;
// }

// box.addEventListener("click", ()=>{
//     hero.style.backgroundColor = getRandomRGBColor();
// })

//  ------------------------------------------------------

// method 2
// let color = ["red", "blue", "green", "yellow", "red", "grey", "pink", "purple"];
// box.addEventListener("click", ()=>{
    // // math.random() takes value from 0 <= value < 1
    // // therefore we use math.floor() to avoid decimal indices 
//     let index = Math.floor(Math.random() * color.length);
//     hero.style.backgroundColor = color[index];
// })

//  ------------------------------------------------------

//change color after 2 sec
setInterval(() => {
    let color = ["red", "blue", "green", "yellow", "red", "grey", "pink", "purple", "orange", "violet", "maroon", "black", "teal"];
    let index = Math.floor(Math.random() * color.length);
    hero.style.backgroundColor = color[index];
}, 100);