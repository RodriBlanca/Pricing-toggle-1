/* VARIABLES */
// MONTHLY AND ANNUALY BUTTONS
const monthlyBtn = document.getElementById('monthly');
const annualyBtn = document.getElementById('annualy');
// PACKAGE CARD INFORMATION
const basicPrice = document.getElementById('basic-price');
const premiumPrice = document.getElementById('premium-price');
const businessPrice = document.getElementById('business-price');
const packageOption = document.getElementsByClassName('price-month');
const cardButton = document.getElementsByClassName('card-description__button');

/* EVENTS */
const loadEventListenners = () => {
    monthlyBtn.addEventListener('click', monthlyOption)

    annualyBtn.addEventListener('click', annualyOption)
}

loadEventListenners();

/* FUNCTIONS */
// SET MONTHLY CHANGES AND APPLY DOM CHANGES
function monthlyOption() {

    basicPrice.textContent = `$39`;
    premiumPrice.textContent = `$49`;
    businessPrice.textContent = `$59`;

    for(let i = 0; i < packageOption.length; i++) {
        packageOption[i].textContent = `/Monthly`;
    }

    if(monthlyBtn.classList.contains('none-selected')) {
        monthlyBtn.classList.remove('none-selected');
        monthlyBtn.classList.add('selected-button');
        annualyBtn.classList.remove('selected-button');
        annualyBtn.classList.add('none-selected');
    }
}

// SET ANNUALY CHANGES AND APPLY DOM CHANGES
function annualyOption() {

    basicPrice.textContent = `$399`;
    premiumPrice.textContent = `$499`;
    businessPrice.textContent = `$599`;

    for(let i = 0; i < packageOption.length; i++) {
        packageOption[i].textContent = `/Annualy`;
    }

    if(annualyBtn.classList.contains('none-selected')) {
        annualyBtn.classList.remove('none-selected');
        annualyBtn.classList.add('selected-button');
        monthlyBtn.classList.remove('selected-button');
        monthlyBtn.classList.add('none-selected');
    }
}
