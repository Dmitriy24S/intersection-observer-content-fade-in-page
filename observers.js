// black nav middle hero fade

const header = document.querySelector("header");
const heroCenter = document.querySelector(".home-intro");

const blackNavOptions = {
  rootMargin: "-200px 0px -200px 0px",
};
const heroTitle = heroCenter.getElementsByTagName("h1");

const headCenterObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled-black");
    } else {
      header.classList.remove("nav-scrolled-black");
    }
  });
}, blackNavOptions);

headCenterObserver.observe(heroTitle[0]);

// nav bg color fade change
const heroCenterFadeOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
}, heroCenterFadeOptions);

sectionOneObserver.observe(heroCenter);

// fade in content
const content = document.querySelectorAll(".content-container");
const aboutSection = document.querySelector(".home-about");

const contentFadeOptions = {
  rootMargin: "0px 0px -300px 0px",
};

const contentObserver = new IntersectionObserver(function (entries, contentObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      contentObserver.unobserve(entry.target);
    }
  });
}, contentFadeOptions);

content.forEach((info) => {
  contentObserver.observe(info);
});
contentObserver.observe(aboutSection);

// nav toggle menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".main-nav");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
