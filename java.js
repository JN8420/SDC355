// --- DOM Elements ---
const bodyElement = document.body;
const welcomeMessage = document.getElementById('welcomeMessage');
const mainArea = document.querySelector('main'); 

// --- Visitor Welcome Prompt & Timed Pop-up ---
const visitorName = prompt("Welcome! What is your name?");
let displayName = "Visitor";

if (visitorName !== null && visitorName.trim() !== "") {
    displayName = visitorName.trim();
}
welcomeMessage.textContent = `Welcome, ${displayName}!`;

// Dynamically create and show the pop-up right after the prompt
const notification = document.createElement('div');
notification.textContent = `Thank you for checking out my portfolio, ${displayName}!`;
notification.style.backgroundColor = "#1d4ed8";
notification.style.color = "white";
notification.style.padding = "10px";
notification.style.textAlign = "center";
notification.style.borderRadius = "4px";
notification.style.marginBottom = "15px";

// Insert the notification at the top of the main area
mainArea.insertBefore(notification, mainArea.firstChild);

// Remove the pop-up after 3.5 seconds
setTimeout(() => {
    notification.remove();
}, 3500);

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

// Reference and Modify Existing Elements with Selectors
// Selects the 'About' header and 'Contact' section to change content and styles
const aboutHeading = document.querySelector('#about h2');
const contactSection = document.getElementById('contact');

if (aboutHeading) {
    aboutHeading.textContent = "About Me & My Journey"; // Changed content
    aboutHeading.style.color = "#1d4ed8";               // Changed style
}

if (contactSection) {
    contactSection.style.borderTop = "4px solid #1d4ed8"; // Added border style
}

// Add a Timed Confirmation for Form Submissions
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const contactForm = document.querySelector('.contact-form');

// Create a paragraph element dynamically for the status message
const formStatusMessage = document.createElement('p');
formStatusMessage.style.fontWeight = 'bold';
formStatusMessage.style.marginTop = '10px';

submitBtn.addEventListener('click', function(event) {
    // a. Default behavior is prevented
    event.preventDefault();
    
    if (nameInput.value.trim() !== "") {
        // b. Display a loading/"sending message..." element
        formStatusMessage.textContent = "Sending message...";
        formStatusMessage.style.color = "#d97706"; // Orange color for pending
        contactForm.appendChild(formStatusMessage);
        
        // c. Use setTimeout() to delay confirmation by 2-3 seconds
        setTimeout(() => {
            // d. Replace the loading message with the confirmation message
            formStatusMessage.textContent = "Message sent successfully!";
            formStatusMessage.style.color = "#16a34a"; // Green color for success
        }, 2500); // 2.5 second delay
        
    } else {
        // Error handling if name is blank
        formStatusMessage.textContent = "Please enter your name before submitting.";
        formStatusMessage.style.color = "#dc2626"; // Red color for error
        contactForm.appendChild(formStatusMessage);
    }
});