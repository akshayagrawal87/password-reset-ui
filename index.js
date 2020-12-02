//let loginUrl = "https://password-reset-api.herokuapp.com/login";

let loginUrl = "http://localhost:8000/login";

(async () => {
	const response = await fetch(loginUrl, { credentials: "include" });
	let data = await response.json();

	console.log(data);

	if (data.loggedIn) {
		location.href = "welcome.html";
	}
})();

$(".alert").hide();

let email = document.getElementById("username");

let password = document.getElementById("password");

let loginButton = document.querySelector(".loginButton");
(async () => {
	let form = document.querySelector("#loginForm");

	form.addEventListener("input", (e) => {
		if (email.value.length > 0 && password.value.length > 0) {
			loginButton.removeAttribute("disabled");
		} else {
			loginButton.setAttribute("disabled", "disabled");
		}
	});

	form.addEventListener("submit", checkOnSubmit, true);
})();

async function checkOnSubmit() {
	loginButton.innerHTML = ` <span class="spinner-grow spinner-grow-sm"></span>
  Loading..`;

	let body = {
		username: email.value,
		password: password.value,
	};

	const response = await fetch(loginUrl, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});

	let data = await response.json();

	if (data.loggedIn) {
		location.href = "welcome.html";
	} else {
		$(".alert").show();
		setTimeout(() => {
			$(".alert").hide();
		}, 9000);
	}
}
