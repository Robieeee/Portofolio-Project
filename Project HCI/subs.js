const fullName = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phonenumber');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = []
    if (fullName.value === '' || fullName.value == null){
        messages.push('Full Name Is Required')
    }
    if (username.value === '' || username.value == null){
        messages.push('Username Is Required')
    }
    if (email.value === '' || email.value == null){
        messages.push('Email Is Required')
    }
    if (phonenumber.value === '' || phonenumber.value == null){
        messages.push('PhoneNumber Is Required')
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(', ')
    }

});


