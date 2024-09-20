import { resizeSquare } from "../utils/index.js";

function chessTableArray() {
    const chessTable = [];
    const row = 8;
    const column = 8
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]

    // const value = 0;
    for (let i = 0; i < row; i++) {
        chessTable[i] = []
        for (let j = 0; j < column; j++) {
            chessTable[i][j] = letters[j] + (i + 1)
        }
    }

    chessTable.reverse()
    return chessTable
}
function createTable() {
    chessTable.forEach(row => {
        const markup = `
             <div id="row">
                ${row.map((item, index) => (
            `<div class="square ${item}"><p>${item}</p></div>`
        )).join("")}
            </div>
        `

        $table.insertAdjacentHTML("beforeend", markup)
    })

}

function paintTable() {
    Array.from($table.children).forEach((row, indexRow) => {
        Array.from(row.children).forEach((square, index) => {
            // Calculamos si la celda debe ser negra o blanca alternando cada fila y columna
            let isWhite = (indexRow % 2 === 0 && index % 2 === 0 || (indexRow % 2 !== 0 && index % 2 !== 0))
            if (isWhite) {
                square.classList.add("white");
            } else {
                square.classList.add("black");
            }
        });
    });
}

function getPosition(row, column) {
    if (!row) {
        throw new Error("Ingrese la posicion de la fila y la columna")
    }
    if (!column) {
        throw new Error("Ingrese posicion de la columna")
    }
    if (!Number.isInteger(+row)) {
        throw new Error("Ingrese un numero")
    }
    if (row > 8 || row < 0 || column > 8 || column < 0) {
        throw new Error("Longitud fuera de rango ingrese valores del 1 al 7")
    }
    return chessTable[row][column]
}
const $table = document.getElementById("table")


// Llamamos a la función al cargar la página para ajustar el tamaño inicial
resizeSquare();

// Agregamos el listener para detectar el cambio de tamaño de la ventana y visual viewport
window.addEventListener('resize', resizeSquare);
window.visualViewport.addEventListener('resize', resizeSquare);


const chessTable = chessTableArray()

createTable();
paintTable();

