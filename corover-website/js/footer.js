let footerLinks = [...document.querySelectorAll("footer .column > div")];
footerLinks = footerLinks.slice(1);

const handleFooterLinkClick = (link) => {
  if (window.innerWidth < 801) {
    if (link.className === "selected-footer-link") link.className = "";
    else link.className = "selected-footer-link";
    footerLinks.forEach((l) => {
      if (l !== link) l.className = "";
    });
  }
};

footerLinks.forEach((link, index) => {
  link.addEventListener("click", () => handleFooterLinkClick(link));
});

// const header = document.getElementsByTagName("header")[0];

// header.addEventListener("mouseleave", () => {
//   navMenus.forEach((menu) => {
//     if (window.innerWidth > 1100) menu.style.display = "none";
//   });
// });

// const hamburger = document.querySelector("header .hamburger");
// const closeBtnHam = document.querySelector(".hamburger-close");

// const nav = document.querySelector("header nav");
// hamburger.addEventListener("click", () => {
//   nav.style.display = "block";
//   hamburger.style.display = "none";
//   closeBtnHam.style.display = "block";
//   document.getElementsByTagName("html")[0].style.overflow = "hidden";
// });

// closeBtnHam.addEventListener("click", () => {
//   nav.style.display = "none";
//   hamburger.style.display = "block";
//   closeBtnHam.style.display = "none";
//   document.getElementsByTagName("html")[0].style.overflow = "auto";
// });
