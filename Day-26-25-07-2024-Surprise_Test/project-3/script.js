const form = document.getElementById('form');
const quantityInput = document.getElementById('quantity');
const price = document.getElementById('price');

const nonMemberPrice = 10;
const memberPrice = 8;

const discountPercentage = 0.1;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const quantity = parseInt(quantityInput.value);

  const isMember = confirm('Are you a member?');

  let totalPrice;
  if (isMember) {
    totalPrice = quantity * memberPrice;
  } else {
    totalPrice = quantity * nonMemberPrice;
  }

  if (quantity >= 10) {
    totalPrice *= (1 - discountPercentage);
  }

  price.textContent = `Total price: $${totalPrice}`;
});