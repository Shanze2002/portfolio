import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTooth,
  FaCheck,
  FaStar,
} from "react-icons/fa";
import gymImg from "../assets/GYM.png";
import studentImg from "../assets/student.png";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projectList = [
    {
      id: "sunrise",
      featured: true,
      categoryFilter: ["featured", "fullstack"],
      name: "Sunrise Dental Clinic",
      year: "2026",
      category: "Enterprise Web System",
      badgeText: "Enterprise Flagship",
      visualType: "custom-dental",
      description:
        "Comprehensive clinic management platform designed for full dental practice operations — managing appointments, patient electronic records, dental treatments, automated billing, doctor schedules, and audit reporting.",
      features: [
        "Patient records, dentist scheduling, and multi-step treatment workflows",
        "Point of Sale billing, automated invoice generation, and discount tiers",
        "Role-Based Access Control (Admin, Receptionist, Doctor) with secure session handling",
        "Automated email notifications, daily activity logs, and monthly revenue analytics",
      ],
      technologies: ["Java", "Servlets", "MySQL", "JavaScript", "HTML5", "CSS3", "REST APIs"],
      github: "https://github.com/Shanze2002/Sunrise-Dental-Clinic",
      live: null,
    },
    {
      id: "cv-analyzer",
      featured: true,
      categoryFilter: ["featured", "fullstack", "ai"],
      name: "CV Analyzer System",
      year: "2025",
      category: "AI Web Application",
      badgeText: "AI Powered",
      visualType: "custom-ai",
      description:
        "An AI-assisted recruitment platform that parses candidate resumes, extracts core competencies, and calculates candidate matching scores for expedited hiring reviews.",
      features: [
        "Automated CV text extraction and skill keyword matching",
        "Candidate qualification scorecards with strengths and weaknesses",
        "Recruiter dashboard for comparing applicants side-by-side",
        "Fast client interface built with React and Express API backend",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "Vite", "REST API"],
      github: "https://github.com/Shanze2002/cv-analyzer",
      live: "https://cv-analyzer-orcin.vercel.app",
    },
    {
      id: "inventory",
      featured: false,
      categoryFilter: ["fullstack"],
      name: "Inventory Management System",
      year: "2024",
      category: "Full Stack Application",
      badgeText: "Supply Chain",
      visualType: "custom-inventory",
      description:
        "Full-cycle inventory control software designed for retail and warehouse operations, providing live stock level alerts, supplier directories, and sales logs.",
      features: [
        "Real-time SKU catalog with threshold low-stock warning triggers",
        "Sales logging, purchase invoice tracking, and customer balance ledgers",
        "Visual sales trends and monthly profit/loss reports",
      ],
      technologies: ["React", "Node.js", "Express", "MySQL", "CSS Modules"],
      github: "https://github.com/Shanze2002/inventory-management-system",
      live: null,
    },
    {
      id: "gym",
      featured: false,
      categoryFilter: ["management", "php"],
      name: "Gym Management System",
      year: "2024",
      category: "Web Application",
      badgeText: "Operations",
      image: gymImg,
      description:
        "A gym administration system developed to automate member check-ins, subscription membership renewals, trainer scheduling, and payment receipts.",
      features: [
        "Member profile database with renewal alerts and subscription statuses",
        "Daily attendance monitoring and locker/equipment assignments",
        "Admin control panel with revenue summaries and membership tier management",
      ],
      technologies: ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Shanze2002/GYM",
      live: null,
    },
    {
      id: "school",
      featured: false,
      categoryFilter: ["management", "group"],
      name: "School Management System",
      year: "2025",
      category: "Group Project",
      badgeText: "Cross-Platform",
      image: studentImg,
      description:
        "Collaborative academic platform integrating web dashboards with mobile accessibility for teachers, students, parents, and administrative staff.",
      features: [
        "Student enrollment, timetable schedules, and examination grade publishing",
        "Parent-teacher communication channels and attendance alerts",
        "Team-developed with strict Git branching, code reviews, and role division",
      ],
      technologies: ["React", "PHP", "MySQL", "Android", "Git"],
      github: null,
      live: null,
    },
  ];

  const filterButtons = [
    { label: "All Projects", value: "all" },
    { label: "Featured & Enterprise", value: "featured" },
    { label: "Full Stack & AI", value: "fullstack" },
    { label: "Management Systems", value: "management" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((p) => p.categoryFilter.includes(activeFilter));

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <span className="section-tag">Featured Work</span>
        <h2>
          Engineered for <span>Real Impact</span>
        </h2>
        <p>
          Explore production-grade enterprise software, AI screening tools, and
          operational management platforms built with high standards.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filter-bar">
        {filterButtons.map((btn) => (
          <button
            key={btn.value}
            className={`filter-btn ${activeFilter === btn.value ? "active" : ""}`}
            onClick={() => setActiveFilter(btn.value)}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`project-card ${isFeatured ? "featured" : ""}`}
              >
                {/* 1. Crystal-Clear Project Header Bar (Project Name Front & Center) */}
                <div className="project-card-header">
                  <div className="project-header-info">
                    <span className="project-category-tag">{project.category}</span>
                    <h3 className="project-card-name">{project.name}</h3>
                  </div>
                  <div className="project-header-badges">
                    {project.featured && (
                      <span className="flagship-badge">
                        <FaStar className="star-icon" /> Featured
                      </span>
                    )}
                    <span className="project-year-pill">{project.year}</span>
                  </div>
                </div>

                {/* Card Main Content */}
                <div className="project-card-content">
                  {/* 2. Visual Media Section */}
                  <div className="project-media-wrapper">
                    {project.image ? (
                      <div className="project-image-box">
                        <img
                          src={project.image}
                          alt={`${project.name} preview`}
                          className="project-thumb"
                          loading="lazy"
                        />
                        <div className="project-image-overlay"></div>
                      </div>
                    ) : project.visualType === "custom-dental" ? (
                      <div className="custom-visual dental-visual">
                        <div className="mockup-browser-bar">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                          <span className="mockup-url">clinic.sunrise-dental.internal/portal</span>
                        </div>
                        <div className="dental-mockup-content">
                          <div className="dental-stat-row">
                            <div className="mock-card">
                              <span className="mock-label">Active Patients</span>
                              <span className="mock-num">1,420+</span>
                            </div>
                            <div className="mock-card">
                              <span className="mock-label">Appointments</span>
                              <span className="mock-num">380/mo</span>
                            </div>
                            <div className="mock-card highlight">
                              <span className="mock-label">Revenue Billing</span>
                              <span className="mock-num">$14.2k</span>
                            </div>
                          </div>
                          <div className="mock-schedule-row">
                            <div className="mock-row-item">
                              <FaTooth className="tooth-accent" />
                              <span>Dr. Perera • Root Canal Treatment</span>
                              <span className="mock-status-pill green">Completed</span>
                            </div>
                            <div className="mock-row-item">
                              <FaTooth className="tooth-accent" />
                              <span>Dr. Anas • Orthodontic Checkup</span>
                              <span className="mock-status-pill blue">In Progress</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : project.visualType === "custom-ai" ? (
                      <div className="custom-visual ai-visual">
                        <div className="mockup-browser-bar">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                          <span className="mockup-url">cv-analyzer-orcin.vercel.app</span>
                        </div>
                        <div className="ai-mockup-content">
                          <div className="ai-score-badge">
                            <div className="ai-circle">94%</div>
                            <div>
                              <div className="ai-verdict">Strong Candidate Match</div>
                              <div className="ai-role">Full-Stack Engineer Role</div>
                            </div>
                          </div>
                          <div className="ai-skills-detected">
                            <span className="ai-tag">React.js 98%</span>
                            <span className="ai-tag">Java 92%</span>
                            <span className="ai-tag">MySQL 90%</span>
                            <span className="ai-tag">APIs 95%</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="custom-visual inventory-visual">
                        <div className="mockup-browser-bar">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                          <span className="mockup-url">localhost:3000/inventory/dashboard</span>
                        </div>
                        <div className="inventory-mockup-content">
                          <div className="inv-stats">
                            <div className="inv-pill">Total SKUs: 1,840</div>
                            <div className="inv-pill alert">Low Stock: 3 items</div>
                          </div>
                          <div className="inv-chart-lines">
                            <div className="bar bar-1"></div>
                            <div className="bar bar-2"></div>
                            <div className="bar bar-3"></div>
                            <div className="bar bar-4"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Project Body Info */}
                  <div className="project-body">
                    <p className="project-description-text">{project.description}</p>

                    <div className="project-features-box">
                      <span className="features-headline">Key Capabilities:</span>
                      <ul className="project-feature-bullets">
                        {project.features.map((feature) => (
                          <li key={feature}>
                            <FaCheck className="feature-check-icon" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-tech-stack">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-actions-strip">
                      {project.github && (
                        <a
                          href={project.github}
                          className="project-action-btn github-btn"
                          target="_blank"
                          rel="noreferrer"
                          title="View Source on GitHub"
                        >
                          <FaGithub /> Source Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className="project-action-btn live-btn"
                          target="_blank"
                          rel="noreferrer"
                          title="View Live Application"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
