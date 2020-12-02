let logoutUrl = "https://password-reset-api.herokuapp.com/logout";

let loginUrl = "https://password-reset-api.herokuapp.com/login";

//let loginUrl = "http://localhost:8000/login";

(async () => {
	const response = await fetch(loginUrl, { credentials: "include" });
	let data = await response.json();

	if (!data.loggedIn) {
		location.href = "index.html";
	}
})();

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
