document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputFieldValueById('withdraw-field');
    const currentTotalWithdraw = getTextElementValueById('previous-withdraw-amount');
    const totalBalance = getTextElementValueById('total-balance');

    

    if(withdrawAmount > totalBalance){
        alert("You are trying to withdraw more than what you have");
        return;
    }
    
    const newBalanceAfterWithdraw = totalBalance - withdrawAmount;
    setNewTextElementValue('total-balance', newBalanceAfterWithdraw);

    const newCurrentTotalWithdraw = withdrawAmount + currentTotalWithdraw;
    setNewTextElementValue('previous-withdraw-amount', newCurrentTotalWithdraw);

})