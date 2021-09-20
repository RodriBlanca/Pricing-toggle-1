/* VARIABLES */
// Botones plan mensual o anual
const monthlyBtn = document.getElementById('monthly');
const annualyBtn = document.getElementById('annualy');
// Información de los planes en las tarjetas
const basicPrice = document.getElementById('basic-price');
const premiumPrice = document.getElementById('premium-price');
const businessPrice = document.getElementById('business-price');
const packageOption = document.getElementsByClassName('price-month');
const cardButton = document.getElementsByClassName('card-description__button');

/* EVENTS */
// Carga los eventListenners
const loadEventListenners = () => {
    monthlyBtn.addEventListener('click', monthlyOption)

    annualyBtn.addEventListener('click', annualyOption)
}

loadEventListenners();

/* FUNCTIONS */
// Establece la opción mensual y aplica los cambios al DOM
function monthlyOption() {

    // Establece el precio mensual del paquete Basic
    basicPrice.textContent = `$39`;

    // Establece el precio anual del paquete Premium
    premiumPrice.textContent = `$49`;

    // Establece el precio anual del paquete Business
    businessPrice.textContent = `$59`;

    // Modifica el span de las tarjetas a mensual
    for(let i = 0; i < packageOption.length; i++) {
        packageOption[i].textContent = `/Monthly`;
    }

    // Cambio de color del botón
    monthlyBtn.style.backgroundColor = '#26C281';
    monthlyBtn.style.color = '#FFFFFF';
    annualyBtn.style.backgroundColor = '#E7FAF4';
    annualyBtn.style.color = '#26C281';

    // Efecto para el botón no seleccionado
    monthlyBtn.classList.remove('none-selected');
    annualyBtn.classList.add('none-selected');
}

// Establece la opción anual y aplica los cambios al DOM
function annualyOption() {

    // Establece el precio anual del paquete Basic
    basicPrice.textContent = `$399`;

    // Establece el precio anual del paquete Premium
    premiumPrice.textContent = `$499`;

    // Establece el precio anual del paquete Business
    businessPrice.textContent = `$599`;

    // Modifica el span de las tarjetas a anual
    for(let i = 0; i < packageOption.length; i++) {
        packageOption[i].textContent = `/Annualy`;
    }

    // Cambio de color del botón
    annualyBtn.style.backgroundColor = '#26C281';
    annualyBtn.style.color = '#FFFFFF';
    monthlyBtn.style.backgroundColor = '#E7FAF4';
    monthlyBtn.style.color = '#26C281';

    // Efecto para el botón no seleccionado
    annualyBtn.classList.remove('none-selected');
    monthlyBtn.classList.add('none-selected');
}
