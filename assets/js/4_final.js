let color = "black";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "aqua";
    } else if (event.key === 's') {
        color = "salmon";
    } else if (event.key === 'd') {
        color = "darkcyan";
    }
});

let blueContainer = document.querySelector("#blue-container");
let greenContainer = document.querySelector("#green-container");
let redContainer = document.querySelector("#red-container");
let yellowContainer = document.querySelector("#yellow-container");

blueContainer.addEventListener("click", () => blueContainer.style.backgroundColor = color);
greenContainer.addEventListener("click", () => greenContainer.style.backgroundColor = color);
redContainer.addEventListener("click", () => redContainer.style.backgroundColor = color);
yellowContainer.addEventListener("click", () => yellowContainer.style.backgroundColor = color);