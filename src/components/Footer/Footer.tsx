import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <div className="section-divider" aria-hidden="true"></div>
      <footer id="contact" className={styles.footer} role="contentinfo">
        <div className="container">
          <div className={styles.content}>
            <nav className={styles.nav} aria-label="Footer navigation">
              <ul className={styles.linkList}>
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <p className={styles.copyright}>
              © {currentYear} Pablo. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;