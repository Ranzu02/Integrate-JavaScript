console.log("Separate js File");

// 1. Option for doing an event


// 2. Option for doing an event
// [Imaportant]
//  <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// 3. Option for doing an event

const makeBlueButton = document.getElementById('make-blue');

function makeBlue() {
    document.body.style.backgroundColor = "blue";
}

makeBlueButton.onclick = makeBlue;

// 3. Option for doing an event

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = "purple";
}

// 4.  option for doing and event

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

// 4. Another options just like 4
// [Important]

document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})