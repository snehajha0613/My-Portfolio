import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certifications() {
  const certs = [
    { name: "Data Science Training – Acmegrade", file: "/certificates/datascience.pdf" },
    { name: "Data Science Internship – Acmegrade", file: "/certificates/internship.pdf" },
    { name: "Drone Technology – IIT Mandi", file: "/certificates/drone.pdf" },
    { name: "IoT Workshop – NIT Kurukshetra", file: "/certificates/iot.pdf" },
    { name: "Deloitte Data Analytics – Forage", file: "/certificates/deloitte.pdf" },
    { name: "Tata GenAI Data Analytics – Forage", file: "/certificates/tata.pdf" },
    { name: "Full Stack Bootcamp – K.R. Mangalam University", file: "/certificates/fullstack.pdf" },
    { name: "Career Skills Bootcamp – K.R. Mangalam University", file: "/certificates/career.pdf" }
  ];

  return (
    <section id="certifications" className="cert-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Certifications</span>
        </motion.h2>
        <div className="title-underline mx-auto mb-5"></div>

        <div className="row">
          {certs.map((cert, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <motion.div 
                className="cert-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon">
                  <FaCertificate />
                </div>
                <h6 className="cert-name">{cert.name}</h6>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Document <FaExternalLinkAlt size={12} />
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;