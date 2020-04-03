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
const setNav = () => {
    for(let i = 0; i < sections.length; i++) {
        let sectionId = sections[i].getAttribute("id")
        let sectionName = sections[i].getAttribute("data-nav")
        navBarList.appendChild(createNavElement(sectionName, sectionId))
    }
}

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

// NoteInteraction observer is not supported by IE. The rubric item clearly states all features should be usable across modern browsers. IE is not a modern browser ʘ‿ʘ .
let setActiveOptions = {
    root: null,
    rootMargin: '0px',
    threshold: [0.75, 1]
  }

const setActiveSection = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active-section')
        } else {
            entry.target.classList.remove('active-section')
        }
  })
};
let observer = new IntersectionObserver(setActiveSection, setActiveOptions);


const setObservers = () => {
    //iterate through sections and place observers on each one
    for(let i = 0; i < sections.length; i++) {
        let sectionId = sections[i].getAttribute("id")
        let target = document.querySelector(`#${sectionId}`);
        observer.observe(target);
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Add class 'active' to section when near top of viewport
setObservers()

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener('DOMContentLoaded', setNav)

