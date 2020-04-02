/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navBarList = document.querySelector("#navbar__list")
const sections = document.getElementsByTagName('section')
/**
 * End Global Variables
 * Start Helper Functions
 *
*/
//returns a link with a nav element inside it based on section name and id
const createNavElement = (sectionName, sectionId) => {
    let element = document.createElement('li')
    let link = document.createElement('a')
    element.innerHTML = sectionName
    element.className = "navbar__menu"
    link.className = "menu__link"
    link.setAttribute("href", `#${sectionId}`)
    link.appendChild(element)
    return link
}



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const setNav = () => {
    for(let i = 0; i < sections.length; i++) {
        let sectionId = sections[i].getAttribute("id")
        let sectionName = sections[i].getAttribute("data-nav")
        navBarList.appendChild(createNavElement(sectionName, sectionId))
    }
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener('DOMContentLoaded', setNav)

// Scroll to section on link click

// Set sections as active