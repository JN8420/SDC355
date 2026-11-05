const bodyElement = document.body;
const mainArea = document.querySelector('main'); 

// 1. Custom Welcome Modal Logic & Audio Trigger
const welcomeModal = document.getElementById('welcomeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const bgAudio = document.getElementById('bgAudio');

if (closeModalBtn && welcomeModal) {
    closeModalBtn.addEventListener('click', function() {
        welcomeModal.style.display = 'none';
        
        // Starts playing your .m4a audio at 50% volume the moment "Close" is clicked
        if (bgAudio) {
            bgAudio.volume = 0.25; // Sets volume to 50%
            bgAudio.play().catch(error => {
                console.log("Audio playback prevented:", error);
            });
        }
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
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    bodyElement.classList.add('light-theme');
    bodyElement.classList.remove('dark-theme');
    themeToggle.checked = false;
} else {
    bodyElement.classList.add('dark-theme');
    bodyElement.classList.remove('light-theme');
    themeToggle.checked = true;
}

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

// 3. Custom Project Objects, Session Storage & Dynamic Rendering
const project1 = {
    title: "HTML",
    summary: "Built semantic web structures and accessible page layouts. Provides the core foundation for interactive web applications.",
    imageUrl: "images/Project 1.mp4",
    repoLink: "https://github.com/JN8420/SDC355"
};

const project2 = {
    title: "JavaScript",
    summary: "Implemented dynamic DOM manipulation, custom modals, and web storage persistence. Brings interactivity and logic to the user interface.",
    imageUrl: "images/Project 2.mp4",
    repoLink: "https://github.com/JN8420/SDC355"
};

const project3 = {
    title: "CSS",
    summary: "Designed responsive Flexbox layouts and custom dark/light theme variables. Styles the visual presentation and hover animations.",
    imageUrl: "images/Project 3.mp4",
    repoLink: "https://github.com/JN8420/SDC355"
};

const project4 = {
    title: "GitHub",
    summary: "Managed source code version control, repository branching, and project documentation. Hosts live deployments and collaborative workflows.",
    imageUrl: "images/Project 4.mp4",
    repoLink: "https://github.com/JN8420/SDC355"
};

// Array containing the newly created project objects
const defaultProjectsArray = [project1, project2, project3, project4];

// Check sessionStorage on page load
let projectsToDisplay = [];
const storedProjectsData = sessionStorage.getItem('portfolioProjects');

if (!storedProjectsData) {
    // If no data exists, convert array to string and store in sessionStorage
    sessionStorage.setItem('portfolioProjects', JSON.stringify(defaultProjectsArray));
    projectsToDisplay = defaultProjectsArray;
} else {
    // If data exists, retrieve and parse it using JSON.parse()
    projectsToDisplay = JSON.parse(storedProjectsData);
}

// Select the project section container and dynamically render each project
const projectGrid = document.querySelector('#projectGrid');

if (projectGrid) {
    projectGrid.innerHTML = ''; // Clear container before rendering

    projectsToDisplay.forEach(project => {
        // Create card container
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        // Create Project Title
        const titleEl = document.createElement('span');
        titleEl.className = 'project-title';
        titleEl.textContent = project.title;

        // Create Visual Media (supports your existing .mp4 files or standard images)
        let mediaEl;
        if (project.imageUrl.toLowerCase().endsWith('.mp4')) {
            mediaEl = document.createElement('video');
            mediaEl.src = project.imageUrl;
            mediaEl.autoplay = true;
            mediaEl.loop = true;
            mediaEl.muted = true;
            mediaEl.playsInline = true;
        } else {
            mediaEl = document.createElement('img');
            mediaEl.src = project.imageUrl;
            mediaEl.alt = `${project.title} icon`;
        }

        // Create Brief Summary
        const summaryEl = document.createElement('p');
        summaryEl.className = 'project-summary';
        summaryEl.textContent = project.summary;

        // Create Link to Repository
        const linkEl = document.createElement('a');
        linkEl.className = 'project-link';
        linkEl.href = project.repoLink;
        linkEl.target = '_blank';
        linkEl.textContent = 'View Project';

        // Append all elements to the project item container
        projectItem.appendChild(titleEl);
        projectItem.appendChild(mediaEl);
        projectItem.appendChild(summaryEl);
        projectItem.appendChild(linkEl);

        // Append project item to the DOM project grid
        projectGrid.appendChild(projectItem);
    });
}

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

// Check rendered project count for Featured Content visibility
const projectVideos = document.querySelectorAll('#projects .project-grid video, #projects .project-grid img');
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