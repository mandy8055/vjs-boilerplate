import './styles.scss';
import getRandomColor from './utils/getRandomColor';
import sampleImage from './assets/sample-img.jpg';

const greeting = document.getElementById('greeting');
const changeColorButton = document.getElementById('change-color');

greeting.innerText = 'Hello, World!';

changeColorButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

const imgElement = document.createElement('img');
imgElement.src = sampleImage;
imgElement.width = 200;
document.body.appendChild(imgElement);
