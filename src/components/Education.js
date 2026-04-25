import React from "react";
import { motion } from "framer-motion";

function Education() {
  const educationData = [
    {
      degree: "B.Tech in Computer Science",
      school: "K.R. Mangalam University",
      duration: "2022 – 2026",
    },
    {
      degree: "Senior Secondary (12th - CBSE)",
      school: "CBSE Board",
      duration: "2021 – 2022",
    },
    {
      degree: "Secondary (10th - CBSE)",
      school: "CBSE Board",
      duration: "2019 – 2020",
    },
  ];

  return (
    <section id="education" className="education-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Education</span>
        </motion.h2>
        <div className="title-underline mx-auto mb-5"></div>

        <div className="timeline-container">
          {educationData.map((item, index) => (
            <motion.div 
              className="timeline-card" 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="duration-tag">{item.duration}</span>
                <h5 className="degree-title">{item.degree}</h5>
                <p className="school-name">{item.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;