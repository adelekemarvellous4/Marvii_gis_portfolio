(function () {
  function ContactSection() {
    return String.raw`<!-- Contact Section -->
<section id="contact" class="contact section">
  <div class="container">
    <div class="fade-up contact-heading-wrap">
      <span class="section-label">Get In Touch</span>
      <h2 class="section-heading">Let’s Work Together</h2>
      <p class="section-subtitle contact-subtitle">
        Have a project in mind, need a GIS analyst, or want to collaborate on spatial research? Send a message and I’ll get back to you.
      </p>
    </div>

    <div class="contact-grid">
      <!-- Left column -->
      <div class="contact-side fade-left">
        <div class="contact-side-card contact-intro-card">
          <span class="contact-mini-label">Open to</span>
          <h3>Freelance GIS, spatial analysis, and research collaboration</h3>
          <p>
            I work across remote sensing, environmental monitoring, cartography, spatial data science, and geospatial web workflows.
          </p>
        </div>

        <div class="contact-cards">
          <a href="mailto:adelekemarvellous4@gmail.com" class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-card-text">
              <div class="contact-label">Email</div>
              <div class="contact-value">adelekemarvellous4@gmail.com</div>
            </div>
          </a>

          <div class="contact-card">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-card-text">
              <div class="contact-label">Location</div>
              <div class="contact-value">Akure, Ondo State, Nigeria</div>
            </div>
          </div>

          <a href="https://github.com/adelekemarvellous" target="_blank" class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-github"></i>
            </div>
            <div class="contact-card-text">
              <div class="contact-label">GitHub</div>
              <div class="contact-value">@adelekemarvellous</div>
            </div>
          </a>

          <a href="https://linkedin.com/in/adelekemarvellous14" target="_blank" class="contact-card">
            <div class="contact-icon">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="contact-card-text">
              <div class="contact-label">LinkedIn</div>
              <div class="contact-value">Adeleke Marvellous Ayomide</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Right column -->
      <div class="contact-cta fade-right">
        <div class="contact-cta-top">
          <span class="contact-mini-label">Project Inquiry</span>
          <h3>Ready to start a project?</h3>
          <p>
            Share your project idea, study area, data needs, or collaboration request. I’ll review it and respond through email.
          </p>
        </div>

<form
  class="contact-form"
  id="contact-form"
  action="https://formspree.io/f/xvzvjnav"
  method="POST"
>
  <div class="form-row">
    <div class="form-group">
      <label for="name">Full Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your full name"
        required
      >
    </div>

    <div class="form-group">
      <label for="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="you@example.com"
        required
      >
    </div>
  </div>

  <div class="form-group">
    <label for="subject">Subject</label>
    <input
      type="text"
      id="subject"
      name="subject"
      placeholder="GIS mapping, remote sensing, consultation..."
      required
    >
  </div>

  <div class="form-group">
    <label for="message">Project Message</label>
    <textarea
      id="message"
      name="message"
      rows="6"
      placeholder="Tell me what you need help with, your goals, timeline, or collaboration idea."
      required
    ></textarea>
  </div>

  <input type="hidden" name="_subject" value="New inquiry from Adeleke Marvellous portfolio">

  <div class="form-feedback" id="form-feedback" aria-live="polite"></div>

  <button type="submit" class="btn btn-primary contact-submit-btn" id="contact-submit-btn">
    <i class="fas fa-paper-plane"></i>
    <span>Send Message</span>
  </button>
</form>

        <div class="contact-action-row">
          <a href="assets/document/Adeleke Marvellous CV.pdf" class="btn btn-outline" target="_blank">
            <i class="fas fa-file-download"></i>
            <span>Download CV</span>
          </a>

          <a href="https://linkedin.com/in/adelekemarvellous14" target="_blank" class="btn btn-outline">
            <i class="fab fa-linkedin-in"></i>
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`;
  }

  window.PortfolioSections = window.PortfolioSections || {};
  window.PortfolioSections.ContactSection = ContactSection;
})();

