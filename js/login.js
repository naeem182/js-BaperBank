//step 1 add click event handler with the subimt button 

document.getElementById('btn-submit').addEventListener('click', function () {
    //console.log('clicked')
    //step 2 get the email adress inside the email address field

    const emailfield = document.getElementById('user-email')
    const email = emailfield.value// .value to get text fro input field
    //step 3 get password
    const passfield = document.getElementById('user-password')
    const password = passfield.value
    console.log(email, password)
    //do not verify on the client side n:b:evabe kra jbe na
    //step 4 verify email and password
    if (email === 'naeem@islam' && password === 'n1n2') {
        //console.log('valid user')
        window.location.href = 'bank.html'
    }
    else {
        //console.log('invalid user')
        alert('tui password vule gesis')
    }


})