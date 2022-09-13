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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 * 
 */
 const navbar = document.getElementById('navbar__list');
 const sections = document.querySelectorAll('section');
 
 /**
  * End Global Variables
  * Start Helper Functions
  * 
  */
 
 //Got resource from Javascript tutorial.net
 const isInViewport = function (elem) {
    const rect = elem.getBoundingClientRect();
    return (
       rect.top >= 0 &&
       rect.left >= 0 &&
       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
 };
 
 
 /**
  * End Helper Functions
  * Begin Main Functions
  * 
  */
 
 // build the nav
 function buildNav() {
    //for each section...
    sections.forEach((section) => {
       //for each section, make it into a list items
       const item = document.createElement('li');
       //create link to add to listItem
       const itemLink = document.createElement('a');
       //Add link to class list 
       itemLink.classList.add('menu__link');
       //set the text of the list item to the text stored in data-nav
       itemLink.textContent = section.dataset.nav;
       //add link to list item
       item.appendChild(itemLink);
       //then add listItem
       navbar.appendChild(item);
    });
 
 }
 
 // Add class 'active' to section when near top of viewport
 function addActive() {
 
 //get links
 const links = navbar.getElementsByClassName('menu__link')
 //console.log(links);
 let activeLink = null;
    //add event listener for scrolling event
    window.addEventListener('scroll', () => {
       //for each section
       sections.forEach((section) => {
         for (let i = 0; i < links.length; i++) {
            //get the corresponding link
            let link = links[i];
            let currLink = link.textContent;
            if (currLink === section.getAttribute('data-nav')) {
               activeLink = link;
            }
         }
          //check if section is in viewport
          if (isInViewport(section)) {
             //add it to the active class if true and make the link active
             section.classList.add('your-active-class');
             activeLink.classList.add('active');
           } else {
             //remove it if false, and make the link inactive
             section.classList.remove('your-active-class');
             activeLink.classList.remove('active');
          }
 
       });
    });
 
 }
 
 // Scroll to anchor ID using scrollTO event
 
 function scrollToSec() {
    //get navbar links
    const navLinks = document.getElementsByClassName('menu__link');
    //add an event listener for each link, if clicked
    for (let i = 0; i < navLinks.length; i++) {
       navLinks[i].addEventListener('click', (event) => {
          event.preventDefault();
          //get each links respective secionID
          const data = navLinks[i].textContent;
          const newData = data.replace(/\s/g, "");
          const secId = newData.toLowerCase();
          //then find section on page and scroll to it
          let sec = document.getElementById(secId);
          sec.scrollIntoView({
             behavior: "smooth"
          });
       });
    }
 
 }
 
 /**
  * End Main Functions
  * Begin Events
  * 
  */
 
 // Build menu 
 
 // Scroll to section on link click
 
 // Set sections as active
 
 buildNav();
 addActive();
 scrollToSec();