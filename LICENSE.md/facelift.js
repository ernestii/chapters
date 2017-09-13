// 1
let h = document.querySelector('.item-page__main-title')
h.innerText = 'Bread';

// 2
let el = document.querySelector('.product-image__image--single');
el.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/GrainProducts.jpg/420px-GrainProducts.jpg');

// 3 
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
navList.map( (item, i) => item.childNodes[0].textContent = navigation[i]);

