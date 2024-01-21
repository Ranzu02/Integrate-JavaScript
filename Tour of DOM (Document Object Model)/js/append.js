// #1. Where to add
const placesList = document.getElementById('places-list');
console.log(placesList);
// What to be added
const li = document.createElement("li");
li.innerText = "Cox's Bazar";

// 3. Add the child
placesList.appendChild(li);


// Adding a full section

const mainContainer = document.getElementById("main-container");
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "Foods i love to eat";
section.appendChild(h1);

const ul = document.createElement("ul");
mainContainer.appendChild(section);
section.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "Biriyani";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "Morog Polao";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Khichuri";
ul.appendChild(li3);

const li4 = document.createElement("li");
li4.innerText = "Mutton Biriyani";
ul.appendChild(li4);

// set innter HTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dresses I like</h1>
<ul>
<li>Shirt</li>
<li>Pant</li>
<li>Lungi</li>
<li>T-shirt</li>
</ul>
`;
mainContainer.appendChild(sectionDress);