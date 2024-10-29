function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

  
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }


    if (username === "user" && password === "password") {
        alert("Login successful");
       
    } else {
        alert("Invalid username or password.");
    }
}
