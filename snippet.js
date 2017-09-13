// 3
let h = document.querySelector('.item-page__main-title')
h.innerText = 'Bread';

// 4
let el = document.querySelector('.product-image__image--single');
el.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/GrainProducts.jpg/420px-GrainProducts.jpg');

// 5
let navigation = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

let navList = Array.from(document.querySelectorAll('li.top-nav__list-item'));
navList.map( (item, i) => {item.childNodes[0].textContent = navigation[i]});

// 6
let oldLogo = document.querySelector('a.indigo-logo svg');
let newLogo = document.createElement('img');
newLogo.src = 'http://www.logotypes.ru/gif.get?gif=Hard%5FRock%5Fcafe%5Flogo';
newLogo.style.maxHeight = '100%';
oldLogo.replaceWith(newLogo);

// 7
let data = {
  name: 'Bread',
  calories: 'A lot',
  taste: 'Awesome'
};

function render(obj) {
  let snippet = `
    <ul>
      <li><strong>${obj.name}</strong></li>
      <li>Calories: ${obj.calories}</li>
      <li>Taste: ${obj.taste}</li>
    </ul>
  `;

  let node = document.querySelector('#item-description__content');
  node.innerHTML = snippet;
}

render(data);

// 8


// 9
const authorLink = document.querySelector('.item-contributor__link');
authorLink.setAttribute('href', 'http://georgiancollege.ca');

// 10
const addToCart = document.getElementById('add-to-cart-button');
addToCart.addEventListener('click', function(e) {
  document.documentElement.innerHTML = '';
  e.preventDefault();
});