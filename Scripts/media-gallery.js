// Nav Bar 

function toggleBtn() {

    const navLinks = document.getElementById('nav_connections')
    const contactBtn = document.getElementById('contact')

    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        // contactBtn.style.display = "block";
    } else {
        navLinks.style.display = "none"
        // contactBtn.style.display = "none"
    }

}

//fix nav bar for mobile responsive only this part is left!