const sections = document.querySelectorAll('section');
console.log(sections);
for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft ='7px';
    section.style.backgroundColor = 'lightgray';
}

const heads = document.getElementsByTagName('h1');
console.log(heads);

const heads2 = document.querySelectorAll('h1');
console.log(heads2);

// Learning all the selector for getting element. 

const placesToVisitContainer = document.getElementById('places-to-visit');
placesToVisitContainer.style.backgroundColor = 'yellow';

const placesContainer = document.getElementById('places-to-visit');
placesContainer.classList.add('text-size');
placesContainer.classList.remove('text-center');