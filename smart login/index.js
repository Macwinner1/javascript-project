
let email;
let password;

document.getElementById("log").onclick = function () {
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    document.getElementById("usertag").textContent = `Hello, ${email}`
}

