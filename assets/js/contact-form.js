document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".php-email-form");
	const loading = form.querySelector(".loading");
	const errorMessage = form.querySelector(".error-message");
	const sentMessage = form.querySelector(".sent-message");

	// Hide messages initially
	loading.style.display = "none";
	errorMessage.style.display = "none";
	sentMessage.style.display = "none";

	form.addEventListener("submit", function (e) {
		e.preventDefault();

		// Reset messages
		errorMessage.style.display = "none";
		sentMessage.style.display = "none";

		// Get form values
		const name = form.querySelector('input[name="name"]').value.trim();
		const email = form.querySelector('input[name="email"]').value.trim();
		const subject = form.querySelector('input[name="subject"]').value.trim();
		const message = form.querySelector('textarea[name="message"]').value.trim();

		// Validate form
		if (!validateForm(name, email, subject, message)) {
			return;
		}

		// Show loading
		loading.style.display = "block";

		// Simulate form submission
		try {
			// Simulate API call delay
			setTimeout(() => {
				loading.style.display = "none";
				sentMessage.style.display = "block";

				// Reset form
				form.reset();

				// Hide success message after 5 seconds
				setTimeout(() => {
					sentMessage.style.display = "none";
				}, 5000);
			}, 1500);
		} catch (error) {
			loading.style.display = "none";
			showError("An error occurred. Please try again later.");
		}
	});

	function validateForm(name, email, subject, message) {
		let isValid = true;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		// Validate name
		if (name.length < 2) {
			showError("Please enter a valid name (minimum 2 characters)");
			isValid = false;
		}

		// Validate email
		if (!emailRegex.test(email)) {
			showError("Please enter a valid email address");
			isValid = false;
		}

		// Validate subject
		if (subject.length < 5) {
			showError("Please enter a subject (minimum 5 characters)");
			isValid = false;
		}

		// Validate message
		if (message.length < 10) {
			showError("Please enter a message (minimum 10 characters)");
			isValid = false;
		}

		return isValid;
	}

	function showError(message) {
		errorMessage.textContent = message;
		errorMessage.style.display = "block";

		// Hide error message after 5 seconds
		setTimeout(() => {
			errorMessage.style.display = "none";
		}, 5000);
	}
});
