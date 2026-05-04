(function () {
  function FaqSection() {
    return String.raw`<!-- FAQ Section -->
<section class="faq section" id="faq">
  <div class="container">
    <div class="fade-up faq-heading">
      <span class="section-label">Frequently Asked Questions</span>
      <h2 class="section-heading">Questions About My GIS Work</h2>
      <p class="section-subtitle" style="margin: 0 auto; max-width: 760px;">
        A few questions that researchers, collaborators, recruiters, and clients may want to know.
      </p>
    </div>

    <div class="faq-list">
      <details class="faq-item fade-up">
        <summary>What kinds of GIS and remote sensing projects do you work on?</summary>
        <div class="faq-answer">
          <p>
            I work on projects involving land use land cover mapping, vegetation and carbon assessment, drought monitoring, suitability analysis, thermal analysis, environmental change detection, and geospatial reporting.
          </p>
        </div>
      </details>

      <details class="faq-item fade-up" style="transition-delay: 0.05s">
        <summary>Do you provide only maps, or also written interpretation?</summary>
        <div class="faq-answer">
          <p>
            I provide both. In addition to maps, I can deliver written interpretation, methodological explanation, charts, report-ready visuals, and presentation-friendly summaries.
          </p>
        </div>
      </details>

      <details class="faq-item fade-up" style="transition-delay: 0.1s">
        <summary>Which tools do you commonly use?</summary>
        <div class="faq-answer">
          <p>
            My workflow commonly includes ArcGIS Pro, ArcMap, Google Earth Engine, Python geospatial tools, and satellite-based datasets depending on the needs of the project.
          </p>
        </div>
      </details>

      <details class="faq-item fade-up" style="transition-delay: 0.15s">
        <summary>Are you available for freelance, remote, or collaborative work?</summary>
        <div class="faq-answer">
          <p>
            Yes. I am open to freelance GIS work, remote geospatial opportunities, collaborative research, and projects that require mapping, remote sensing, spatial analysis, or geospatial storytelling.
          </p>
        </div>
      </details>

      <details class="faq-item fade-up" style="transition-delay: 0.2s">
        <summary>Can you work on both academic and applied GIS projects?</summary>
        <div class="faq-answer">
          <p>
            Yes. I can support academic research, portfolio projects, environmental assessments, and applied spatial analysis tasks for practical decision-making and communication.
          </p>
        </div>
      </details>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.FaqSection = FaqSection;
})();

