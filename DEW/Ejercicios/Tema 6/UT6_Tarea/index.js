// variables
const data = {
    areaDraw: document.getElementById('zonadibujo'),
    color: document.getElementById('paleta'),
    text: document.querySelectorAll('paleta')[1],
    selectedColor: document.querySelectorAll('td.seleccionado'),
    cellNumber: 30,
}

class Paint {
    constructor() {
        // global variables
        this.statusBrush = false;
        this.painting = false;
        this.color = '';
        this.flag = 0;
    }

    createTable() {
        // create new table and their attributes
        let table = document.createElement('table');
        table.setAttribute('class', 'tablerodibujo');
        table.setAttribute('id', 'table');
        table.setAttribute('name', 'table');

        // using the way to create table by javascript
        for (let i = 0; i < data.cellNumber; i++) {
            let rows = document.createElement('tr');
            for (let j = 0; j < data.cellNumber; j++) {
                let column = document.createElement('td');
                rows.appendChild(column);
            }
            table.appendChild(rows);
        }
        data.areaDraw.appendChild(table);
    }

    selectedBrush() {
        // get cells from first table (colors table)
        let tableRow = data.color.getElementsByTagName('tr')[0];
        let colorsCell = tableRow.getElementsByTagName('td');
        // loop for color cells
        for (let index = 0; index < colorsCell.length; index++) {
            colorsCell[index].addEventListener('click', () => {
                // remove 'selecionado' class
                this.resetColorSelection(colorsCell);
                this.color = colorsCell[index].classList.value;
                colorsCell[index].classList.add('seleccionado');
                // flag to controlled when user did click in color cell
                this.flag = 1;
                this.updateBrushStatus(true);
                this.paintCell();
            });
        };
    }

    resetColorSelection(colorsCell) {
        Array.from(colorsCell).forEach((cell) => {
            cell.classList.remove('seleccionado');
        });
    }


    paintCell() {
        // get new table (create with javascript)
        let table = document.getElementById('table');
        let cells = table.getElementsByTagName('td');
        // loop for new cells
        for (let index = 0; index < cells.length; index++) {
            if (this.statusBrush && this.flag === 1) {
                cells[index].addEventListener('click', (event) => {
                    this.startPainting();
                    this.paint(event, cells[index]);
                });
                cells[index].addEventListener('mouseover', (event) => {
                    this.paint(event, cells[index]);
                });
            }
        };
    }

    updateBrushStatus(activated) {
        // get cell for status bar (show to user brush status)
        let textRow = data.color.getElementsByTagName('tr')[1].getElementsByTagName('td')[0];
        activated 
        ? textRow.innerHTML = 'pincel ACTIVADO'
        : textRow.innerHTML = 'pincel DESACTIVADO';
        this.statusBrush = activated;
    }

    paint(event, cell) {
        // paint cell and check events
        if (this.painting && this.statusBrush) {
            if (this.color == 'color6') {
                cell.setAttribute('class', '');
                return;
            }
            if (event.type == 'mouseover') {
                // when mouse detected second click change the status brush
                cell.addEventListener('click', () => {
                    this.stopPainting();
                })
            }
            // set color in cell
            cell.setAttribute('class', this.color);
        }
    }

    startPainting() {
        // only when flag and statush brush are ok let painting
        if (this.statusBrush && this.flag === 1) {
            this.painting = true;
        }
    }

    stopPainting() {
        // reset all values to start loop again
        this.painting = false;
        this.updateBrushStatus(this.painting);
        this.flag = 0;
    }
}

function init() {
    // create new instance of Paint class
    let paint = new Paint();
    // start 
    paint.createTable();
    paint.selectedBrush();
}

document.addEventListener('DOMContentLoaded', init);