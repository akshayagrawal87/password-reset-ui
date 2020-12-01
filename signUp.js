let registerUrl = "https://password-reset-api.herokuapp.com/register";

$(".alert").hide();

let email = document.getElementById("username");

let password = document.getElementById("password");

let registerButton = document.querySelector(".registerButton");
(async () => {
	let form = document.querySelector("#signUpForm");

	form.addEventListener("input", (e) => {
		if (email.value.length > 0 && password.value.length > 0) {
			registerButton.removeAttribute("disabled");
		} else {
			registerButton.setAttribute("disabled", "disabled");
		}
	});

	form.addEventListener("submit", checkOnSubmit, true);
})();

async function checkOnSubmit() {
	let body = {
		username: email.value,
		password: password.value,
	};

	const response = await fetch(registerUrl, {
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json",
		},
	});

	let data = await response.json();

	if (data.created) {
		location.href = "index.html";
	} else {
		let alertMesssge = document.querySelector(".alertMessage");
		alertMesssge.innerHTML = data.message;

		$(".alert").show();
		setTimeout(() => {
			$(".alert").hide();
		}, 9000);
	}
}
