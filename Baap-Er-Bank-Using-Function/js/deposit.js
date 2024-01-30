document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('depositField');
    const previousDepositAmount = getTextElementValueById('deposit-previous');
    const currentDeposit = newDepositAmount + previousDepositAmount;

    setNewTextElementValue('deposit-previous', currentDeposit);

    const currentBalance = getTextElementValueById('total-balance');
    

    const newBalance = newDepositAmount + currentBalance;

    setNewTextElementValue('total-balance', newBalance);

})