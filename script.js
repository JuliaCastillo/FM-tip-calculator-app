const billInput = document.querySelector('#bill-input');
let bill = 0;

const tipButtons = document.querySelectorAll('.tip-button');
let tipPerc = 0.05;

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
    const selectedButton = document.querySelector('.selected');

    if (selectedButton !== item) {
      selectedButton.classList.remove('selected');
      item.classList.add('selected');
    }

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

    tipResult.textContent = tipPerPerson.toFixed(2);
    totalResult.textContent = totalPerPerson.toFixed(2);
  }
}


const resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', function () {
  reset();
})

function reset() {
  billInput.value = '';
  bill = 0;

  tipPerc = 0;

  peopleInput.value = '';
  people = 0;

  tipResult.textContent = 0;
  totalResult.textContent = 0;

}