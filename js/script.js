// --------- Navigation ---------

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// --------- Closing menu ---------

const allLinksNav = document.querySelectorAll(".main-nav-link");

allLinksNav.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behaviour: "smooth" });

    //Scroll to section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (href !== "#" && !href.startsWith("#")) {
      window.open(`${href}`, "_blank");
    }

    //Close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// --------- Extend about me section ---------

const btnMoreAbout = document.getElementById("btn-more-about");
const btnLessAbout = document.getElementById("btn-less-about");
const extendAbout = document.querySelector(".extend-about-me");

btnMoreAbout.addEventListener("click", function () {
  extendAbout.style.display = "block";
  btnMoreAbout.style.display = " none";
  btnLessAbout.style.display = " block";
});

btnLessAbout.addEventListener("click", function () {
  extendAbout.style.display = "none";
  btnMoreAbout.style.display = " block";
  btnLessAbout.style.display = " none";
});
