// Hiển thị năm hiện tại
document.getElementById("year").textContent = new Date().getFullYear();

// Hiệu ứng hiện section khi cuộn
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Cập nhật giá trị số khi kéo slider
document.querySelectorAll('.slider').forEach(slider => {
  const valueSpan = slider.nextElementSibling;
  slider.addEventListener('input', () => {
    valueSpan.textContent = slider.value;
  });
});
