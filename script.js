
const calculator = document.querySelector(".calculator")
const screen = document.querySelector(".screen")
const number = document.querySelector(".number")
const countings = document.querySelectorAll(".counting")
const equal = document.querySelector("#equal")
const ac = document.querySelector("#ac")
const arrow = document.querySelector("#arrow")

countings.forEach((but) => {
    but.addEventListener("click", () => {
        screen.value += but.innerText;
    })
});

equal.addEventListener("click", () => {   // eval means string to string nhi manta hai number manta hai 
    screen.value = eval(screen.value);
});

ac.addEventListener("click", () => {
    screen.value = ""
})

arrow.addEventListener("click", () => {
    screen.value = screen.value.slice(0, -1);
})
