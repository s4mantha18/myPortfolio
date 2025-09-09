document.addEventListener("DOMContentLoaded", () => {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = [
    document.getElementById("about"),
    document.getElementById("projects"),
    // Add more sections if needed
  ].filter(Boolean); // Remove nulls

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) =>
            link.classList.toggle(
              "nav-active",
              link.getAttribute("href") === `#${entry.target.id}`
            )
          );
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));
});
