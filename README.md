# SDC355
Simple Project Overview:
Week 1 - Started Project 
Week 2 - Added to it
Week 3 - Adjusted
Week 4 - Remade welcome message
Week 5 - (Current)

# Joseph Nettleton (JN8420) - Developer Project Portfolio

## Introduction
Welcome to my personal developer portfolio website! This interactive web page showcases my software development coursework, technical skills, and hands-on coding projects completed at ECPI University. It features a customizable Dark/Light theme, a dynamic project showcase, a custom welcome modal, and an interactive contact form.

## Languages, Libraries, and Browser APIs Used
* **HTML5:** Provides the semantic structure, navigation, contact form, and video background containers.
* **CSS3:** Handles styling, custom properties (CSS variables) for Dark/Light themes, Flexbox grid layouts, custom hover tooltips, and modal overlays.
* **JavaScript (ES6+):** Powers client-side interactivity, dynamic DOM element creation, event listeners, form validation, and state management.
* **Web Storage API (`localStorage` & `sessionStorage`) & JSON:** 
  * `localStorage` persists the user's Dark/Light mode preference across browser sessions.
  * `sessionStorage` combined with `JSON.stringify()` and `JSON.parse()` stores and retrieves the portfolio's custom project objects to dynamically render the project showcase.
* **External Libraries:** None (built entirely with vanilla HTML, CSS, and JavaScript).

## Dependencies & Asset Requirements
To run and display this portfolio page properly, ensure the following file structure and media assets are present in the root directory:
* `index.html` (Main HTML structure)
* `stylesheet.css` (Page styling and theme rules)
* `java.js` (Interactive JavaScript logic and dynamic rendering)
* `images/` directory containing:
  * `BackGround.mp4`
  * `PersonalProjects.mp4`
  * `Project 1.mp4`
  * `Project 2.mp4`
  * `Project 3.mp4`
  * `Project 4.mp4`
* **Browser Requirement:** Any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari) with JavaScript and Web Storage enabled.

## How to Run the Page
1. Clone or download this repository to your local machine.
2. Ensure all `.mp4` media files are located inside the `images/` folder.
3. Open `index.html` directly in your web browser, or launch it using the **Live Server** extension in Visual Studio Code.