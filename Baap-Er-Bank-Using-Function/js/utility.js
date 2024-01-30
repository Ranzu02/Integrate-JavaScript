function getInputFieldValueById(elementId){
    const inputField = document.getElementById(elementId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return inputFieldValue;

}

function getTextElementValueById(elementId){
    const textField = document.getElementById(elementId);
    const textFieldString = textField.innerText;
    const textFieldValue = parseFloat(textFieldString);
    return textFieldValue;

}

function setNewTextElementValue(elementId, newValue){
    document.getElementById(elementId).innerText = newValue;
}
