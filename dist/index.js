"use strict";
//Je récupère mon input username
const username = document.getElementById('username');
//Lorsque mon input change, je change son border color selon qu'il soit au bon format ou non.
username.addEventListener('change', function (e) {
    if (username.value.length > 3) {
        username.style.borderColor = "green";
    }
    else {
        username.style.borderColor = "red";
        alert("Username too short");
    }
});
//Je récupère mon input email
const email = document.getElementById("email");
//Lorsque mon input change, je change son border color selon qu'il soit au bon format ou non.
email.addEventListener('change', function (e) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(email.value)) {
        email.style.borderColor = "green";
    }
    else {
        email.style.borderColor = "red";
        alert("Email format not valid");
    }
});
//Je récupère mon input password
const password = document.getElementById('password');
//Lorsque mon input change, je change son border color selon qu'il soit au bon format ou non.
password.addEventListener('change', function (e) {
    if (password.value.length > 5) {
        password.style.borderColor = "green";
    }
    else {
        password.style.borderColor = "red";
        alert("Password should have at least 5 characters");
    }
});
//Je récupère mon input confirm
const confirmation = document.getElementById("confirm");
//Je change son border color seulement s'il match avec la value de password
confirmation.addEventListener('change', function (e) {
    if (confirmation.value != password.value || confirmation.value.length <= 5) {
        confirmation.style.borderColor = "red";
        alert("Password do not match");
    }
    else {
        confirmation.style.borderColor = "green";
    }
});
//Je récupère mon bouton
const btn = document.getElementById('btn');
//Je valide le submit seulement si toutes les conditions précédentes sont ok;
btn.addEventListener('click', function (e) {
    if (username.value.length <= 3 || email.style.borderColor === "red" || password.value.length <= 5 || confirmation.value != password.value) {
        alert("One field is not correct");
    }
    else {
        prompt("Welcome, enter 'juju' to confirm");
    }
});
