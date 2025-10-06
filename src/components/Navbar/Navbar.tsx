import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Adicionado 'certificates' para o IntersectionObserver
    const sections = ['home', 'about', 'disciplines', 'certificates', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Adicionado o item 'Certificados' no array de navegação
  const navItems = [
    { id: 'home', label: 'Menu' },
    { id: 'about', label: 'Sobre' },
    { id: 'disciplines', label: 'Projetos' },
    { id: 'certificates', label: 'Certificados' }, // NOVO ITEM
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <div className={styles.container}>
        <div className={styles.brand}>
          <button
            onClick={() => handleNavClick('home')}
            className={styles.brandButton}
            aria-label="Go to home section"
          >
            Pablo
          </button>
        </div>
        
        <ul className={styles.navList} role="menubar">
          {navItems.map((item) => (
            <li key={item.id} role="none">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`${styles.navLink} ${
                  activeSection === item.id ? styles.active : ''
                }`}
                role="menuitem"
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;