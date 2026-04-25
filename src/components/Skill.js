import React from "react";
import { motion } from "framer-motion";
import { 
  FaJava, FaPython, FaJsSquare, 
  FaReact, FaHtml5, FaCss3Alt, 
  FaBootstrap 
} from "react-icons/fa";
import { SiMysql, SiFirebase } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "Java", icon: <FaJava />, color: "#007396" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ];

  return (
    <section className="skills-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical <span>Skills</span>
        </motion.h2>

        <div className="skills-grid mt-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: `0px 10px 20px ${skill.color}44` 
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <p className="skill-name">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;