import React from "react";
import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>
              Entre em <span className={styles.highlight}>Contato</span>
            </h2>
            <p className={styles.subheading}>
              Vamos conversar! Você pode me encontrar nessas redes:
            </p>
            <div className={styles.icons}>
              <a
                href="https://github.com/Domingueszz"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
              >
                <FaGithub className={styles.icon} title="GitHub" />
              </a>

              <a
                href="https://www.linkedin.com/in/pablo-sanches-a3a691304/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
              >
                <FaLinkedin className={styles.icon} title="LinkedIn" />
              </a>

              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTNqGCPwcCJblKskmxtsZjHtrzfncplzWLBvQZmXMvQDJnDnXmGnpJRnwWzvZfgpDHqBcL"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
              >
                <FaEnvelope className={styles.icon} title="Email" />
              </a>

              <a
                href="https://www.instagram.com/paablo.vd/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.iconWrapper}
              >
                <FaInstagram className={styles.icon} title="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
