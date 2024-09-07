import { homepageRender } from './pages/homepage';
import { menuPageRender } from './pages/menuPage';
import { aboutPageRender } from './pages/aboutPage';
import './styles/styles.css';

export const container = document.getElementById('content');
const pageDisplay = document.getElementById('content');
const navigation = document.querySelector('nav');

homepageRender();

navigation.addEventListener('click', (e) => {
  if (!e.target.closest('button')) return;

  let navBtn = e.target.closest('button').textContent;

  pageDisplay.innerHTML = '';

  if (navBtn === 'Home') homepageRender();
  if (navBtn === 'Menu') menuPageRender();
  if (navBtn === 'About') aboutPageRender();
});

// Add Design NEXT
