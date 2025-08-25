document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // text scrolling / fading
  const texts = ["Web Developer", "Competetive Programmer", "Tech Enthusiast"];
  let index = 0;
  const span = document.querySelector(".hero-subtitle-highlight");

  if (span) {   //  extra safety
    setInterval(() => {
      span.style.opacity = 0; // fade out
      setTimeout(() => {
        index = (index + 1) % texts.length;
        span.textContent = texts[index];
        span.style.opacity = 1; // fade in
      }, 500);
    }, 2500);
  }
});


