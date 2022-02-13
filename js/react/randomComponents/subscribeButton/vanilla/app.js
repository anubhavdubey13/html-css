var nameUser = document.getElementById('name');
var email = document.getElementById('email');
var submitBtn = document.getElementById('btnSubmit');
var allInputs = document.querySelector('.inputCollection');

function submitCallback(){
    if(nameUser.value && email.value) {
        var username = nameUser.value;
        allInputs.style.display = "none";
        document.body.innerHTML = `${username}, thank you for subscribing!`;
    }
};

submitBtn.addEventListener('click', submitCallback);

