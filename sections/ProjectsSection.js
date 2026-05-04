(function () {
  function ProjectsSection() {
    return String.raw`<!-- Projects Section - Elite Hybrid -->
<section id="projects" class="projects section">
  <div class="container">
    <div class="fade-up" style="text-align: center; margin-bottom: 3rem;">
      <span class="section-label">Featured Projects</span>
      <h2 class="section-heading">Spatial Intelligence in Action</h2>
    </div>

    <div class="projects-shell">
      <div id="featured-projects-grid" class="featured-projects-grid"></div>
      <div id="featured-pagination" class="featured-pagination"></div>

      <div class="project-library fade-up" id="project-library">
        <div class="library-header">
          <div>
            <h3 class="library-title">Project Library</h3>
            <p class="library-subtitle">
              Browse the wider body of work by theme. Each project includes StoryMap, report, GitHub, and in-page case study actions where available.
            </p>
          </div>
          <span class="badge"><i class="fas fa-folder-tree"></i> More GIS Work</span>
        </div>
        <div class="library-filter-row" id="library-filter-row"></div>
        <div class="library-grid" id="library-grid"></div>
        <p class="project-helper-note">Tip: Replace placeholder external links with real StoryMap, GitHub, report, or dashboard URLs as each project asset is published.</p>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.ProjectsSection = ProjectsSection;
})();


