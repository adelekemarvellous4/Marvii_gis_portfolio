(function () {
  const PROFILE_GITHUB_URL = 'https://github.com/adelekemarvellous4';

  function externalHref(url) {
    return url && url !== '#' ? url : '#';
  }

  function projectCaseStudyHref(project) {
    return `#project/${project.id}`;
  }

  function projectPlaceholder(title, subtitle) {
    const safeTitle = title.replace(/&/g, '&amp;');
    const safeSubtitle = subtitle.replace(/&/g, '&amp;');
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#07152f"/>
            <stop offset="100%" stop-color="#03101f"/>
          </linearGradient>
          <linearGradient id="card" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0a2747" stop-opacity="0.92"/>
            <stop offset="100%" stop-color="#08192d" stop-opacity="0.92"/>
          </linearGradient>
        </defs>
        <rect width="1600" height="900" fill="url(#bg)"/>
        <g opacity="0.22">
          <circle cx="230" cy="180" r="180" fill="#22d3ee"/>
          <circle cx="1280" cy="220" r="210" fill="#10b981"/>
          <circle cx="1180" cy="720" r="250" fill="#0ea5e9"/>
        </g>
        <g stroke="#17375f" stroke-width="1" opacity="0.35">
          <path d="M0 180H1600M0 360H1600M0 540H1600M0 720H1600"/>
          <path d="M200 0V900M400 0V900M600 0V900M800 0V900M1000 0V900M1200 0V900M1400 0V900"/>
        </g>
        <rect x="120" y="120" width="1360" height="660" rx="36" fill="url(#card)" stroke="#1a4c73" stroke-width="2"/>
        <text x="180" y="105" font-family="Inter, Arial, sans-serif" font-size="28" letter-spacing="6" fill="#67e8f9">PROJECT VISUAL SLOT</text>
        <text x="180" y="690" font-family="Space Grotesk, Arial, sans-serif" font-size="34" fill="#e2e8f0">Replace this area with your landscape map or screenshot</text>
        <text x="180" y="780" font-family="Space Grotesk, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">${safeTitle}</text>
        <text x="180" y="835" font-family="Inter, Arial, sans-serif" font-size="28" fill="#9ecfe1">${safeSubtitle}</text>
      </svg>`;
    return 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
  }

  function ProjectActions(project) {
    const githubUrl = externalHref(project.github || PROFILE_GITHUB_URL);

    return `
      <div class="project-actions">
        <a href="${externalHref(project.storymap)}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">
          <i class="fas fa-map-location-dot"></i><span>StoryMap</span>
        </a>
        <a href="${externalHref(project.report)}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
          <i class="fas fa-file-arrow-down"></i><span>Report</span>
        </a>
        <a href="${githubUrl}" class="btn btn-outline btn-sm" target="_blank" rel="noopener">
          <i class="fab fa-github"></i><span>GitHub</span>
        </a>
        <a href="${projectCaseStudyHref(project)}" class="btn btn-cyan btn-sm">
          <i class="fas fa-magnifying-glass-chart"></i><span>Case Study</span>
        </a>
      </div>`;
  }

  function ProjectCard(project) {
    const methods = project.methods.map(item => `<span class="method-tag">${item}</span>`).join('');
    const tools = project.tools.map(item => `<span class="project-meta-pill"><i class="fas fa-layer-group"></i>${item}</span>`).join('');
    const outputs = project.outputs.map(item => `<li>${item}</li>`).join('');
    const metricsList = project.metrics.map(item => `<div class="portfolio-metric-item">${item}</div>`).join('');
    const imageSrc = project.image || projectPlaceholder(project.title, project.visualLabel);

    return `
      <article class="elite-project-card fade-up" data-theme="${project.theme}">
        <div class="elite-project-inner">
          <div class="project-visual-panel">
            <div class="project-image-wrap">
              <img src="${imageSrc}" alt="${project.title} project visual" loading="lazy" />
              <div class="project-image-overlay">
                <span class="project-image-note"><i class="fas fa-image"></i>${project.visualLabel}</span>
                <div class="project-quick-links">
                  <a href="${externalHref(project.storymap)}" class="quick-link" target="_blank" rel="noopener" aria-label="View StoryMap"><i class="fas fa-map"></i></a>
                  <a href="${externalHref(project.report)}" class="quick-link" target="_blank" rel="noopener" aria-label="View Report"><i class="fas fa-file-lines"></i></a>
                  <a href="${externalHref(project.github || PROFILE_GITHUB_URL)}" class="quick-link" target="_blank" rel="noopener" aria-label="View GitHub"><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            <div class="project-content-panel project-left-content">
              <div class="project-topline">
                <div class="project-number">FEATURED PROJECT ${project.number}</div>
                <span class="project-featured-badge">${project.icon} Elite Case Study</span>
              </div>
              <h3 class="project-title">${project.title}</h3>
              <div class="project-category">${project.category}</div>
              <p class="project-description project-description-left">${project.description}</p>
              <div class="project-meta-strip">
                <span class="project-meta-pill"><i class="fas fa-folder-open"></i>${project.theme}</span>
                ${tools}
              </div>
            </div>
          </div>

          <div class="project-content-panel project-right-content">
            <div class="project-detail-grid">
              <div class="detail-card">
                <div class="detail-label">Objective</div>
                <p class="detail-text">${project.objective}</p>
              </div>
              <div class="detail-card">
                <div class="detail-label">Methods / Instruments</div>
                <div class="method-tags">${methods}</div>
              </div>
            </div>
            <div class="portfolio-sidebar-card">
              <div class="portfolio-mini-card">
                <div class="portfolio-mini-label">Key Metrics</div>
                <div class="portfolio-metric-list">${metricsList}</div>
              </div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Project Outputs</div>
              <ul class="detail-text project-output-list">${outputs}</ul>
            </div>
            ${ProjectActions(project)}
          </div>
        </div>
      </article>`;
  }

  function ProjectLibraryCard(project) {
    return `
      <article class="library-card fade-up">
        <div class="library-card-top">
          <span class="library-card-theme">${project.theme}</span>
          <span class="library-card-number">${project.number}</span>
        </div>
        <h4 class="library-card-title">${project.title}</h4>
        <p class="library-card-text">${project.description}</p>
        <div class="library-link-row">
          <a href="${externalHref(project.storymap)}" class="library-link cyan" target="_blank" rel="noopener">StoryMap</a>
          <a href="${externalHref(project.report)}" class="library-link white" target="_blank" rel="noopener">Report</a>
          <a href="${externalHref(project.github || PROFILE_GITHUB_URL)}" class="library-link white" target="_blank" rel="noopener">GitHub</a>
          <a href="${projectCaseStudyHref(project)}" class="library-link emerald">Case Study</a>
        </div>
      </article>`;
  }

  window.PortfolioComponents = window.PortfolioComponents || {};
  window.PortfolioComponents.ProjectActions = ProjectActions;
  window.PortfolioComponents.ProjectCard = ProjectCard;
  window.PortfolioComponents.ProjectLibraryCard = ProjectLibraryCard;
})();
