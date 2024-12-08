import './css/main.css';

// Example: Counter button functionality
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#counterButton');
  const counterText = document.querySelector('#counterText');
  let count = 0;

  button.addEventListener('click', () => {
    count += 1;
    counterText.textContent = `Count: ${count}`;
  });
});
