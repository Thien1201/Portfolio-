document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");
  const circles = document.querySelectorAll(".circle");

  function animate() {
    progressBars.forEach(bar => {
      const percent = bar.getAttribute("data-percent");
      bar.style.width = percent;
    });

    circles.forEach(circle => {
      const percent = parseInt(circle.getAttribute("data-percent"));
      const deg = percent * 3.6;
      circle.style.background = `conic-gradient(#00eaff ${deg}deg, #222 ${deg}deg)`;
    });
  }

  function reset() {
    progressBars.forEach(bar => bar.style.width = "0");
    circles.forEach(circle => {
      circle.style.background = "conic-gradient(#00eaff 0deg, #222 0deg)";
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate();
      } else {
        reset();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(document.querySelector("#slide5"));
});
