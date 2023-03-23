// Nav Bar 

toggleBtn()
function toggleBtn() {

    const navLinks = document.getElementById('nav_connections')
    const web_body = document.getElementById('web_body')

    if (navLinks.style.right === "450px") {
        navLinks.style.right = "0px";
        web_body.style.overflow = "hidden";
    } else {
        navLinks.style.right = "450px";
        web_body.style.overflow = "visible";
    }

}