// Configuration
const imageCount = 12;
const particleCount = 30;

// DOM Elements
const loader = document.getElementById('loader');
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
const particles = document.getElementById('particles');
const portfolioGrid = document.getElementById('portfolioGrid');

// Custom Cursor
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // Smooth cursor movement with easing
  const speed = 0.2;
  const followerSpeed = 0.1;

  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;

  followerX += (mouseX - followerX) * followerSpeed;
  followerY += (mouseY - followerY) * followerSpeed;

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  cursorFollower.style.left = followerX + 'px';
  cursorFollower.style.top = followerY + 'px';

  requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .grid-item, .service');
hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

// Create Floating Particles
function createParticles() {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = Math.random() * -100 + 'px';

    // Random animation duration
    const duration = Math.random() * 10 + 15;
    particle.style.animationDuration = duration + 's';

    // Random animation delay
    const delay = Math.random() * 5;
    particle.style.animationDelay = delay + 's';

    // Random size
    const size = Math.random() * 3 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particles.appendChild(particle);
  }
}

createParticles();

// Portfolio Grid - Create Image Items
function createPortfolioGrid() {
  for (let i = 1; i <= imageCount; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = `stylist-images/image${i}.jpg`;
    img.alt = `Styling work ${i}`;
    img.loading = 'lazy';

    gridItem.appendChild(img);
    portfolioGrid.appendChild(gridItem);

    // Add staggered delay for animation
    setTimeout(() => {
      gridItem.classList.add('active');
    }, i * 100);
  }

  // Add hover effects after creation
  setTimeout(() => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });
  }, 100);
}

// Parallax Scrolling Effect
function parallaxScroll() {
  const scrolled = window.pageYOffset;
  const heroLayers = document.querySelectorAll('.hero-bg-layer');

  heroLayers.forEach((layer, index) => {
    const speed = (index + 1) * 0.15;
    const yPos = -(scrolled * speed);
    layer.style.transform = `translateY(${yPos}px)`;
  });
}

// Scroll Reveal Animation
function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal-text, .reveal-scale, .reveal-slide');

  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight * 0.85 && elementBottom > 0) {
      element.classList.add('active');
    }
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Image Observer for Lazy Loading Animation
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      if (img.dataset.src) {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      }
      imageObserver.unobserve(img);
    }
  });
}, {
  rootMargin: '50px'
});

// Scroll Event Handler
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      parallaxScroll();
      revealOnScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// Counter Animation for Stats
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 200;

  counters.forEach(counter => {
    const animate = () => {
      const value = counter.innerText.replace(/[^0-9]/g, '');
      const target = parseInt(value);
      const data = parseInt(counter.getAttribute('data-target') || target);
      const increment = data / speed;

      if (!counter.classList.contains('counted')) {
        counter.setAttribute('data-target', target);
        counter.innerText = '0';
        counter.classList.add('counted');

        const updateCounter = () => {
          const value = parseInt(counter.innerText.replace(/[^0-9]/g, '') || 0);
          if (value < data) {
            counter.innerText = Math.ceil(value + increment) + (counter.innerText.includes('+') ? '+' : '');
            setTimeout(updateCounter, 10);
          } else {
            counter.innerText = counter.getAttribute('data-target');
          }
        };

        updateCounter();
      }
    };

    // Trigger animation when element is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animate();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(counter);
  });
}

// Magnetic Effect for Interactive Elements
function magneticEffect() {
  const magneticElements = document.querySelectorAll('.service, .contact-link');

  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
    });
  });
}

// 3D Tilt Effect for Featured Image
function tiltEffect() {
  const featuredImage = document.querySelector('.featured-image');

  if (featuredImage) {
    featuredImage.addEventListener('mousemove', (e) => {
      const rect = featuredImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      featuredImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    featuredImage.addEventListener('mouseleave', () => {
      featuredImage.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  }
}

// Loading Animation
function hideLoader() {
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }, 2500);
}

// Text Split Animation
function splitText() {
  const textElements = document.querySelectorAll('.hero-title, .section-title');

  textElements.forEach(element => {
    const text = element.innerText;
    element.innerHTML = '';

    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.innerText = char;
      span.style.display = 'inline-block';
      span.style.animationDelay = `${index * 0.05}s`;
      element.appendChild(span);
    });
  });
}

// Random Float Animation for Grid Items
function randomFloat() {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach((item, index) => {
    const duration = 3 + Math.random() * 2;
    const delay = Math.random() * 2;

    item.style.animation = `floatRandom ${duration}s ease-in-out ${delay}s infinite`;
  });
}

// Add CSS for random float
const style = document.createElement('style');
style.textContent = `
  @keyframes floatRandom {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-5px) rotate(0.5deg); }
    50% { transform: translateY(-10px) rotate(-0.5deg); }
    75% { transform: translateY(-5px) rotate(0.5deg); }
  }
`;
document.head.appendChild(style);

// Initialize Everything on Load
window.addEventListener('load', () => {
  hideLoader();
  createPortfolioGrid();
  animateCounters();
  magneticEffect();
  tiltEffect();
  revealOnScroll();

  // Delay random float to not interfere with initial animation
  setTimeout(randomFloat, 3000);
});

// Initial scroll check
revealOnScroll();

// Resize handler
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    revealOnScroll();
  }, 250);
});

// Add smooth scrolling to body
document.documentElement.style.scrollBehavior = 'smooth';

// Performance optimization - Reduce animations on low-end devices
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(element => {
    element.style.animation = 'none';
    element.style.transition = 'none';
  });
}

// Parallax on mouse move for hero section
const hero = document.getElementById('hero');
if (hero) {
  hero.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const layers = hero.querySelectorAll('.hero-bg-layer');
    layers.forEach((layer, index) => {
      const speed = (index + 1) * 10;
      const x = (window.innerWidth / 2 - e.clientX) / speed;
      const y = (window.innerHeight / 2 - e.clientY) / speed;

      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

// Console message
console.log('%c Fashion Portfolio ✨', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%c Designed with stunning animations', 'font-size: 12px; color: #777;');
