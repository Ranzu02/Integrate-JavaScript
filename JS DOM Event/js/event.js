console.log("Separate js File");

// Option 1: Directly set on the HTML element
// <button onclick = "console.log(65)">Another button</button>


// Option 2 add onlclick function on the HTML element
// [Imaportant]
//  <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// 3. Option 3 for doing an event Using ID

const makeBlueButton = document.getElementById('make-blue');

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

makeBlueButton.onclick = makeBlue;

// Option 3 another

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// Option 4 for doing and event

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink);

function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// 4. another options like 4

const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// Option 4 Final
// [Important]

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})