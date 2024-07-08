const DISHES = [
  {
    name: 'taters',
    price: '$10',
    description: 'crunchy nice taters',
  },
  {
    name: 'steak',
    price: '$50',
    description: 'red juicy steak',
  },
  {
    name: 'juice',
    price: '$8',
    description: 'fruity sweet and sour juice',
  },
]

const MENU_HEADING_TEXT = 'Menu';

function createMenuPage() {
  const container = document.createElement('div');

  const menuHeading = document.createElement('h1');
  menuHeading.textContent = MENU_HEADING_TEXT;
  menuHeading.classList.add('menu-heading');

  const menuCardsContainer = document.createElement('div');
  menuCardsContainer.classList.add('menu-cards-container')

  for (const dish of DISHES) {
    const menuItemCard = createMenuItemCard(dish);
    menuCardsContainer.appendChild(menuItemCard);
  }

  container.appendChild(menuHeading);
  container.appendChild(menuCardsContainer);

  return container;
}

function createMenuItemCard(dish) {
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('menu-card');

  const cardHeading = document.createElement('h2');
  cardHeading.textContent = dish.name;

  const cardDescription = document.createElement('p');
  cardDescription.textContent = dish.description;

  const cardPrice = document.createElement('p');
  cardPrice.classList.add('price');
  cardPrice.textContent = `Price: ${dish.price}`;

  cardContainer.appendChild(cardHeading);
  cardContainer.appendChild(cardDescription);
  cardContainer.appendChild(cardPrice);

  return cardContainer;
}

export default createMenuPage