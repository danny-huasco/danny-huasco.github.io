import './components/navbar.js';
import loadNavBar from './components/navbar.js';
//include('components/footer.js');

//load header
console.log("dentro de scripts");
document.getElementById('header').innerHTML = loadNavBar('home');
//load body

//load footer
