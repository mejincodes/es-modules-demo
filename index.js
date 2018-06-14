import compute from './functions/compute.js';

document.addEventListener('DOMContentLoaded', () => {
  const add = document.getElementById('add');
  const subtract = document.getElementById('subtract');
  const multiply = document.getElementById('multiply');
  const divide = document.getElementById('divide');
  const buttons = [add, subtract, multiply, divide];

  buttons.forEach(button => button.addEventListener('click', (e) => {
    buttons.forEach(button => button.classList.remove('active'));
    compute(e, button.id);
  }));
});
