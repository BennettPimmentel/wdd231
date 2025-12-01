import { places } from "../data/places.mjs";

const grid = document.getElementById('discover-grid');
const visitMessageEl = document.getElementById('visitMessage');
const yearEl = document.getElementById('currentYear');
const lastModEl = document.getElementById('lastModified');

function createCard(place){
  const article = document.createElement('article');
  article.className = 'card';
  article.setAttribute('tabindex','0');

  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.src = place.image;
  img.alt = place.title;
  img.loading = 'lazy';
  figure.appendChild(img);

  const body = document.createElement('div');
  body.className = 'card-body';

  const h2 = document.createElement('h2');
  h2.textContent = place.title;

  const address = document.createElement('address');
  address.textContent = place.address;

  const p = document.createElement('p');
  p.textContent = place.description;

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = 'Learn more';
  btn.addEventListener('click', () => {

    const detail = `${place.title}\n${place.address}\n\n${place.description}`;
    alert(detail);
  });

  body.appendChild(h2);
  body.appendChild(address);
  body.appendChild(p);
  body.appendChild(btn);

  article.appendChild(figure);
  article.appendChild(body);

  return article;
}

function renderAll(){
  if(!grid) return;
  places.forEach(place => {
    const node = createCard(place);
    grid.appendChild(node);
  });
}

function updateVisitMessage(){
  const key = 'ch_chamber_last_visit';
  const now = Date.now();
  const last = localStorage.getItem(key);

  if (!last) {
    visitMessageEl.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const lastMs = Number(last);
    const diffDays = Math.floor((now - lastMs) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) {
      visitMessageEl.textContent = "Back so soon! Awesome!";
    } else if (diffDays === 1) {
      visitMessageEl.textContent = "You last visited 1 day ago.";
    } else {
      visitMessageEl.textContent = `You last visited ${diffDays} days ago.`;
    }
  }

  localStorage.setItem(key, String(now));
}

function updateFooter(){
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lastModEl) lastModEl.textContent = `Last modified: ${document.lastModified}`;
}

renderAll();
updateVisitMessage();
updateFooter();
