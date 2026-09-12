// ============================================
// Resilience Hub - Main JavaScript
// ============================================

(function () {
  'use strict';

  // --- Header scroll effect ---
  const header = document.getElementById('site-header');
  let lastScroll = 0;

  function onScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // --- Mobile menu toggle ---
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Resource filter ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const resourceCards = document.querySelectorAll('.resource-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const filter = this.dataset.filter;

      // Update active button
      filterButtons.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      this.classList.add('active');
      this.setAttribute('aria-selected', 'true');

      // Filter cards
      resourceCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // --- Animated counter ---
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(function (counter) {
      const target = parseInt(counter.dataset.target, 10);
      if (isNaN(target) || counter.dataset.animated) return;

      const duration = 2000;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = target;
          counter.dataset.animated = 'true';
        }
      }

      requestAnimationFrame(update);
    });
  }

  // --- Scroll-triggered animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger counter animation when stats come into view
        if (entry.target.closest('.hero-stats') || entry.target.classList.contains('hero-stats')) {
          animateCounters();
        }

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll(
    '.about-card, .resource-card, .timeline-item, .story-card, .community-card, .newsletter, .hero-stats'
  ).forEach(function (el) {
    el.classList.add('animate-in');
    observer.observe(el);
  });

  // --- Newsletter form ---
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = this.querySelector('input[type="email"]');
      var email = emailInput.value.trim();

      if (email) {
        // Show success message
        var formGroup = this.querySelector('.form-group');
        formGroup.innerHTML =
          '<p style="color: var(--color-success); font-weight: 600; padding: 14px 0;">' +
          'Thank you! You\'ve been added to our list. Stay resilient. &#x2713;</p>';
      }
    });
  }

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

})();
