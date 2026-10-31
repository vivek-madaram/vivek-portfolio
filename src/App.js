import './App.css';

const experience = [
  {
    role: 'Team Lead',
    company: 'iSpace Software Private Limited',
    client: 'Korn Ferry',
    period: 'Nov 2023 — Present',
    details: [
      'Lead a team of 5–6 engineers building KF Advance, an enterprise career services platform serving 10,000+ users.',
      'Architect React and TypeScript experiences for client, coach, and admin portals; built a library of 30+ reusable components.',
      'Integrated ChatGPT to summarize and rewrite feedback, and improved performance through lazy loading and code splitting.',
      'Containerized services with Docker, managed AWS deployments through CI/CD, and automated reporting with Smartsheet API.',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Cognizant',
    client: 'Legato Health Technologies',
    period: 'Feb 2023 — Nov 2023',
    details: [
      'Developed Node.js and Express APIs for Elevance Health customer chat, including messaging and agent connections.',
      'Used Checkmarx to identify and remediate security issues, and Redis to manage conversation data and expiration.',
      'Built Handlebars chat widgets that surfaced relevant customer information for support agents.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Cognizant',
    client: 'Legato Health Technologies',
    period: 'Aug 2022 — Jan 2023',
    details: [
      'Built a MERN employee management portal for course tracking, performance ratings, and subordinate feedback.',
      'Designed MongoDB and Mongoose schemas to retrieve employee data efficiently.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Wipro',
    client: 'HSBC',
    period: 'Jan 2021 — Aug 2022',
    details: [
      'Developed React interfaces for HSBCnet, contributing to a global internet banking platform used across 60+ countries.',
      'Delivered regional modules for Vietnam beneficiary management, Egypt bill payments, and US priority payments.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Wipro',
    client: 'FedEx',
    period: 'Jun 2018 — Jan 2021',
    details: [
      'Built modular React and JavaScript applications used across 15+ internal FedEx apps.',
      'Led reusable mobile plugins for Bluetooth, location, scanning, camera, and printing with React and Apache Cordova.',
      'Consolidated 45+ Jenkins jobs into a streamlined multi-branch CI/CD pipeline.',
    ],
  },
];

const skills = [
  { category: 'Frontend', items: 'React · Redux · TypeScript · JavaScript · HTML · CSS · Handlebars · Cordova' },
  { category: 'Backend', items: 'Node.js · Express · Java · REST APIs' },
  { category: 'Data', items: 'MongoDB · Mongoose · PostgreSQL · Redis' },
  { category: 'Cloud & delivery', items: 'AWS · Docker · Jenkins · CI/CD · Splunk · Nexus' },
  { category: 'Tools & security', items: 'Git · Bitbucket · Checkmarx · AEM · Smartsheet API' },
];

const links = [
  { label: 'GitHub', href: 'https://github.com/vivek-madaram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vivekmadaram/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/vivekmadaram/' },
];

function SectionTitle({ number, children }) {
  return (
    <div className="section-title">
      <span className="section-number">{number}</span>
      <h2>{children}</h2>
      <span className="section-rule" aria-hidden="true" />
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Vivek Madaram, home">Vivek Madaram<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" /> HYDERABAD, TELANGANA, INDIA</p>
            <h1 id="hero-title">Engineering<br />teams and <em>ideas</em><br />into impact.</h1>
            <p className="hero-intro">I’m Vivek Madaram, a team lead and senior full stack engineer building dependable, enterprise-scale products with thoughtful teams.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="mailto:vivek.madaram@gmail.com">Get in touch <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-metrics" aria-label="Career highlights">
              <div><strong>8+</strong><span>years building</span></div>
              <div><strong>30+</strong><span>shared components</span></div>
              <div><strong>10k+</strong><span>platform users</span></div>
            </div>
          </div>
          <div className="portrait-column">
            <div className="portrait-frame">
              <img
                src="/vivek-profile.png"
                alt="Portrait of Vivek Madaram"
                onError={(event) => { event.currentTarget.style.display = 'none'; }}
              />
            </div>
            <p className="portrait-caption"><span>01 / 05</span> FULL STACK · TEAM LEAD</p>
            <span className="hero-decoration" aria-hidden="true">V</span>
          </div>
        </section>

        <section className="experience-section content-section" id="experience">
          <SectionTitle number="01">Experience</SectionTitle>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="experience-item" key={`${job.company}-${job.period}`}>
                <div className="experience-index">0{index + 1}</div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}<span className="experience-client"> · Client: {job.client}</span></p>
                    </div>
                    <time>{job.period}</time>
                  </div>
                  <ul>{job.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-section content-section" id="expertise">
          <SectionTitle number="02">Technical expertise</SectionTitle>
          <p className="section-lede">A practical toolkit for building, shipping, and supporting products at scale.</p>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.category}>
                <span className="skill-index">0{index + 1}</span>
                <h3>{skill.category}</h3>
                <p>{skill.items}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section content-section" id="about">
          <SectionTitle number="03">A little about me</SectionTitle>
          <div className="about-grid">
            <p className="about-lede">I care about the way software is made as much as what it makes possible.</p>
            <div className="about-detail">
              <p>From global banking and logistics to career services and healthcare, I’ve worked with teams solving real operational problems for people at scale. I enjoy turning complex requirements into clear systems, helping engineers do their best work, and leaving the codebase better than I found it.</p>
              <div className="awards">
                <h3>Recognition</h3>
                <p><strong>2020</strong> · Three technical excellence and delivery awards, Wipro</p>
                <p><strong>2018</strong> · Best Employee recognition, FedEx</p>
                <p><strong>2016</strong> · Best Intern, Infochord Technologies</p>
              </div>
            </div>
          </div>
          <div className="education-row">
            <span>EDUCATION</span>
            <p><strong>B.Tech, Computer Science Engineering</strong> · Koneru Lakshmaiah College of Engineering (KL University)</p>
            <p>Cloud Computing specialization · CGPA 7.7 / 10 · 2014–2018</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">HAVE A CHALLENGE WORTH SOLVING?</p>
          <h2>Let’s build something<br /><em>that matters.</em></h2>
          <a className="button button-light" href="mailto:vivek.madaram@gmail.com">vivek.madaram@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="contact-details">
            <a href="tel:+919052519215">+91 90525 19215</a>
            <div className="social-links">
              {links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#top">VM<span>.</span></a>
        <p>Designed and built by Vivek Madaram · Hyderabad, India</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
