document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', () => {
      form.classList.add('is-sending');
    });
  }
});
