//component imports
import loadFooter from './components/footer.js';
import loadNavBar from './components/navbar.js';
import { loadHome, loadContact } from './components/body.js';

//load footer
document.getElementById('footer').innerHTML = loadFooter();

// Check if the div with id "body" has a class "home" or "contact"
//and load the right <body> content
const body = document.getElementById('body');
if (body.classList.contains('home')) {
    //load header
    document.getElementById('header').innerHTML = loadNavBar('home');
    // Call a function if the class "contact" is present
    body.innerHTML = loadHome();
} else {
    //load header
    document.getElementById('header').innerHTML = loadNavBar('contact');
    // Call a different function if the class "contact" is not present
    body.innerHTML = loadContact();
}