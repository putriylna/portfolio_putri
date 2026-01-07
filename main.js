  /* ===============================
     MOBILE MENU
  =============================== */
  const mobileMenuButton = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });

  /* ===============================
     ACTIVE NAVIGATION ON SCROLL
  =============================== */
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link, .nav-link-mobile');

  function updateActiveNav() {
    let currentSection = '';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < top + height) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(link => {
      const isActive = link.getAttribute('href') === `#${currentSection}`;
      link.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  /* ===============================
     SECTION FADE-IN ANIMATION
  =============================== */
  const animatedSections = document.querySelectorAll('.section-hidden');

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedSections.forEach(section => {
    sectionObserver.observe(section);
  });

  /* ===============================
     SKILL BAR ANIMATION
  =============================== */
  const skillBars = document.querySelectorAll('.skill-progress');

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = `${entry.target.dataset.width}%`;
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    skillObserver.observe(bar);
  });

  /* ===============================
     SMOOTH SCROLL
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      event.preventDefault();
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  });

  /* ===============================
     NEWSLETTER FORM
  =============================== */
  const newsletterForm = document.querySelector('footer form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', event => {
      event.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');

      if (emailInput && emailInput.value) {
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }

  /* ===============================
     INITIAL LOAD
  =============================== */
  window.addEventListener('load', () => {
    updateActiveNav();

    document.querySelectorAll('#home .section-hidden').forEach(element => {
      setTimeout(() => {
        element.classList.add('section-visible');
      }, 300);
    });
  });

  /* ===============================
      SWIPER JS INITIALIZATION
  =============================== */
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
