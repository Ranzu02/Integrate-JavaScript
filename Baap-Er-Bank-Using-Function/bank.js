document.getElementById('button').addEventListener('click', function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if (email === "ranzu@ranzu.com" && password === 'secret'){
        window.location.href ='bank.html';
    }
    else {
        alert("It's not a valid user");
    }
})

