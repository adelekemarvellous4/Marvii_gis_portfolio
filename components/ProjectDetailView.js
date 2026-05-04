(function () {
  function listItems(items) {
    return items.map(item => `<li>${item}</li>`).join('');
  }

  function ProjectDetailView(project) {
    const actions = window.PortfolioComponents.ProjectActions(project);
    const imageSrc = project.image || '';

    return `
      <main class="project-page">
        <section class="project-page-hero">
          <div class="container">
            <a href="#projects" class="project-back-link">
              <i class="fas fa-arrow-left"></i>
              <span>Back to Portfolio</span>
            </a>

            <div class="project-page-grid">
              <div class="project-page-copy fade-up visible">
                <div class="project-number">CASE STUDY ${project.number}</div>
                <h1 class="project-page-title">${project.title}</h1>
                <p class="project-category">${project.category}</p>
                <p class="project-description">${project.description}</p>
                ${actions}
              </div>

              <div class="project-page-visual fade-up visible">
                ${imageSrc ? `<img src="${imageSrc}" alt="${project.title} project visual" />` : ''}
                <span class="project-image-note"><i class="fas fa-image"></i>${project.visualLabel}</span>
              </div>
            </div>
          </div>
        </section>

        <section class="project-page-body section">
          <div class="container project-page-detail-grid">
            <article class="detail-card">
              <div class="detail-label">Objective</div>
              <p class="detail-text">${project.objective}</p>
            </article>

            <article class="detail-card">
              <div class="detail-label">Insight</div>
              <p class="detail-text">${project.insight}</p>
            </article>

            <article class="detail-card">
              <div class="detail-label">Methods</div>
              <ul class="detail-text project-output-list">${listItems(project.methods)}</ul>
            </article>

            <article class="detail-card">
              <div class="detail-label">Key Metrics</div>
              <ul class="detail-text project-output-list">${listItems(project.metrics)}</ul>
            </article>

            <article class="detail-card">
              <div class="detail-label">Workflow</div>
              <ul class="detail-text project-output-list">${listItems(project.workflow)}</ul>
            </article>

            <article class="detail-card">
              <div class="detail-label">Outputs</div>
              <ul class="detail-text project-output-list">${listItems(project.outputs)}</ul>
            </article>
          </div>
        </section>
      </main>`;
  }

  window.PortfolioComponents = window.PortfolioComponents || {};
  window.PortfolioComponents.ProjectDetailView = ProjectDetailView;
})();
