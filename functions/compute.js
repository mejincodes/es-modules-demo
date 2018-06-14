import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const compute = (func) => {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);
  const answer = document.getElementById('answer');

  switch (func) {
    case 'add': answer.textContent = add(number1, number2); break;
    case 'subtract': answer.textContent = subtract(number1, number2); break;
    case 'multiply': answer.textContent = multiply(number1, number2); break;
    case 'divide': answer.textContent = divide(number1, number2); break;
  }
};

export default compute;
