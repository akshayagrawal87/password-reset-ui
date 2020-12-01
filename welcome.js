let logoutUrl = "https://password-reset-api.herokuapp.com/logout";

let form = document.querySelector("#logoutForm");

form.addEventListener("submit", checkOnSubmit, true);

async function checkOnSubmit() {
	const response = await fetch(logoutUrl);

	let data = await response.json();

	if (data.loggedIn) {
		location.href = "welcome.html";
	} else {
		location.href = "index.html";
	}
}
