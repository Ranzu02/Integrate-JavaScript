document.getElementById('withdraw-btn').addEventListener('click', function () {

    // Step 1: Get the iput value and convert to integer
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawFieldElement.value;
    const withdrawAmount = parseFloat(withdrawAmountString);

    // Crearing the input field

    withdrawFieldElement.value = "";
    // Checking the input whether it's a number or not

    if (isNaN(withdrawAmount)) {
        alert("Please enter valid amount in number");
        return;
    }

    // Step2: Get the previous withdraw ammount

    const previouseWithdrawElement = document.getElementById('previous-withdraw-amount');
    const previousWithdrawString = previouseWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);



    // Step 5: Getting the Total balance

    const currentBalanceElement = document.getElementById('total-balance');
    const currentBalanceAmountString = currentBalanceElement.innerText;
    const currentBalanceAmount = parseFloat(currentBalanceAmountString);



    if (withdrawAmount > currentBalanceAmount) {
        alert('You can not withdraw more than your current balance');
        return;
    }

    // Step 3: Add previous withdraw amount and input withdraw amount 
    const currentTotalWithdraw = withdrawAmount + previousWithdrawAmount;

    // Step 4: Add the new Withdraw amount the Total withdraw field

    previouseWithdrawElement.innerText = currentTotalWithdraw;

    const newBalance = currentBalanceAmount - withdrawAmount;

    currentBalanceElement.innerText = newBalance;


    // Clearing the Withdraw field value





})