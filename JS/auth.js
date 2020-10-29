const logEmail = document.getElementById("login-email");
const logPassword = document.getElementById("login-pass");
const loginButton = document.getElementById("login-enter");
const logMessage = document.getElementById("login-message");
const username = document.getElementById("username");
const logout = document.getElementById("logout");

loginButton.onclick = function() {
	fb.login(logEmail.value, logPassword.value);
};

logout.onclick = function() {
	fb.logout();
	console.log("logging out");
};

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}

function userLoggedIn(uid, displayName) {
	username.textContent = "Welcome " + displayName;
	document.body.classList.add('auth');
}

function noUser() {
	document.body.classList.remove('auth');
}