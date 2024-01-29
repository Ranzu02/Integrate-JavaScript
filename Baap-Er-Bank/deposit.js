// Step 1: Adding event listener on the button

document.getElementById('deposit-btn').addEventListener('click', function () {
    // Step 2: Get the deposit value from the input text
    const depositField = document.getElementById('depositField');
    const NewDepositAmount = depositField.value;

    // Step 3: Get the previous deposit amount
    const previousDepositElement = document.getElementById('deposit-previous');
    const previousDepositTotal = previousDepositElement.innerText;

    // Step 4: Conver string to float and then add previous and entered deposit amount and add 
    const newDepositTotal = parseFloat(NewDepositAmount) + parseFloat(previousDepositTotal);

    // Step 5: put the new value to the Deposit amount.
    previousDepositElement.innerText = newDepositTotal;

    // Step 6: Get the Total balance and parseFolat() then add the deposit value from the input text

    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceCurrent = totalBalanceField.innerText;
    const floatTotalBalacecurrent = parseFloat(totalBalanceCurrent);

    const updatedTotalBalnce = floatTotalBalacecurrent + parseFloat(NewDepositAmount);
    totalBalanceField.innerText = updatedTotalBalnce;

    // Clear the deoposit field
    document.getElementById('depositField').value = "";

})

// 