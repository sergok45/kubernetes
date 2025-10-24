// Animación simple de bienvenida
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header h1");
  header.innerHTML = header.textContent.split("").map(
    (char, i) => `<span style="animation-delay:${i*50}ms">${char}</span>`
  ).join("");

  const spans = document.querySelectorAll("header h1 span");
  spans.forEach(span => {
    span.style.display = "inline-block";
    span.style.transition = "transform 0.3s ease, color 0.3s ease";
    span.addEventListener("mouseover", () => {
      span.style.transform = "scale(1.5)";
      span.style.color = "#FFD700";
    });
    span.addEventListener("mouseout", () => {
      span.style.transform = "scale(1)";
      span.style.color = "#fff";
    });
  });
});
