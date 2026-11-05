const bodyElement = document.body;
const mainArea = document.querySelector('main'); 

// 1. Custom Welcome Modal Logic (Replaces prompt)
const welcomeModal = document.getElementById('welcomeModal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (closeModalBtn && welcomeModal) {
    closeModalBtn.addEventListener('click', function() {
        welcomeModal.style.display = 'none';
    });
}

// Temporary Welcome Notification Banner
const notification = document.createElement('div');
notification.textContent = "Thank you for checking out my portfolio!";
notification.style.backgroundColor = "#1d4ed8";
notification.style.color = "white";
notification.style.padding = "10px";
notification.style.textAlign = "center";
notification.style.borderRadius = "4px";
notification.style.marginBottom = "15px";

mainArea.insertBefore(notification, mainArea.firstChild);

setTimeout(() => {
    notification.remove();
}, 3500);

// 2. Persist Dark Mode Preference with localStorage
const themeToggle = document.getElementById('themeToggle');

// Check for saved preference when the page loads
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    bodyElement.classList.add('light-theme');
    bodyElement.classList.remove('dark-theme');
    themeToggle.checked = false;
} else {
    // Default to dark mode or apply saved 'dark' preference
    bodyElement.classList.add('dark-theme');
    bodyElement.classList.remove('light-theme');
    themeToggle.checked = true;
}

// Store preference when the user toggles Dark Mode
themeToggle.addEventListener('change', function(event) {
    if (event.target.checked) {
        bodyElement.classList.add('dark-theme');
        bodyElement.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        bodyElement.classList.add('light-theme');
        bodyElement.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Skills List Generation
const skills = [
    { name: "HTML", link: "#projects" },
    { name: "CSS", link: "#projects" },
    { name: "JavaScript", link: "#projects" },
    { name: "GitHub", link: "https://github.com" }
];
const skillsList = document.getElementById('skillsList');
skills.forEach(skill => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = skill.name;
    a.href = skill.link;
    a.style.color = "var(--text-color)";
    a.style.textDecoration = "none";
    a.style.fontWeight = "bold";
    
    a.addEventListener('mouseover', () => a.style.textDecoration = "underline");
    a.addEventListener('mouseout', () => a.style.textDecoration = "none");

    li.appendChild(a);
    skillsList.appendChild(li);
});

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

const aboutHeading = document.querySelector('#about h2');
const contactSection = document.getElementById('contact');

if (aboutHeading) {
    aboutHeading.textContent = "About My Project";
    aboutHeading.style.color = "#1d4ed8";               
}

if (contactSection) {
    contactSection.style.borderTop = "4px solid #1d4ed8"; 
}

// Contact Form Submission Logic
const submitBtn = document.getElementById('submitBtn');
const nameInput = document.getElementById('nameInput');
const contactForm = document.querySelector('.contact-form');

const formStatusMessage = document.createElement('p');
formStatusMessage.style.fontWeight = 'bold';
formStatusMessage.style.marginTop = '10px';

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    if (nameInput.value.trim() !== "") {
        formStatusMessage.textContent = "Sending message...";
        formStatusMessage.style.color = "#d97706"; 
        contactForm.appendChild(formStatusMessage);
        
        setTimeout(() => {
            formStatusMessage.textContent = "Message sent successfully!";
            formStatusMessage.style.color = "#16a34a"; 
        }, 2500); 
        
    } else {
        formStatusMessage.textContent = "Please enter your name before submitting.";
        formStatusMessage.style.color = "#dc2626"; 
        contactForm.appendChild(formStatusMessage);
    }
});