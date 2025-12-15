/*
 * ============================================
 * LUXURY EDITORIAL PORTFOLIO
 * Cinematic Scroll-Driven Experience
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
// STORY 1 - SCROLL-DRIVEN ANIMATIONS
// ============================================

const story1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-1',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5,
    // markers: true // Uncomment for debugging
  }
});

// Initial state and entry
story1Timeline
  // Card 1-1: Main entrance
  .fromTo('.card-1-1',
    { scale: 0.85, opacity: 0, y: 100 },
    { scale: 1, opacity: 1, y: 0, duration: 1 }
  )
  // Card 1-2: Delayed entrance from right
  .fromTo('.card-1-2',
    { scale: 0.75, opacity: 0, x: 200 },
    { scale: 0.95, opacity: 0.9, x: 0, duration: 1 },
    '<0.2'
  )
  // Card 1-3: Background entrance
  .fromTo('.card-1-3',
    { scale: 0.7, opacity: 0, x: -100 },
    { scale: 0.85, opacity: 0.7, x: 0, duration: 1 },
    '<0.15'
  )
  // Text reveal
  .fromTo('.text-1-1',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.4'
  )

  // Exit: All elements scale down and fade
  .to('.card-1-1', {
    scale: 0.8,
    opacity: 0.3,
    x: -150,
    duration: 1
  }, '+=0.5')
  .to('.card-1-2', {
    scale: 0.7,
    opacity: 0.2,
    x: 100,
    duration: 1
  }, '<')
  .to('.card-1-3', {
    opacity: 0,
    scale: 0.6,
    duration: 1
  }, '<')
  .to('.text-1-1', {
    opacity: 0,
    y: -40,
    duration: 0.6
  }, '<0.2');

// ============================================
// STORY 2 - SCROLL-DRIVEN ANIMATIONS
// ============================================

const story2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-2',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5
  }
});

story2Timeline
  // Card 2-1: Entrance from right
  .fromTo('.card-2-1',
    { scale: 0.8, opacity: 0, x: 250 },
    { scale: 1, opacity: 1, x: 0, duration: 1 }
  )
  // Card 2-2: Entrance from left
  .fromTo('.card-2-2',
    { scale: 0.75, opacity: 0, x: -200 },
    { scale: 0.92, opacity: 0.85, x: 0, duration: 1 },
    '<0.2'
  )
  // Card 2-3: Background layer
  .fromTo('.card-2-3',
    { scale: 0.65, opacity: 0, y: 80 },
    { scale: 0.8, opacity: 0.65, y: 0, duration: 1 },
    '<0.15'
  )
  // Text reveal
  .fromTo('.text-2-1',
    { opacity: 0, y: 60 },
    { opacity: 1, y: 0, duration: 0.8 },
    '-=0.4'
  )

  // Exit animations
  .to('.card-2-1', {
    scale: 0.75,
    opacity: 0.25,
    x: 200,
    y: -50,
    duration: 1
  }, '+=0.5')
  .to('.card-2-2', {
    scale: 0.7,
    opacity: 0.2,
    x: -150,
    duration: 1
  }, '<')
  .to('.card-2-3', {
    opacity: 0,
    scale: 0.6,
    duration: 1
  }, '<')
  .to('.text-2-1', {
    opacity: 0,
    y: -40,
    duration: 0.6
  }, '<0.2');

// ============================================
// STORY 3 - SCROLL-DRIVEN ANIMATIONS
// ============================================

const story3Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-3',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5
  }
});

story3Timeline
  // Card 3-1: Large dominant entrance
  .fromTo('.card-3-1',
    { scale: 0.75, opacity: 0, x: -200, y: 100 },
    { scale: 1, opacity: 1, x: 0, y: 0, duration: 1 }
  )
  // Card 3-2: Side entrance
  .fromTo('.card-3-2',
    { scale: 0.7, opacity: 0, x: 180, y: -50 },
    { scale: 0.9, opacity: 0.8, x: 0, y: 0, duration: 1 },
    '<0.2'
  )
  // Card 3-3: Background
  .fromTo('.card-3-3',
    { scale: 0.6, opacity: 0, y: 100 },
    { scale: 0.78, opacity: 0.6, y: 0, duration: 1 },
    '<0.15'
  )
  // Text reveal
  .fromTo('.text-3-1',
    { opacity: 0, y: 60, x: 40 },
    { opacity: 1, y: 0, x: 0, duration: 0.8 },
    '-=0.4'
  )

  // Exit
  .to('.card-3-1', {
    scale: 0.7,
    opacity: 0.2,
    x: -180,
    y: -60,
    duration: 1
  }, '+=0.5')
  .to('.card-3-2', {
    scale: 0.65,
    opacity: 0.15,
    x: 120,
    duration: 1
  }, '<')
  .to('.card-3-3', {
    opacity: 0,
    scale: 0.5,
    duration: 1
  }, '<')
  .to('.text-3-1', {
    opacity: 0,
    x: 40,
    duration: 0.6
  }, '<0.2');

// ============================================
// STORY 4 - SCROLL-DRIVEN ANIMATIONS
// ============================================

const story4Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.story-4',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.5
  }
});

story4Timeline
  // Card 4-1: Right side dominant
  .fromTo('.card-4-1',
    { scale: 0.8, opacity: 0, x: 220, y: 80 },
    { scale: 1, opacity: 1, x: 0, y: 0, duration: 1 }
  )
  // Card 4-2: Left complement
  .fromTo('.card-4-2',
    { scale: 0.72, opacity: 0, x: -180, y: 50 },
    { scale: 0.88, opacity: 0.82, x: 0, y: 0, duration: 1 },
    '<0.2'
  )
  // Card 4-3: Center background
  .fromTo('.card-4-3',
    { scale: 0.68, opacity: 0, y: 120 },
    { scale: 0.8, opacity: 0.65, y: 0, duration: 1 },
    '<0.15'
  )
  // Text reveal
  .fromTo('.text-4-1',
    { opacity: 0, y: 60, x: -40 },
    { opacity: 1, y: 0, x: 0, duration: 0.8 },
    '-=0.4'
  )

  // Final exit - gentle fade
  .to(['.card-4-1', '.card-4-2', '.card-4-3'], {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    stagger: 0.1
  }, '+=0.5')
  .to('.text-4-1', {
    opacity: 0,
    duration: 0.6
  }, '<');

// ============================================
// PARALLAX DEPTH EFFECTS
// Subtle movement for layering
// ============================================

// Background cards move slower (parallax depth)
gsap.utils.toArray('.card-1-3, .card-2-3, .card-3-3, .card-4-3').forEach(card => {
  gsap.to(card, {
    y: -50,
    scrollTrigger: {
      trigger: card.closest('.story'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2
    }
  });
});

// Foreground cards move faster
gsap.utils.toArray('.card-1-1, .card-2-1, .card-3-1, .card-4-1').forEach(card => {
  gsap.to(card, {
    y: -80,
    scrollTrigger: {
      trigger: card.closest('.story'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.8
    }
  });
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
// PERFORMANCE & DEBUG
// ============================================

// Disable ScrollTrigger on reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  gsap.set('.card, .text-block', { opacity: 1, scale: 1, x: 0, y: 0 });
}

// Console message
console.log('%c Fashion Stylist Jes ', 'background: #c9a870; color: #0a0a0a; padding: 8px 12px; font-size: 14px; font-weight: bold;');
console.log('%c Scroll-Driven Cinematic Experience ', 'background: #0a0a0a; color: #c9a870; padding: 6px 12px; font-size: 12px;');
console.log('%c Powered by GSAP + ScrollTrigger ', 'color: #8a8a8a; font-size: 11px;');
