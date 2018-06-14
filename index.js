import compute from './functions/compute.js';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('add').addEventListener('click', () => compute('add'));
  document.getElementById('subtract').addEventListener('click', () => compute('subtract'));
  document.getElementById('multiply').addEventListener('click', () => compute('multiply'));
  document.getElementById('divide').addEventListener('click', () => compute('divide'));
});
