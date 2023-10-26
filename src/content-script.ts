function getPossibleSearchInputs() {
	const possibleSearchInputs = document.querySelectorAll(
		`input[type="search"], textarea[type="search"], input[name*="search"], textarea[name*="search"], input[aria-label*="Search"], textarea[aria-label*="Search"], input[id*="search"], textarea[id*="search"], input[class*="search"], textarea[class*="search"], input[placeholder*="Search"], textarea[placeholder*="Search"], input[data-search="true"], textarea[data-search="true"]`
	) as NodeListOf<HTMLInputElement>;

	return possibleSearchInputs;
}

document.addEventListener('keypress', keyEvent => {
	if (keyEvent.key === '/') {
		const inputsFound = getPossibleSearchInputs();
		console.log(inputsFound);
		if (inputsFound.length > 0) {
			keyEvent.preventDefault();
			inputsFound[0].focus();
		}
	}
});
