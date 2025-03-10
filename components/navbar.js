//loads the nav bar into every page visited
function loadNavBar(page) {
    let navBar = '';
    if(page =='home'){

        navBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
                         <div class="container-fluid">
                             <a class="navbar-brand" href="https://danny-huasco.github.io"><b>DANNY HUASCO</b>&nbsp<small>Web Developer</small></a>
                             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                 <span class="navbar-toggler-icon"></span>
                             </button>
                             <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                 <div class="navbar-nav ">
                                     <a class="nav-link active" aria-current="page" href="https://danny-huasco.github.io" id="homeNav">Home</a>
                                     <a class="nav-link" href="https://danny-huasco.github.io/contact" id="contactNav">Contact</a>
                                 </div>
                             </div>
                         </div>
                     </nav>`;
    }else{
        navBar = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
                         <div class="container-fluid">
                             <a class="navbar-brand" href="https://danny-huasco.github.io"><b>DANNY HUASCO</b>&nbsp<small>Web Developer</small></a>
                             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                 <span class="navbar-toggler-icon"></span>
                             </button>
                             <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                 <div class="navbar-nav ">
                                     <div class="navbar-nav ">
                                        <a class="nav-link" href="https://danny-huasco.github.io" id="homeNav">Home</a>
                                        <a class="nav-link active" aria-current="page" href="https://danny-huasco.github.io/contact" id="contactNav">Contact</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </nav>`;
    }
    return navBar;
}
export default loadNavBar;