let switchButton = document.querySelector('input[type="checkbox"]');
let modeText = document.querySelector('.mode');

console.log(switchButton);


function darkMode() {
    modeText.textContent = 'Dark Mode';
}
function lightMode() {
    modeText.textContent = 'Light Mode';
}

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('dark-mode', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('dark-mode', 'light');
        lightMode();
    }
}


switchButton.addEventListener("click", switchTheme)