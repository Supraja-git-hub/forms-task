function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let user = users.find(u => u.email === email && u.password === password);
}