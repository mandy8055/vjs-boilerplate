import './styles.scss';
import getRandomColor from './utils/getRandomColor';

const greeting = document.getElementById('greeting');
const changeColorButton = document.getElementById('change-color');

greeting.innerText = 'Hello, World!';

changeColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});
