function loadHome() {
    //HTML for the about me section
    let info = `
        <div class="row justify-content-md-center">
            <div class="card mb-3 mt-3 col" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="./assets/prof-pic.png" class="img-fluid rounded-start" alt="profile picture">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">WEB DEV AND STUDENT</h5>
                        <p class="card-text">Let's say I love being a developer, here is where that text about mission and vision goes and motivates you to <a href="https://danny-huasco.github.io/contact">contact me</a>.</p>
                        <p class="card-text"><small class="text-body-secondary">"Love what you do and you'll never have to work"</small></p>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card mb-3 mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Contact Information</h5>
                        <p class="card-text"><strong>Email:</strong> d.huascomiranda@gmail.com</p>
                        <p class="card-text"><strong>Phone:</strong> (904) 707-1627</p>
                        <p class="card-text">
                            <strong>Social Media:</strong>
                            <a type="button" class="btn btn-primary" href="https://www.linkedin.com/in/danielhuascomiranda/" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                            <a type="button" class="btn btn-dark" href="https://www.github.com/danny-huasco" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
    //function to load repositories from GitHub API
    async function loadRepositories() {
        const response = await fetch('https://api.github.com/users/danny-huasco/repos');
        const repos = await response.json();
        const repoList = document.getElementById('repo-list');
        
        repos.forEach(repo => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
            repoList.appendChild(listItem);
        });
    }

    loadRepositories();
    //HTML for the repositories section
    let links = `
        <div class="row justify-content-md-center">
            <div class="col">
                <div class="card mb-3 mt-3">
                    <div class="card-body">
                        <h5 class="card-title">GitHub Repositories</h5>
                        <p class="card-text">Here are some of my projects on GitHub, they're not prepared to be a portfolio, but it's some of the exercises that I've done in my academic life:</p>
                        <ul id="repo-list" class="list-group">
                            <!-- Repositories will be dynamically loaded here -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>        
    `;
    //HTML for the resume section
    let resume =`<div class="accordion mb-3 mt-2" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne">
                            <b>RESUME</b>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <a href="./assets/resume.pdf" type="button" class="btn btn-primary mb-3" target="_blank">Download Resume</a>
                            <embed src="./assets/resume.pdf" type="application/pdf" width="100%" height="800px" />
                        </div>
                        </div>
                    </div>
                </div>`;





    return `
        <div class="container-fluid">${info}</div>
        <div class="container-fluid">${links}</div>
        <div class="container-fluid">${resume}</div>
    `;

}

function loadContact() {
    let body = '';

    body = `
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <div class="card mb-3 mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Describe what you're looking for!</h5>
                        <small>Make sure to include all details that can be transformed into fucntional software</small>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Project Proposal</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;

    return body;
}
export { loadHome, loadContact };
