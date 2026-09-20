/* ============================================
   Personal Website — Ruihan Cui
   TypeScript + Vite
   ============================================ */

   interface Profile {
    name: string;
    title: string;
    tagline: string;
    about: string[];
    education: Education[];
    research: ResearchArea[];
    skills: SkillGroup[];
    contact: Contact[];
  }
  
  interface Education {
    school: string;
    degree: string;
    period: string;
    details?: string;
  }
  
  interface ResearchArea {
    title: string;
    description: string;
  }
  
  interface SkillGroup {
    category: string;
    items: string[];
  }
  
  interface Contact {
    label: string;
    value: string;
    href: string;
  }
  
  const profile: Profile = {
    name: "Ruihan Cui",
    title: "MSc Student in Computer Science",
    tagline: "SJTU - Télécom Paris · Institut Polytechnique de Paris",
    about: [
      "I am a graduate student in the double-degree program between Shanghai Jiao Tong University and Télécom Paris, specializing in Natural Language Processing.",
      "My research focuses on agent reasoning tools and error detection mecanisms",
      "I enjoy working on problems that sit at the intersection of machine learning theory and real-world impact — especially those that contribute to language preservation and digital inclusion."
    ],
    education: [
      {
        school: "Shanghai Jiao Tong University — Paris Elite Institute of Technology",
        degree: "Master",
        period: "2026 — 2029",
        details: "Computer Science "
      },
      {
        school: "Shanghai Jiao Tong University — Paris Elite Institute of Technology",
        degree: "Bachelor",
        period: "2022 — 2026",
        details: "Integrated French engineering curriculum. "
      }
    ],
    research: [
      {
        title: "Low-Resource Language NLP",
        description: "Building datasets and models for minority and underrepresented languages, with a focus on rule-guided generation and quality validation."
      },
      {
        title: "Large Language Models",
        description: "Exploring the intersection of LLMs with structured knowledge and linguistic rules to reduce hallucination and improve reliability."
      },
      {
        title: "Dataset Construction & Evaluation",
        description: "Designing evaluation benchmarks for low-resource languages and studying synthetic data quality in limited-resource settings."
      }
    ],
    skills: [
      { category: "Languages", items: ["Python", "C++", "TypeScript", "SQL", "R"] },
      { category: "ML / NLP", items: ["PyTorch", "HuggingFace", "Transformers", "Scikit-learn", "spaCy"] },
      { category: "Tools", items: ["Git", "Linux", "Docker", "LaTeX", "Jupyter"] },
      { category: "Spoken Languages", items: ["Chinese (native)", "French (B2)", "English (fluent)"] }
    ],
    contact: [
      { label: "Email", value: "your.email@telecom-paris.fr", href: "mailto:your.email@telecom-paris.fr" },
      { label: "GitHub", value: "github.com/yourusername", href: "https://github.com/yourusername" },
      { label: "LinkedIn", value: "linkedin.com/in/yourusername", href: "https://linkedin.com/in/yourusername" }
    ]
  };
  
  /* ============================================
     Render functions
     ============================================ */
  
  function renderAbout(about: string[]): string {
    return `
      <section id="about" class="section">
        <h2 class="section-title">About</h2>
        <div class="section-content">
          ${about.map(p => `<p>${p}</p>`).join("")}
        </div>
      </section>
    `;
  }
  
  function renderEducation(education: Education[]): string {
    const items = education.map(e => `
      <div class="edu-item">
        <div class="edu-header">
          <h3>${e.school}</h3>
          <span class="edu-period">${e.period}</span>
        </div>
        <p class="edu-degree">${e.degree}</p>
        ${e.details ? `<p class="edu-details">${e.details}</p>` : ""}
      </div>
    `).join("");
  
    return `
      <section id="education" class="section">
        <h2 class="section-title">Education</h2>
        <div class="section-content">${items}</div>
      </section>
    `;
  }
  
  function renderResearch(research: ResearchArea[]): string {
    const items = research.map(r => `
      <div class="research-item">
        <h3>${r.title}</h3>
        <p>${r.description}</p>
      </div>
    `).join("");
  
    return `
      <section id="research" class="section">
        <h2 class="section-title">Research Interests</h2>
        <div class="section-content research-grid">${items}</div>
      </section>
    `;
  }
  
  function renderSkills(skills: SkillGroup[]): string {
    const groups = skills.map(g => `
      <div class="skill-group">
        <h4>${g.category}</h4>
        <div class="skill-tags">
          ${g.items.map(s => `<span class="skill-tag">${s}</span>`).join("")}
        </div>
      </div>
    `).join("");
  
    return `
      <section id="skills" class="section">
        <h2 class="section-title">Skills</h2>
        <div class="section-content">${groups}</div>
      </section>
    `;
  }
  
  function renderContact(contacts: Contact[]): string {
    const links = contacts.map(c => `
      <a href="${c.href}" target="_blank" rel="noopener noreferrer" class="contact-link">
        <span class="contact-label">${c.label}</span>
        <span class="contact-value">${c.value}</span>
      </a>
    `).join("");
  
    return `
      <section id="contact" class="section">
        <h2 class="section-title">Contact</h2>
        <div class="section-content contact-list">${links}</div>
      </section>
    `;
  }
  
  function renderHeader(p: Profile): string {
    return `
      <header class="hero">
        <div class="hero-content">
          <h1>${p.name}</h1>
          <p class="hero-title">${p.title}</p>
          <p class="hero-tagline">${p.tagline}</p>
          <nav class="hero-nav">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#research">Research</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    `;
  }
  
  function renderFooter(name: string): string {
    const year = new Date().getFullYear();
    return `
      <footer class="footer">
        <p>© ${year} ${name}. Hosted on GitHub Pages.</p>
      </footer>
    `;
  }
  
  /* ============================================
     Main
     ============================================ */
  
  function main(): void {
    const app = document.getElementById("app");
    if (!app) return;
  
    app.innerHTML = `
      ${renderHeader(profile)}
      <main class="container">
        ${renderAbout(profile.about)}
        ${renderEducation(profile.education)}
        ${renderResearch(profile.research)}
        ${renderSkills(profile.skills)}
        ${renderContact(profile.contact)}
      </main>
      ${renderFooter(profile.name)}
    `;
  
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute("href")!);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }
  
  main();