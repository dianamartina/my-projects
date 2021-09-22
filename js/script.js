// Navigation elements
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const heroAreaEl = document.querySelector(".hero-area");
const allLinksNavEl = document.querySelectorAll(".nav-link");
const btnMoreAboutEl = document.getElementById("btn-more-about");

// About us elements
const fadeInEl = document.querySelectorAll(".fade-in");
const btnLessAboutEl = document.getElementById("btn-less-about");
const extendAboutEl = document.querySelector(".extend-about-me");

// Projects
const projectPositionEl = document.querySelectorAll(".project-position");
const projectSlideInEl = document.querySelectorAll(".project-slide-in");

// const slideInEl = document.querySelectorAll(".slide-in");

// --------- Navigation ---------

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// --------- Navigation menu onScroll ---------

const sectionOneOptions = {
  rootMargin: "-400px 0px 0px 0px ",
};
const sectionOneObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    // console.log(entry.target);
    if (!entry.isIntersecting) {
      headerEl.classList.add("header-scrolled");
    } else {
      headerEl.classList.remove("header-scrolled");
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(heroAreaEl);

// --------- Closing menu ---------

allLinksNavEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // console.log(e);
    e.preventDefault();
    const href = link.getAttribute("href");
    // console.log(href);

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

    if (link.classList.contains("nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// --------- Extend about me section ---------

btnMoreAboutEl.addEventListener("click", function () {
  extendAboutEl.style.display = "block";
  btnMoreAboutEl.style.display = " none";
  btnLessAboutEl.style.display = " block";
});

btnLessAboutEl.addEventListener("click", function () {
  extendAboutEl.style.display = "none";
  btnMoreAboutEl.style.display = " block";
  btnLessAboutEl.style.display = " none";
});

// --------- Project position odd/even---------
projectPositionEl.forEach((project, i) => {
  // console.log(project);
  if (i % 2 === 0) {
    project.classList.add("project-odd");
  } else {
    project.classList.add("project-even");
  }
  // console.log(projectPositionEl);
});

// --------- Project slider-in effect left-right ---------

// Function add slide left/right
const projectSlideInEffect = (i, from) => {
  projectSlideInEl[i].classList.add(from);
};

projectSlideInEl.forEach((slide, i) => {
  // console.log(slide);
  while (i % 2 === 0) {
    if (i % 4 === 0) {
      // projectSlideInEl[i].classList.add("from-left");
      // projectSlideInEl[i + 1].classList.add("from-right");
      projectSlideInEffect(i, "from-left");
      projectSlideInEffect(i + 1, "from-right");
    } else {
      //   projectSlideInEl[i].classList.add("from-right");
      //   projectSlideInEl[i + 1].classList.add("from-left");
      projectSlideInEffect(i, "from-right");
      projectSlideInEffect(i + 1, "from-left");
    }
    i++;
  }
});

// --------- Appearance onScroll ---------

const appearOnScrollOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px ",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOnScrollOptions);

fadeInEl.forEach((fader) => {
  appearOnScroll.observe(fader);
});

projectSlideInEl.forEach((slider) => {
  appearOnScroll.observe(slider);
});
