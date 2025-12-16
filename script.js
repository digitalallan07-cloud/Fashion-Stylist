/*
 * ============================================
 * LUXURY EDITORIAL PORTFOLIO
 * Touch-Friendly Slider Experience
 * GSAP + ScrollTrigger Implementation
 * ============================================
 */

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO INTRO ANIMATION
// ============================================

const heroTimeline = gsap.timeline({
  defaults: {
    ease: 'power3.out',
    duration: 1.2
  }
});

heroTimeline
  .to('.hero-name .line', {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    delay: 0.3
  })
  .to('.hero-tagline', {
    opacity: 1,
    duration: 1
  }, '-=0.6');

// ============================================
// FEATURED WORK SLIDER
// ============================================

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const dotsContainer = document.querySelector('.slider-dots');

// Create dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateSlider() {
  // Remove active class from all slides and dots
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  // Add active class to current slide and dot
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');

  // Animate slide transition
  gsap.fromTo(slides[currentSlide],
    { opacity: 0, scale: 1.05 },
    { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
  );

  gsap.fromTo(slides[currentSlide].querySelector('.slide-content'),
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'power2.out' }
  );
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlider();
}

// Button events
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

const sliderWrapper = document.querySelector('.slider-wrapper');

sliderWrapper.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

sliderWrapper.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX - 50) nextSlide(); // Swipe left
  if (touchEndX > touchStartX + 50) prevSlide(); // Swipe right
}

// Auto-play (optional)
let autoplayInterval;

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 5000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

// Start autoplay
startAutoplay();

// Pause on hover (desktop)
sliderWrapper.addEventListener('mouseenter', stopAutoplay);
sliderWrapper.addEventListener('mouseleave', startAutoplay);

// Initialize first slide
updateSlider();

// ============================================
// FEATURED WORK SECTION REVEAL
// ============================================

gsap.fromTo('.work-header h2',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.featured-work',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.work-header p',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.featured-work',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

// ============================================
// PORTFOLIO GALLERY GRID
// ============================================

// Animate gallery header
gsap.fromTo('.gallery-header h2',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.portfolio-gallery',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.gallery-header p',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.portfolio-gallery',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Animate grid items with stagger
gsap.fromTo('.masonry-grid .grid-item',
  { opacity: 0, y: 60, scale: 0.95 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    stagger: {
      amount: 1.2,
      from: 'start'
    },
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.masonry-grid',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  }
);

// Add visible class for CSS transitions
const gridObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.masonry-grid .grid-item').forEach(item => {
  gridObserver.observe(item);
});

// ============================================
// ABOUT SECTION REVEAL
// ============================================

gsap.fromTo('.about-image',
  { scale: 0.9, opacity: 0 },
  {
    scale: 1,
    opacity: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-section',
      start: 'top 70%',
      end: 'top 30%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.about-content h2',
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 75%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.about-content p',
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.about-content',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.service-item',
  { opacity: 0, x: -30 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.services-list',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.stat-item',
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: '.stats-grid',
      start: 'top 85%',
      toggleActions: 'play none none reverse'
    }
  }
);

// ============================================
// CONTACT SECTION
// ============================================

gsap.fromTo('.contact-canvas h2',
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 70%',
      toggleActions: 'play none none reverse'
    }
  }
);

gsap.fromTo('.contact-email',
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.3,
    scrollTrigger: {
      trigger: '.contact-section',
      start: 'top 65%',
      toggleActions: 'play none none reverse'
    }
  }
);

// ============================================
// SMOOTH SCROLL (Optional Enhancement)
// ============================================

// Add subtle hover effects on navigation
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('mouseenter', function() {
    gsap.to(this, {
      y: -3,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  link.addEventListener('mouseleave', function() {
    gsap.to(this, {
      y: 0,
      duration: 0.3,
      ease: 'power2.out'
    });
  });
});

// ============================================
// LIGHTBOX FUNCTIONALITY
// ============================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');
const gridItems = document.querySelectorAll('.grid-item');

// Open lightbox when grid item is clicked
gridItems.forEach(item => {
  item.addEventListener('click', function() {
    const bgImage = this.style.backgroundImage;
    // Extract URL from background-image
    const imageUrl = bgImage.slice(5, -2); // Remove 'url("' and '")'

    lightboxImage.src = imageUrl;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  });
});

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = ''; // Restore scrolling

  // Clear image after transition
  setTimeout(() => {
    lightboxImage.src = '';
  }, 400);
}

// Close button
lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) {
    closeLightbox();
  }
});

// ============================================
// PERFORMANCE & DEBUG
// ============================================

// Disable ScrollTrigger on reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  stopAutoplay();
}

// Console message
console.log('%c Fashion Stylist Jes ', 'background: #c9a870; color: #0a0a0a; padding: 8px 12px; font-size: 14px; font-weight: bold;');
console.log('%c Touch-Friendly Slider Experience ', 'background: #0a0a0a; color: #c9a870; padding: 6px 12px; font-size: 12px;');
console.log('%c Powered by GSAP + ScrollTrigger ', 'color: #8a8a8a; font-size: 11px;');
