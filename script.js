let grid = document.querySelector(".grid");
let btn = document.querySelector("button");



function createGrid(size) {

    if (!(isNaN(size)) && size <= 100) {
        for (let i = 0; i < size; i++) {
            let column = document.createElement('div');
            column.classList.add("column");
            grid.appendChild(column);
            for (let j = 0; j < size; j++) {
                let row = document.createElement('div');
                row.classList.add("row");
                let cell = document.createElement('div');
                cell.classList.add("cell");
                column.appendChild(row);
                row.appendChild(cell);

                cell.addEventListener("mouseover", (e) => {
                    e.target.style.backgroundColor = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
                })
            }

        }
    } else {
        alert("Value needs to be a number!")
    }
};

btn.addEventListener ("click", () => {
    grid.textContent = ""
    let sizeChoice = prompt("Please enter a size");
    createGrid(sizeChoice)
})

