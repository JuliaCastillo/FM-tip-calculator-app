const billInput = document.querySelector('#bill-input');
let bill = 0;

const tipButtons = document.querySelectorAll('.tip-button');
let tipPerc = 0;

const peopleInput = document.querySelector('#people-input');
let people = 0;

const tipResult = document.querySelector('#tip-result');
const totalResult = document.querySelector('#total-result');


billInput.addEventListener('input', function () {
  bill = parseFloat(billInput.value);
  calculateTip();
})


tipButtons.forEach(item => {
  item.addEventListener('click', function () {
    tipPerc = parseFloat(item.value);
    calculateTip();
  })
})


peopleInput.addEventListener('input', function () {
  people = parseFloat(peopleInput.value);
  calculateTip();
})


function calculateTip() {
  if (people !== 0 && tipPerc !== 0) {
    let tip = bill * tipPerc;
    let tipPerPerson = tip / people;
    let totalPerPerson = (bill + tip) / people;

    tipResult.textContent = Math.round((tipPerPerson + Number.EPSILON) * 100) / 100;
    totalResult.textContent = Math.round((totalPerPerson + Number.EPSILON) * 100) / 100;
  }
}