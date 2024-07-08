let grid = document.querySelector('.grid');
let body = document.querySelector('body');

let btn = document.querySelector('.popUp');

let numChoice

btn.addEventListener("click", () => {
    grid.innerHTML = ""
    numChoice = prompt("Enter a number for each side of the grid")
    if (numChoice <= 100) {
        for (let i = 1; i <= (numChoice * numChoice); i++) {
            let div = document.createElement('div');
            div.classList.add("square")
            grid.appendChild(div)

            div.addEventListener("mouseover", (e) => { e.target.classList.add("hoverClass") })
        }
    } else {
        window.alert("choose between 1 to 100 only!")
    }
})



