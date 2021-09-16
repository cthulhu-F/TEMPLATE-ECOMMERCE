/* CARRITO DE COMPRAS */


/* MENU DROPDOWN */

class Dropdown {

    mostrarMenu(e) {
        document.getElementById("menu-dropdown").style.display = "inline-block";

        /*
        const row = document.getElementById('list-category');
        row.innerHTML = `
        <div class="col">
        <div class="mx-auto fw-bold text-start title-category"> Indumentaria </div>
        <hr class="fw-bold dropdown-divider">

        <ul class="list-group">
            <li class="list-group-item p-0 pb-2 border-0">An item</li>
        </ul>

        <div class="mx-auto fw-bold text-start"> Ver todos </div>        
        </div>
            `;
        dropdownCategory.appendChild(row);
        */
    }

    ocultarMenu(e) {
        document.getElementById("menu-dropdown").style.display = "none";

    }

    inputRange(output, slider){
        output.innerHTML = slider.value;

        slider.oninput = function () {
            output.innerHTML = this.value;
        }

    }

}

const dropdownMenu = new Dropdown();
let toggleCategory0 = document.getElementById('toggleCategory-0');
let toggleCategory1 = document.getElementById('toggleCategory-1');
let toggleCategory2 = document.getElementById('toggleCategory-2');
let toggleCategory3 = document.getElementById('toggleCategory-3');
let toggleCategory4 = document.getElementById('toggleCategory-4');
let toggleCategory5 = document.getElementById('toggleCategory-5');

let dropdownSubMenu = document.getElementById('menu-dropdown');

const dropdownCategory = document.querySelector("#list-category");

let sliderMin = document.getElementById("slideRangeMin");
let outputMin = document.getElementById("valueRangeMin");

let sliderMax = document.getElementById("slideRangeMax");
let outputMax = document.getElementById("valueRangeMax");


cargarEventos();

function cargarEventos() {

    toggleCategory0.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory0.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    toggleCategory1.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory1.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    toggleCategory2.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory2.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    toggleCategory3.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory3.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    toggleCategory4.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory4.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    toggleCategory5.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    toggleCategory5.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    dropdownSubMenu.addEventListener('mouseover', (e) => { dropdownMenu.mostrarMenu(e) })

    dropdownSubMenu.addEventListener('mouseout', (e) => { dropdownMenu.ocultarMenu(e) })

    sliderMin.addEventListener("DOMContentloaded", dropdownMenu.inputRange(outputMin, sliderMin));

    sliderMax.addEventListener("DOMContentloaded", dropdownMenu.inputRange(outputMax, sliderMax));
}
