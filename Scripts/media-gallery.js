// Nav Bar 

function toggleBtn() {

    const navLinks = document.getElementById('nav_links')
    const contactBtn = document.getElementById('contact-btn')

    if (navLinks.style.display === "none") {
        navLinks.style.display = "block";
        contactBtn.style.display = "block";
    } else {
        navLinks.style.display = "none"
        contactBtn.style.display = "none"
    }

}