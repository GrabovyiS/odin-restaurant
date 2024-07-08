import createHeroPage from './home.js';
import createAboutPage from './about.js';
import createMenuPage from './menu.js';
import './styles.css';

const container = document.querySelector('#content');
const homeLinkButton = document.querySelector('#home-link-button');
const menuLinkButton = document.querySelector('#menu-link-button');
const aboutLinkButton = document.querySelector('#about-link-button');

homeLinkButton.addEventListener('click', () => {
  container.textContent = '';
  const heroPageComponent = createHeroPage();
  container.appendChild(heroPageComponent);
});

menuLinkButton.addEventListener('click', () => {
  container.textContent = '';
  const menuPageComponent = createMenuPage();
  container.appendChild(menuPageComponent);
});

aboutLinkButton.addEventListener('click', () => {
  container.textContent = '';
  const aboutPageComponent = createAboutPage();
  container.appendChild(aboutPageComponent);
});

const initialHeroPage = createHeroPage();
container.appendChild(initialHeroPage);