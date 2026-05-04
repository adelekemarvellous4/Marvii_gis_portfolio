(function () {
  const PROJECTS_PER_PAGE = 6;
  const LIBRARY_FILTERS = [
    'All',
    'Climate & Carbon',
    'Environmental Monitoring',
    'Suitability & Planning',
    'Urban Climate',
    'Data Science & Modelling'
  ];

  let currentFeaturedPage = 0;
  let currentLibraryFilter = 'All';
  let scrollAnimationObserver;
  let pageInteractionController;

  function getPortfolioProjects() {
    return window.PortfolioData?.projects || [];
  }

  function renderHomePageShell() {
    const root = document.getElementById('portfolio-root');
    if (!root) return;

    const components = window.PortfolioComponents || {};
    const sections = window.PortfolioSections || {};

    root.innerHTML = [
      components.Navigation?.() || '',
      sections.HeroSection?.() || '',
      sections.StatsSection?.() || '',
      sections.AboutSection?.() || '',
      sections.ProjectsSection?.() || '',
      sections.PromisesSection?.() || '',
      sections.CertificationsSection?.() || '',
      sections.FaqSection?.() || '',
      sections.ContactSection?.() || '',
      components.Footer?.() || '',
      '<button class="back-to-top" id="backToTop" aria-label="Back to Top"><i class="fas fa-arrow-up"></i></button>'
    ].join('');
  }

  function createScrollAnimationObserver() {
    scrollAnimationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
      scrollAnimationObserver.observe(el);
    });
  }

  function observeAnimatedElements(scope) {
    if (!scrollAnimationObserver || !scope) return;
    scope.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => {
      scrollAnimationObserver.observe(el);
    });
  }

  function setupSiteNavigation(signal) {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
      }

      let current = '';
      sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === current);
      });
    }, { signal });
  }

  function setupResponsiveMenu(signal) {
    const burgerBtn = document.getElementById('burger-btn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!burgerBtn || !mobileMenu) return;

    function closeResponsiveMenu() {
      mobileMenu.classList.remove('active');
      burgerBtn.classList.remove('active');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-menu-open');
    }

    burgerBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = mobileMenu.classList.toggle('active');
      burgerBtn.classList.toggle('active', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('nav-menu-open', isOpen);
    }, { signal });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeResponsiveMenu();
      }, { signal });
    });

    document.addEventListener('click', (event) => {
      const clickedInsideMenu = mobileMenu.contains(event.target);
      const clickedBurger = burgerBtn.contains(event.target);

      if (!clickedInsideMenu && !clickedBurger) {
        closeResponsiveMenu();
      }
    }, { signal });
  }

  function setupStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const target = parseInt(entry.target.getAttribute('data-target'), 10);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = target;
            clearInterval(timer);
          } else {
            entry.target.textContent = Math.floor(current);
          }
        }, 16);

        statsObserver.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => statsObserver.observe(num));
  }

  function setupBackToTopButton(signal) {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    }, { signal });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, { signal });
  }

  function setupContactFormSubmission(signal) {
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!contactForm || !formFeedback || !submitBtn) return;

    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      formFeedback.className = 'form-feedback';
      formFeedback.textContent = '';
      submitBtn.classList.add('is-loading');
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Sending...</span>';

      try {
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          formFeedback.className = 'form-feedback success show';
          formFeedback.textContent = 'Your message has been sent successfully. I’ll get back to you through email.';
          contactForm.reset();
        } else {
          formFeedback.className = 'form-feedback error show';
          formFeedback.textContent = 'Something went wrong while sending your message. Please try again.';
        }
      } catch (error) {
        formFeedback.className = 'form-feedback error show';
        formFeedback.textContent = 'Network error. Please check your connection and try again.';
      } finally {
        submitBtn.classList.remove('is-loading');
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>Send Message</span>';
      }
    }, { signal });
  }

  function renderFeaturedPagination() {
    const pagination = document.getElementById('featured-pagination');
    if (!pagination) return;

    const totalPages = Math.ceil(getPortfolioProjects().length / PROJECTS_PER_PAGE);
    pagination.innerHTML = `
      <div class="pagination-label">More Projects</div>
      <div class="pagination-controls">
        ${Array.from({ length: totalPages }, (_, index) => `
          <button
            type="button"
            class="pagination-pill ${index === currentFeaturedPage ? 'active' : ''}"
            data-page="${index}"
            aria-label="Go to project page ${index + 1}">
            <span class="pagination-pill-text">Page ${index + 1}</span>
          </button>
        `).join('')}
      </div>`;

    pagination.querySelectorAll('[data-page]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentFeaturedPage = Number(btn.dataset.page);
        renderFeaturedProjects();
        renderFeaturedPagination();

        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function renderFeaturedProjects() {
    const grid = document.getElementById('featured-projects-grid');
    if (!grid) return;

    const start = currentFeaturedPage * PROJECTS_PER_PAGE;
    const end = start + PROJECTS_PER_PAGE;
    grid.innerHTML = getPortfolioProjects().slice(start, end).map(window.PortfolioComponents.ProjectCard).join('');
    observeAnimatedElements(grid);
  }

  function renderProjectLibraryFilters() {
    const row = document.getElementById('library-filter-row');
    if (!row) return;

    row.innerHTML = LIBRARY_FILTERS.map(filter => `
      <button class="filter-chip ${filter === currentLibraryFilter ? 'active' : ''}" type="button" data-filter="${filter}">
        ${filter}
      </button>
    `).join('');

    row.querySelectorAll('[data-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        currentLibraryFilter = btn.dataset.filter;
        renderProjectLibraryFilters();
        renderProjectLibrary();
      });
    });
  }

  function renderProjectLibrary() {
    const grid = document.getElementById('library-grid');
    if (!grid) return;

    const filtered = currentLibraryFilter === 'All'
      ? getPortfolioProjects()
      : getPortfolioProjects().filter(project => project.theme === currentLibraryFilter);

    grid.innerHTML = filtered.map(window.PortfolioComponents.ProjectLibraryCard).join('');
    observeAnimatedElements(grid);
  }

  function renderProjectDetailFromHash() {
    const hash = window.location.hash || '';
    const match = hash.match(/^#project\/(.+)$/);
    const root = document.getElementById('portfolio-root');

    if (!root) return;

    if (!match) {
      if (!document.getElementById('home')) {
        renderHomePageShell();
        initializeHomePageInteractions();
      }
      const targetId = hash.replace('#', '');
      if (targetId) {
        requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
      return;
    }

    const project = getPortfolioProjects().find(item => item.id === match[1]);
    if (!project) {
      window.location.hash = '#projects';
      return;
    }

    root.innerHTML = [
      window.PortfolioComponents.Navigation?.() || '',
      window.PortfolioComponents.ProjectDetailView(project),
      window.PortfolioComponents.Footer?.() || '',
      '<button class="back-to-top" id="backToTop" aria-label="Back to Top"><i class="fas fa-arrow-up"></i></button>'
    ].join('');

    initializeSharedPageInteractions();
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function initializeSharedPageInteractions() {
    document.body.classList.remove('nav-menu-open');

    if (pageInteractionController) {
      pageInteractionController.abort();
    }

    if (scrollAnimationObserver) {
      scrollAnimationObserver.disconnect();
    }

    pageInteractionController = new AbortController();
    const { signal } = pageInteractionController;

    createScrollAnimationObserver();
    setupSiteNavigation(signal);
    setupResponsiveMenu(signal);
    setupBackToTopButton(signal);
  }

  function initializeHomePageInteractions() {
    initializeSharedPageInteractions();
    setupStatsCounters();
    setupContactFormSubmission(pageInteractionController.signal);
    renderFeaturedProjects();
    renderFeaturedPagination();
    renderProjectLibraryFilters();
    renderProjectLibrary();
  }

  document.addEventListener('DOMContentLoaded', () => {
    if ((window.location.hash || '').startsWith('#project/')) {
      renderProjectDetailFromHash();
    } else {
      renderHomePageShell();
      initializeHomePageInteractions();
    }

    window.addEventListener('hashchange', renderProjectDetailFromHash);

    console.log('%c🗺️ Adeleke Marvellous Ayomide', 'color: #22d3ee; font-size: 24px; font-weight: bold;');
    console.log('%cGIS Analyst | Spatial Data Scientist | Remote Sensing Specialist', 'color: #67e8f9; font-size: 14px;');
    console.log('%c\\nTransforming spatial data into actionable intelligence', 'color: #94a3b8; font-size: 12px;');
  });
})();
