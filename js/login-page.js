document.getElementById('show-register').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

document.getElementById('show-register').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.add('show-register');
});

document.getElementById('show-login').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.remove('show-register');
});
