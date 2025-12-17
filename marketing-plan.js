// ========================================
// DIGITAL MARKETING PLAN - INTERACTIVE JS
// Scroll animations, counters, and interactions
// ========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initNavScroll();
  initCounterAnimations();
  initTimelineAnimations();
  initSmoothScroll();
  initGSAPAnimations();
});

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
function initNavScroll() {
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
}

// ========================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// SCROLL ANIMATIONS WITH INTERSECTION OBSERVER
// ========================================
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger counter animation when section is visible
        if (entry.target.classList.contains('kpi-item') ||
            entry.target.classList.contains('hero-stats')) {
          animateCounters(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe elements
  const elementsToAnimate = document.querySelectorAll(`
    .summary-card,
    .timeline-item,
    .strategy-block,
    .kpi-category,
    .investment-card,
    .fade-in
  `);

  elementsToAnimate.forEach(el => observer.observe(el));
}

// ========================================
// TIMELINE ANIMATIONS
// ========================================
function initTimelineAnimations() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 150); // Stagger animation
      }
    });
  }, {
    threshold: 0.2
  });

  timelineItems.forEach(item => timelineObserver.observe(item));
}

// ========================================
// COUNTER ANIMATIONS
// ========================================
let countersAnimated = new Set();

function animateCounters(container) {
  // Skip if already animated
  if (countersAnimated.has(container)) return;
  countersAnimated.add(container);

  const counters = container.querySelectorAll('.stat-number, .kpi-target, .roi-value, .metric-value');

  counters.forEach(counter => {
    const target = counter.textContent.trim();

    // Check if it's a number (with optional %, +, $, etc.)
    const numberMatch = target.match(/[\d,]+/);
    if (!numberMatch) return;

    const targetNumber = parseInt(numberMatch[0].replace(/,/g, ''));
    const prefix = target.match(/^[^\d]+/)?.[0] || '';
    const suffix = target.match(/[^\d,]+$/)?.[0] || '';

    let current = 0;
    const increment = targetNumber / 60; // 60 frames for smooth animation
    const duration = 1500; // 1.5 seconds
    const interval = duration / 60;

    counter.textContent = prefix + '0' + suffix;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        counter.textContent = prefix + formatNumber(targetNumber) + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = prefix + formatNumber(Math.floor(current)) + suffix;
      }
    }, interval);
  });
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// ========================================
// GSAP SCROLL ANIMATIONS
// ========================================
function initGSAPAnimations() {
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);

  // Hero title animation
  gsap.from('.hero-title .line', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Hero subtitle animation
  gsap.from('.hero-subtitle', {
    duration: 1,
    opacity: 0,
    delay: 0.8,
    ease: 'power2.out'
  });

  // Hero stats animation
  gsap.from('.hero-stats .stat', {
    duration: 0.8,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    delay: 1.2,
    ease: 'power3.out'
  });

  // Summary cards animation
  gsap.from('.summary-card', {
    scrollTrigger: {
      trigger: '.summary-grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    y: 60,
    opacity: 0,
    stagger: 0.2,
    ease: 'power3.out'
  });

  // Strategy blocks animation
  gsap.utils.toArray('.strategy-block').forEach((block, index) => {
    gsap.from(block, {
      scrollTrigger: {
        trigger: block,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      duration: 1,
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      ease: 'power3.out'
    });
  });

  // KPI categories stagger animation
  gsap.from('.kpi-category', {
    scrollTrigger: {
      trigger: '.kpi-categories',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    y: 80,
    opacity: 0,
    stagger: 0.3,
    ease: 'power3.out'
  });

  // Investment cards animation
  gsap.from('.investment-card', {
    scrollTrigger: {
      trigger: '.investment-grid',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.8,
    scale: 0.9,
    opacity: 0,
    stagger: 0.2,
    ease: 'back.out(1.4)'
  });

  // ROI projection animation
  gsap.from('.roi-projection', {
    scrollTrigger: {
      trigger: '.roi-projection',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 1,
    scale: 0.95,
    opacity: 0,
    ease: 'power3.out'
  });

  // CTA section animation
  gsap.from('.cta-content h2', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power3.out'
  });

  gsap.from('.cta-content p', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 0.2,
    ease: 'power3.out'
  });

  gsap.from('.cta-buttons .btn', {
    scrollTrigger: {
      trigger: '.cta-section',
      start: 'top 80%',
      toggleActions: 'play none none none'
    },
    duration: 0.6,
    y: 30,
    opacity: 0,
    stagger: 0.15,
    delay: 0.4,
    ease: 'back.out(1.4)'
  });

  // Parallax effect for hero background
  gsap.to('.hero::before', {
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 200,
    scale: 1.2,
    ease: 'none'
  });
}

// ========================================
// PROGRESS BAR (Optional - shows scroll progress)
// ========================================
function initProgressBar() {
  const progressBar = document.createElement('div');
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// Uncomment to enable progress bar
// initProgressBar();

// ========================================
// ACTIVE NAVIGATION HIGHLIGHT
// ========================================
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
}

initActiveNav();

// ========================================
// CLICK TRACKING (Optional Analytics)
// ========================================
function initClickTracking() {
  document.querySelectorAll('.btn, .nav-menu a').forEach(element => {
    element.addEventListener('click', (e) => {
      const clickedElement = e.target.textContent.trim();
      console.log('Clicked:', clickedElement);

      // Here you can send analytics data to your tracking service
      // Example: gtag('event', 'click', { 'element': clickedElement });
    });
  });
}

initClickTracking();

// ========================================
// RESPONSIVE NAVIGATION TOGGLE (for mobile)
// ========================================
function initMobileNav() {
  const nav = document.querySelector('.nav');
  const navMenu = document.querySelector('.nav-menu');

  // Create hamburger menu for mobile
  if (window.innerWidth <= 768) {
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
      display: none;
      background: none;
      border: none;
      font-size: 1.8rem;
      color: var(--text-dark);
      cursor: pointer;
    `;

    // Insert hamburger before nav menu
    nav.insertBefore(hamburger, navMenu);

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// Check on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    document.querySelector('.nav-menu')?.classList.remove('active');
  }
});

// ========================================
// LAZY LOAD IMAGES (if any are added later)
// ========================================
function initLazyLoad() {
  const images = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

initLazyLoad();

// ========================================
// KEYBOARD NAVIGATION
// ========================================
document.addEventListener('keydown', (e) => {
  // Press 'T' to scroll to top
  if (e.key === 't' || e.key === 'T') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Press 'B' to scroll to bottom
  if (e.key === 'b' || e.key === 'B') {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debouncing to scroll-heavy functions
const debouncedScroll = debounce(() => {
  // Add any heavy scroll-dependent operations here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// EASTER EGG: Konami Code
// ========================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join('') === konamiSequence.join('')) {
    // Secret: Apply rainbow gradient to hero
    document.querySelector('.hero').style.background = 'linear-gradient(45deg, #667eea, #764ba2, #f093fb, #4facfe, #43e97b)';
    document.querySelector('.hero').style.backgroundSize = '400% 400%';
    document.querySelector('.hero').style.animation = 'gradient 5s ease infinite';

    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);

    console.log('🎉 Easter egg activated! You found the secret!');
  }
});

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🚀 Digital Marketing Plan - Emirate Studios', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBuilt with ❤️ for transforming digital presence', 'font-size: 14px; color: #764ba2;');
console.log('%cTip: Press T to scroll to top, B to scroll to bottom', 'font-size: 12px; color: #6a6a6a;');

// ========================================
// EXPORT FOR TESTING
// ========================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initScrollAnimations,
    initNavScroll,
    initCounterAnimations,
    initTimelineAnimations,
    initSmoothScroll,
    initGSAPAnimations
  };
}
