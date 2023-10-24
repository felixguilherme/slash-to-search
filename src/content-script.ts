let possibleSearchInputs = document.querySelectorAll(
	`input[type="search"], textarea[type="search"], input[name*="search"], textarea[name*="search"], input[aria-label*="Search"], textarea[aria-label*="Search"], input[id*="search"], textarea[id*="search"], input[placeholder*="Search"], textarea[placeholder*="Search"], input[data-search="true"], textarea[data-search="true"]`
) as NodeListOf<HTMLInputElement>;

document.addEventListener('keypress', keyEvent => {
	if (keyEvent.key === '/') {
		keyEvent.preventDefault();
		possibleSearchInputs[0].focus();
	}
});
