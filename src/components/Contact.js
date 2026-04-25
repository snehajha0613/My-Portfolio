import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sneha2005jha@gmail.com",
      link: "mailto:sneha2005jha@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91-7339876093",
      link: "tel:+917339876093",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "View Profile",
      link: "https://www.linkedin.com/in/sneha-jha-02sj",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "View Projects",
      link: "https://github.com/snehajha0613",
    },
  ];

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In <span>Touch</span>
        </motion.h2>
        <div className="title-underline mx-auto mb-4"></div>
        
        <p className="contact-subtext text-center mb-5">
          I'm open to opportunities, collaborations, and internships.
        </p>

        <div className="row justify-content-center">
          {contacts.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon-wrapper">
                  {item.icon}
                </div>
                <h5 className="contact-title">{item.title}</h5>
                <p className="contact-value">{item.value}</p>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;