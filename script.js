const billInput = document.querySelector('#bill-input');
let bill = 0;

const tipButtons = document.querySelectorAll('.tip-button');
const customTipInput = document.querySelector('#custom-tip-input');
let tipPerc = 0.05;

const peopleInput = document.querySelector('#people-input');
let people = 0;

const tipResult = document.querySelector('#tip-result');
const totalResult = document.querySelector('#total-result');




//  EVENT LISTENERS  //

billInput.addEventListener('input', function () {
  bill = parseFloat(billInput.value);
  if (bill !== 0 && !isNaN(bill)) {
    removeErrorMessage('bill')
    calculateTip();
  } else {
    showErrorMessage('bill');
  }
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



customTipInput.addEventListener('input', function () {
  const selectedButton = document.querySelector('.selected');
  selectedButton.classList.remove('selected');

  tipPerc = parseFloat(customTipInput.value / 100);
  calculateTip();
})


peopleInput.addEventListener('input', function () {
  people = parseFloat(peopleInput.value);
  if (people !== 0 && !isNaN(people)) {
    removeErrorMessage('people')
    calculateTip();
  } else {
    showErrorMessage('people');
  }

})



//  FUNCTION TO CALCULATE TIP  //

function calculateTip() {
  if (people !== 0 && bill !== 0) {
    let tip = bill * tipPerc;
    let tipPerPerson = tip / people;
    let totalPerPerson = (bill + tip) / people;

    tipResult.textContent = tipPerPerson.toFixed(2);
    totalResult.textContent = totalPerPerson.toFixed(2);
  }
}




// ERROR MESSAGES //


function showErrorMessage(inputField) {
  const input = document.querySelector(`#${inputField}-input`);
  const errorMessage = document.querySelector(`#${inputField}-error-message`);

  errorMessage.style.display = 'block';
  if (!input.parentElement.classList.contains('input-error')) {
    input.parentElement.classList.add('input-error');
  }
}

function removeErrorMessage(inputField) {
  const input = document.querySelector(`#${inputField}-input`);
  const errorMessage = document.querySelector(`#${inputField}-error-message`);

  errorMessage.style.display = 'none';
  if (input.parentElement.classList.contains('input-error')) {
    input.parentElement.classList.remove('input-error');
  }

}




// RESET BUTTON

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