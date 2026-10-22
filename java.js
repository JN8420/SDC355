// --- DOM Elements ---
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

// --- Dark Mode Slider ---
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', function(event) {
    if (event.target.checked) {
        bodyElement.classList.add('dark-theme');
        bodyElement.classList.remove('light-theme');
    } else {
        bodyElement.classList.add('light-theme');
        bodyElement.classList.remove('dark-theme');
    }
});

// --- Loop for Skills ---
const skills = ["HTML", "CSS", "JavaScript", "Java", "SQL"];
const skillsList = document.getElementById('skillsList');
skills.forEach(skill => {
    let li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
});

// --- Conditional Logic for Featured Content ---
const projectVideos = document.querySelectorAll('#projects .project-grid video');
const uniResources = document.getElementById('universityResources');
const personalProjs = document.getElementById('personalProjects');

if (projectVideos.length < 3) {
    uniResources.style.display = 'block';
    personalProjs.style.display = 'block';
} else {
    uniResources.style.display = 'none';
    personalProjs.style.display = 'block';
}

// --- Form Submit Interactivity ---
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    if (nameInput.value.trim() !== "") {
        alert(`Thank you, ${nameInput.value}, your message has been sent!`);
    } else {
        alert("Please enter your name before submitting.");
    }
});