const form = document.querySelector('.form');
const scoreInput = document.querySelector('#score');
const gradeParagraph = document.querySelector('#grade');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const score = parseInt(scoreInput.value);

  if (score > 100) {
    gradeParagraph.textContent = 'Invalid score';
  } else if (score >= 90) {
    gradeParagraph.textContent = 'A';
  } else if (score >= 80) {
    gradeParagraph.textContent = 'B';
  } else if (score >= 70) {
    gradeParagraph.textContent = 'C';
  } else if (score >= 60) {
    gradeParagraph.textContent = 'D';
  } else {
    gradeParagraph.textContent = 'F';
  }
});