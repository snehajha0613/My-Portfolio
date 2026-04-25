import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-md-6">

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm <span>Sneha Jha</span>
            </motion.h1>

            <motion.h3
              className="hero-role"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.h3>

            <motion.p
              className="hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              A passionate Computer Science student focused on building modern,
              responsive, and user-friendly web applications using React and
              latest technologies.
            </motion.p>

            {/* BUTTONS WITH ICONS */}
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >

              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaFileDownload className="me-2" />
                Resume
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/snehajha0613"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-dark"
              >
                <FaGithub className="me-2" />
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sneha-jha-02sj"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary"
              >
                <FaLinkedin className="me-2" />
                LinkedIn
              </a>

            </motion.div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="col-md-6 d-flex justify-content-center">
            <motion.div 
              className="hero-img-wrapper"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/profile.png"
                alt="profile"
                className="hero-img-circle"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;