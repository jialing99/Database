const signButton = document.getElementById('submit-sign');
const signUsername = document.getElementById('sign-user');
const signEmail = document.getElementById('sign-email');
const signPassword = document.getElementById('sign-pass');

signButton.onclick = function(){
	fb.create(signUsername.value, signEmail.value, signPassword.value);
};

function onError(errorMessage){
	signUpMessage.textContent = errorMessage;
}