document.addEventListener("DOMContentLoaded", function () {
  const navs = document.getElementsByTagName("nav");
  const sections = [
    document.getElementById("about"),
    document.getElementById("projects"),
    // Add more sections if needed
  ];

  function activateNavOnScroll() {
    let index = sections.length - 1;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= 100) {
        index = i;
      }
    }
    for (let n = 0; n < navs.length; n++) {
      navs[n].classList.toggle("nav-active", n === index);
    }
  }

  window.addEventListener("scroll", activateNavOnScroll);

  // Optional: also activate on click
  for (let nav of navs) {
    nav.addEventListener("click", function () {
      for (let n of navs) {
        n.classList.remove("nav-active");
      }
      nav.classList.add("nav-active");
    });
  }
});
