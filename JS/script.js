function add_user() {
    let user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirm_password: document.getElementById("confirm_password").value,
        birthday: document.getElementById("birthday").value,
        gender: document.getElementById("register").gender.value,
        score: 0,

    }


    // This is to ensure that the required value is inputed into it's text field.

    if (user.username === "" || user.email === "" || user.password === "" || user.confirm_password === "" || user.birthday === "" || user.gender === "") {
        alert("please complete the form")
    } else {

        let saved_username = JSON.parse(localStorage.getItem(user.username))

        if (saved_username != undefined) {
            alert("user exists already")
        } else {
            localStorage.setItem(user.username, JSON.stringify(user))
        }
    }
    ValidateEmail()
}

var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('confirm_password').value) {
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'matching';
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'not matching';
        document.getElementById('submit').disabled = true;
    }
}

function ValidateEmail() {
    var mailInput = document.getElementById("email").value;
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mailInput.match(mailFormat)) {
        document.getElementById("e-message").style.color = "green";
        document.getElementById("e-message").innerHTML = "valid email address!";
        return true;
    }
    else {
        document.getElementById("e-message").style.color = 'red';
        document.getElementById("e-message").innerHTML = "You have entered an invalid email address!";
        return false;
    }
}

window.onload = updatelogin

function checklogin() {

    let username = document.getElementById("loguser").value;

    if (localStorage.getItem(username) != undefined) {

        let inputpassword = document.getElementById("logpass").value

        let userobject = JSON.parse(localStorage.getItem(username))

        if (userobject !== undefined) {
            let user = JSON.parse(localStorage[username])
            let password = document.getElementById("logpass").value

            if (user.password == password) {

                sessionStorage.signedInUsername = user.username

            } else {

                alert("Incorrect password")

            }

        }

        if (userobject.password == inputpassword) {

            alert("Hi  " + userobject.username)

        } else {

            alert("Incorrect password")

        }
    } else {

        alert("Username does not exist.")

    }
}

function updatelogin() {

    if (sessionStorage.signedInUsername != undefined) {

        let user = JSON.parse(localStorage[sessionStorage.signedInUsername])

        document.getElementById("login").innerHTML = user.username + ", Signed In";

        document.getElementById("register").innerHTML = "Logout";

        document.getElementById("register").hidden = false;

    }

}