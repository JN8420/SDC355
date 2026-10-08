// --- DOM Elements ---
const themeDropdown = document.getElementById('themeDropdown');
const bodyElement = document.body;
const welcomeMessage = document.getElementById('welcomeMessage');

// --- Visitor Welcome Prompt ---
// Ask the user for their name as soon as the script loads
const visitorName = prompt("Welcome! What is your name?");

// Check if they typed a name (and didn't hit cancel or leave it blank)
if (visitorName !== null && visitorName.trim() !== "") {
    welcomeMessage.textContent = `Welcome, ${visitorName.trim()}!`;
} else {
    // Fallback if they leave it blank
    welcomeMessage.textContent = "Welcome, Visitor!"; 
}

// --- Theme Dropdown Logic ---
// Listen for a change in the dropdown menu
themeDropdown.addEventListener('change', function(event) {
    const selectedTheme = event.target.value;
    
    if (selectedTheme === 'light') {
        // Remove dark theme class and add light theme class
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
    } else {
        // Remove light theme class and add dark theme class
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
    }
});