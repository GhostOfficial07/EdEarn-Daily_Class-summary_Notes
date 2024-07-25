const form = document.getElementById('form');
const resultDiv = document.getElementById('result');
const eligible = document.querySelector('#eligible');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const age = parseInt(document.getElementById('age').value);
  const membership = document.getElementById('membership').value;

  if (age >= 65) {
    eligible.textContent = 'You are eligible for the senior citizen discount.';
  } else if (age >= 60 && age < 65 && membership === 'gold') {
    eligible.textContent = 'You are eligible for the senior citizen discount.';
  } else {
    eligible.textContent = 'You are not eligible for the senior citizen discount.';
  }
});