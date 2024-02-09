function calculateTraingleArea(){
    const base =  document.getElementById('base').value;
    const baseNumber = parseFloat(base);
    const height = document.getElementById('height').value;
    const heightNumber = parseFloat(height);
    if (height == "" || Number.isNaN(heightNumber) == true || base == "" || Number.isNaN(baseNumber) == true){
        alert('Please enter a valid number');
        return;
    }

    const triangleArea = 0.5 * baseNumber * heightNumber;
    const triangeAreaValue = document.getElementById('triangle-area');
    triangeAreaValue.innerText = triangleArea;

}

function rectangleArea(){
    const width = document.getElementById('width').value;
    const widthNumber = parseFloat(width);
    const length = document.getElementById('length').value;
    const lengthNumber = parseFloat(length);
    if(length == "" || Number.isNaN(lengthNumber) == true || width == "" || Number.isNaN(widthNumber) == true){
        alert("Please enter a valid number");
        return;
    }

    const rectangleArea = widthNumber * lengthNumber;

    document.getElementById('rectangle-area').innerText = rectangleArea;
}


/* Using reuseable functions to calculate the are of parallelogram */

function parallelogramArea(){
    const parallelogramBase = elementValue("parallelogram-base");
    const paralleogramHeight = elementValue("parallelogram-height");

    const parallelogramArea = parallelogramBase * paralleogramHeight;
    elementInnerText('parallelogram-area', parallelogramArea);
}

function elementValue(elementId){

    const elementField = document.getElementById(elementId);
    const elementValue = elementField.value;
    const value = parseFloat(elementValue);
    if(value == "" || Number.isNaN(value) == true){
        alert("Please enter a valid number");
        return;
    }
    return value;

}

function elementInnerText(elementId, area){
    const getElement = document.getElementById(elementId);
    getElement.innerText = area;
}


// Ellipse Area using functions

function ellipseArea(){
    const major = elementValue('ellipse-major');
    const minor = elementValue('ellipse-minor');

    const ellipseArea = Math.PI * major * minor;
    const ellipseAreTwo = ellipseArea.toFixed(2);

    elementInnerText('ellipse-area', ellipseAreTwo);
}