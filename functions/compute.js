import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const compute = (func) => {
  const num1 = parseFloat(document.getElementById('number1').value);
  const num2 = parseFloat(document.getElementById('number2').value);
  const answer = document.getElementById('answer');

  switch (func) {
    case 'add': 
      answer.textContent = `${num1} + ${num2} = ${add(num1, num2)}`;
      break;
    case 'subtract': 
      answer.textContent = `${num1} - ${num2} = ${subtract(num1, num2)}`;
      break;
    case 'multiply':
      answer.textContent = `${num1} \u00D7 ${num2} = ${multiply(num1, num2)}`;
      break;
    case 'divide':
      answer.textContent = `${num1} \u00F7 ${num2} = ${divide(num1, num2)}`;
      break;
  }
};

export default compute;
