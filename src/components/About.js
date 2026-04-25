import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-md-6">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              About Me
            </motion.h2>

            <p className="about-text">
              I am a Computer Science undergraduate passionate about building
              modern web applications. I enjoy solving real-world problems and
              creating user-friendly, scalable solutions using technologies like
              React, Firebase, and MySQL.
            </p>

            <p className="about-text">
              I am always eager to learn new technologies and improve my skills
              in development and problem-solving.
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="col-md-6">
            <div className="about-cards">

              <div className="about-card">
                <h5>💻 Web Development</h5>
                <p>Building responsive and modern web apps</p>
              </div>

              <div className="about-card">
                <h5>⚡ Problem Solving</h5>
                <p>Strong logical and analytical thinking</p>
              </div>

              <div className="about-card">
                <h5>🚀 Fast Learner</h5>
                <p>Quickly adapting to new technologies</p>
              </div>

              <div className="about-card">
                <h5>🤝 Team Work</h5>
                <p>Collaborative and communication skills</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;