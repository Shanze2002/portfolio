import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaServer,
  FaDatabase,
  FaCogs,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      type: "Core Skill",
      desc: "Building responsive, modern and high-performance web applications using HTML, CSS, JavaScript and React.",
    },
    {
      icon: <FaReact />,
      title: "Frontend Development",
      type: "UI/UX Focus",
      desc: "Creating interactive, smooth and user-friendly interfaces with modern design principles and React ecosystem.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      type: "Server Side",
      desc: "Developing secure and scalable backend systems using PHP, Java and API integration.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Design",
      type: "MySQL",
      desc: "Designing optimized database structures with relationships, normalization and performance tuning.",
    },
    {
      icon: <FaCogs />,
      title: "Software Engineering",
      type: "OOP Based",
      desc: "Developing structured applications using object-oriented programming principles and clean architecture.",
    },
  ];

  return (
    <section id="services" className="section services-section">

      <div className="section-heading">
        <span className="section-tag">SERVICES</span>

        <h2>
          What I <span>Do</span>
        </h2>

        <p>
          A combination of development skills focused on building modern,
          scalable and user-friendly digital solutions.
        </p>
      </div>

      <div className="services-grid">

        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >

            <div className="service-icon">
              {service.icon}
            </div>

            <span className="service-type">
              {service.type}
            </span>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Services;