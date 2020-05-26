let phone_number_field = document.querySelector('.phone-number-field');
let phone_number = document.getElementById('phone-number');
let plus = document.querySelector('.plus');

plus.addEventListener('click', () => {
  let newNumber = phone_number.cloneNode(true);
  newNumber.value = '';
  phone_number_field.insertBefore(newNumber, plus)
})
