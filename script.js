
const input = document.querySelector(".input-screen")
const countings = document.querySelectorAll(".counting")
const equal = document.querySelector("#equal")
const ac = document.querySelector("#ac")
const arrow = document.querySelector("#arrow")

countings.forEach((element) => {
    element.addEventListener("click", () => {
        input.value += element.innerText;
    })
});

equal.addEventListener("click", () => {   // eval means string to string nhi manta hai number manta hai 
    input.value = eval(input.value);
});

ac.addEventListener("click", () => {
    input.value = ""
})

arrow.addEventListener("click", () => {
    input.value = input.value.slice(0, -1);
})

