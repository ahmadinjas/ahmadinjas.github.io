




const reveals = document.querySelectorAll(".about, .card, #work h2");
window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add("active");
      el.classList.add("reveal");
    }
  });
});
