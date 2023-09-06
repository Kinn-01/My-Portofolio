//Toggle icon Navbar
// let menuIcon = document.querySelector(".navbar-toggler-icon");
// let navbar = document.querySelector(".navbar-toggler");

// menuIcon.onclick = () => {
//   navbar.classList.toggle("active");
// };

// Scrool Section Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });

  // //Sticky Navbar
  // let header = document.querySelector("header");

  // header.classList.toggle("sticky", window.scrollY > 100);
};

//Goggle Spreadsheet

// const scriptURL = "https://script.google.com/macros/s/AKfycby4rpAi7GciLHCIuwgN2sR9mlbmGSbtBkW7YJy0M-YKL5aEZNPSNDCh4Dd1sJXt18nc/exec";
// const form = document.forms["web-portfolio"];
// const myAlert = document.querySelector(".alert");
// const myLoading = document.querySelector(".loading");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   myLoading.classList.toggle("loading");
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       myLoading.classList.toggle("loading");
//       myAlert.classList.toggle("alert");
//       form.reset();
//       console.log("Success!", response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
