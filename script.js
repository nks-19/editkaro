document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll('*');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Add class to animate
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

  elements.forEach(element => {
    observer.observe(element);
  });
});

// Hamburger
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");

  const isActive = navbar.classList.contains("active");
  hamburger.setAttribute("aria-expanded", isActive);
});

// Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const videoCards = document.querySelectorAll(".video-card");
const videos = document.querySelectorAll("video");

filterButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.target.dataset.category;

    videoCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block"; // Show the card
      } else {
        card.style.display = "none"; // Hide the card
      }
    });

    videos.forEach((video) => {
      if (!video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });
  });
});

// Auto type
var typed = new Typed(".auto-type", {
  strings: ["Social media marketing ", "Video editing", "Documentary","Color Grading",], // lowercase "strings"
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});