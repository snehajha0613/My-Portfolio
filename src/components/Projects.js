import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My <span>Projects</span>
        </motion.h2>
        <div className="title-underline mx-auto mb-5"></div>

        <div className="row">
          {/* Project 1 */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-card">
              <div className="project-body">
                <h5 className="project-name">SheSafe+</h5>
                <p className="project-text">
                  A women safety application with SOS alert and real-time 
                  location tracking for emergency situations.
                </p>
                <ul className="project-list">
                  <li>Real-time location tracking</li>
                  <li>SOS alert system</li>
                  <li>Firebase integration</li>
                </ul>
                <p className="project-role">
                  Role: Frontend Developer & Firebase Integration
                </p>
                <div className="project-tech-stack">
                  React • Firebase • APIs
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-card">
              <div className="project-body">
                <h5 className="project-name">Career Hub</h5>
                <p className="project-text">
                  A student career platform with resume builder, job listings, 
                  and mentor interaction system.
                </p>
                <ul className="project-list">
                  <li>Resume builder feature</li>
                  <li>Job listing system</li>
                  <li>Mentor-student interaction</li>
                </ul>
                <p className="project-role">
                  Role: UI Design & Feature Implementation
                </p>
                <div className="project-tech-stack">
                  React • JavaScript • Bootstrap
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-card">
              <div className="project-body">
                <h5 className="project-name">NAAC Automation System</h5>
                <p className="project-text">
                  A system to automate academic compliance processes and 
                  generate reports under NAAC criteria.
                </p>
                <ul className="project-list">
                  <li>Student & faculty management</li>
                  <li>Mentor-mentee tracking</li>
                  <li>Report generation</li>
                </ul>
                <p className="project-role">
                  Role: Frontend Developer & System Design
                </p>
                <div className="project-tech-stack">
                  React • Java • MySQL
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 */}
          <motion.div 
            className="col-lg-6 mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-card">
              <div className="project-body">
                <h5 className="project-name">HomeServe</h5>
                <p className="project-text">
                  A home services platform for booking cleaning, repair, 
                  and maintenance services with user ratings.
                </p>
                <ul className="project-list">
                  <li>Service booking system</li>
                  <li>User ratings & reviews</li>
                  <li>Responsive UI design</li>
                </ul>
                <p className="project-role">
                  Role: Frontend Development & UI Design
                </p>
                <div className="project-tech-stack">
                  React • JavaScript • Bootstrap
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Projects;