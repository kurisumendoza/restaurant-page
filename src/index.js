import { homepageRender } from './homepage';
import './styles/styles.css';
import mapImg from './assets/map.gif';

homepageRender();

const map = document.getElementById('map-image');
map.src = mapImg;

console.log('Hello!');
