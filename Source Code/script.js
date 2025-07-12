// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Animated CTA button
const ctaBtn = document.querySelector('.cta-btn');
if (ctaBtn) {
  ctaBtn.addEventListener('mouseenter', () => {
    ctaBtn.style.transform = 'scale(1.08)';
  });
  ctaBtn.addEventListener('mouseleave', () => {
    ctaBtn.style.transform = 'scale(1)';
  });
}