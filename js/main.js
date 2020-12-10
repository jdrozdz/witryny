// C -> Create -> POST
// R -> Read -> GET
// U -> Update -> PUT
// D -> Delete -> DELETE
// Check -> OPTIONS

// #element -> id o nazwie 'element'
// .element -> clasa o nazwie 'element'
var container = document.querySelector("#app");
var form = document.createElement("form");
var row1 = document.createElement("div");
var row2 = document.createElement("div");

form.method = "POST";

// -- elementy wiersza 1
var label1 = document.createElement("label"); // opis pola
var loginInput = document.createElement("input"); // username, login
var loginError = document.createElement("p");

label1.innerHTML = "<b>Login:</b>";
label1.setAttribute("for", "username");
loginInput.name = "username";
loginInput.id = "username";
loginInput.value = "anonymous";
loginError.innerHTML = "Podany login jest nieprawidłowy";
loginError.style.display = "none";
loginError.style.visibility = "hidden";

// -- elementy wiersza 2
var label2 = document.createElement("label"); // opis pola
var passwordInput = document.createElement("input"); // username, login
label2.innerHTML = "<b>Hasło:</b>";
label2.setAttribute("for", "userPassword");
passwordInput.id = "userPassword";
passwordInput.name = "userPassword";
passwordInput.type = "password";

function ShowHideLoginError(isError) { // isError to jest wartość logiczna (boolean)
    if (isError === true) {
        loginError.style.display = "block";
        loginError.style.visibility = "visible";
    } else if(isError === false) {
        loginError.style.display = "none";
        loginError.style.visibility = "hidden";
    }
}

// Pole typu INPUT
// posiada: value, placeholder, id, class
// <obj>.addEventListener(<event name>, callback);
loginInput.addEventListener("keyup", function() {
    const loginLength = this.value.length;
    console.log(loginLength);
    if (loginLength < 8) {
         ShowHideLoginError(true);
    } else {
        console.log(loginLength);
        ShowHideLoginError(false);
    }
});

var button = document.createElement("button");
button.type = "button";
button.innerText = "OK";

row1.appendChild(label1);
row1.appendChild(loginInput);
row1.appendChild(loginError);

row2.appendChild(label2);
row2.appendChild(passwordInput);

form.appendChild(row1);
form.appendChild(row2);
form.appendChild(button);

container.appendChild(form);

