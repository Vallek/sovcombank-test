export function themes() {
	const page = document.querySelector('.cal');
	const toggleSwitch = document.querySelector('.toggle__theme');

	// Switch theme function
	function switchTheme(state) {
		if (state === 'dark') {
			page.classList.add('dark');
			localStorage.setItem('cal-theme', 'dark');
			// Toggle style state
			toggleSwitch.classList.add('toggle__theme_dark');
		} 
		else if (state === 'light') {
			page.classList.remove('dark');
			localStorage.setItem('cal-theme', 'light');
			// Toggle style state
			toggleSwitch.classList.remove('toggle__theme_dark');
		}
	}

	// Sync last user choice
	if (localStorage.getItem('cal-theme') === 'dark') {
		switchTheme('dark');
	} 
	// Sync os setting
	if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
		switchTheme('dark');
	} 

	// Check theme switch real time
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		const newColorScheme = event.matches ? 'dark' : 'light';
		if (newColorScheme === 'dark') {
			switchTheme('dark');
		}
		if (newColorScheme === 'light') {
			switchTheme('light');
		} 
	});

	// Theme toggles
	toggleSwitch.addEventListener('click', () => {
		if (!localStorage.getItem('cal-theme') || 
		localStorage.getItem('cal-theme') === 'light') {
			switchTheme('dark');
		} else if (localStorage.getItem('cal-theme') === 'dark' || 
		toggleSwitch.classList.contains === 'toggle__theme_dark') {
			switchTheme('light');
		}
	});
}
