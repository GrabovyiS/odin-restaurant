const ABOUT_HEADING_TEXT = 'Hey hello about our beautiful restaurant';
const ABOUT_TEXT = 'Our restaurant so cool bro. Such cool bool lool crazy whool. Some consider it stool but its actually not. lalala alala lalaa llalaal'

function createAboutPage() {
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('text-container')

  const aboutHeading = document.createElement('h1');
  aboutHeading.textContent = ABOUT_HEADING_TEXT;

  const aboutText = document.createElement('p');
  aboutText.textContent = ABOUT_TEXT;

  aboutContainer.appendChild(aboutHeading);
  aboutContainer.appendChild(aboutText);
  
  return aboutContainer;
}

export default createAboutPage