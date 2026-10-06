import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const serviceList = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Web Systems",
      category: "End-to-End Delivery",
      description:
        "Building tailored web platforms from inception to deployment. Ideal for clinic portals, inventory solutions, and internal enterprise tools.",
      deliverables: [
        "Interactive React user interfaces",
        "Robust Java, Node.js, or PHP backend",
        "Secure relational MySQL database schema",
      ],
    },
    {
      icon: <FaReact />,
      title: "Frontend UI Engineering",
      category: "React & Modern Web",
      description:
        "Converting design concepts into pixel-perfect, responsive, and blazing-fast web interfaces with smooth animations and state management.",
      deliverables: [
        "Component-driven modular React architecture",
        "Cross-browser mobile responsiveness",
        "Accessible, high-performance interactions",
      ],
    },
    {
      icon: <FaServer />,
      title: "Backend APIs & Services",
      category: "Server-Side Logic",
      description:
        "Engineering RESTful endpoints, secure authentication systems, session management, and business logic processing layers.",
      deliverables: [
        "Clean REST API contracts & documentation",
        "Role-Based Access Control (RBAC) security",
        "Email notifications & third-party integrations",
      ],
    },
    {
      icon: <FaDatabase />,
      title: "Database Modeling & SQL",
      category: "Data Integrity",
      description:
        "Architecting clean, normalized relational database schemas with data integrity constraints, indexing, and fast query execution.",
      deliverables: [
        "Normalized ER schema modeling",
        "Complex SQL queries, joins & stored procedures",
        "Audit logs & transactional data safety",
      ],
    },
    {
      icon: <FaCogs />,
      title: "System Refactoring & Fixes",
      category: "Code Quality",
      description:
        "Upgrading existing codebases, eliminating bugs, improving performance, and applying software engineering best practices.",
      deliverables: [
        "Code review & architectural cleanup",
        "Bug diagnosis & edge-case patching",
        "Speed optimization & bundle reduction",
      ],
    },
  ];

  return (
    <section id="services" className="section services-section">
      <div className="section-heading">
        <span className="section-tag">Value Proposition</span>
        <h2>
          Solutions I <span>Deliver</span>
        </h2>
        <p>
          Available for software engineering internships, specialized contract roles,
          and end-to-end product builds.
        </p>
      </div>

      <div className="services-grid-modern">
        {serviceList.map((service, index) => (
          <motion.div
            key={service.title}
            className="service-card-modern"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="service-card-top">
              <div className="service-icon-box">{service.icon}</div>
              <span className="service-tag-pill">{service.category}</span>
            </div>

            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-desc">{service.description}</p>

            <div className="service-deliverables">
              <span className="deliv-headline">What&apos;s Included:</span>
              <ul>
                {service.deliverables.map((item) => (
                  <li key={item}>
                    <FaCheckCircle className="deliv-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card-footer">
              <a href="#contact" className="service-discuss-link">
                <span>Discuss this service</span>
                <FaArrowRight className="link-arrow" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
