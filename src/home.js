const HERO_HEADING_TEXT = 'Hey hello welcome to beautiful restaurant';
const HERO_SUBHEADING_TEXT = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente id quos neque dolore repudiandae, optio eveniet, impedit facere, corrupti reiciendis ex! Rem rerum optio quasi, vitae nulla quia? Incidunt, vel!'
const IMG_URL = 'https://placehold.co/500x400';

function createHomePage() {
  const heroContainer = document.createElement('div');
  heroContainer.classList.add('hero-main');

  const heroText = document.createElement('div');
  heroText.classList.add('hero-text');

  const heroHeading = document.createElement('h1');
  heroHeading.textContent = HERO_HEADING_TEXT;

  const heroSubheading = document.createElement('p');
  heroSubheading.textContent = HERO_SUBHEADING_TEXT;

  const image = document.createElement('img');
  image.src = IMG_URL;

  heroText.appendChild(heroHeading);
  heroText.appendChild(heroSubheading);
  
  heroContainer.appendChild(heroText);
  heroContainer.appendChild(image);
  
  return heroContainer;
}

export default createHomePage