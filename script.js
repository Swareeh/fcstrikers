// Tryouts form
(function () { var r, d = document, gt = d.getElementById, cr = d.createElement, tg = d.getElementsByTagName, id = "aidaform-embed"; if (!gt.call(d, id)) { r = cr.call(d, "script"); r.id = id; r.src = "https://embed.aidaform.com/embed.js"; (d.head || tg.call(d, "head")[0]).appendChild(r); } })()

// Toggle Button

function toggleBtn() {
  const navLinks = document.getElementsByClassName('nav_links')

  if (navLinks.style.display === "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }

}

