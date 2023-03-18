
// Requesting Aida for form in html file
(function () { var r, d = document, gt = d.getElementById, cr = d.createElement, tg = d.getElementsByTagName, id = "aidaform-embed"; if (!gt.call(d, id)) { r = cr.call(d, "script"); r.id = id; r.src = "https://embed.aidaform.com/embed.js"; (d.head || tg.call(d, "head")[0]).appendChild(r); } })()

toggleBtn()
// Toggle Button for mobile

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

