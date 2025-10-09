import React, { useState, useEffect } from 'react';
import StatCard from './StatCard';
import styles from './About.module.css';
import { IoClose } from 'react-icons/io5';

import curriculoImg from '../../assets/curriculo/curriculo_Pablo_page-0001.jpg';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const stats = [
    {
      id: 'technical-mec',
      title: 'Formado em Técnico de Mecatrônica',
      icon: 'mortarboard'
    },
    {
      id: 'graduating-ads',
      title: 'Graduando em ADS',
      icon: 'document'
    },
    {
      id: 'working-2rp',
      title: 'Trabalhando na 2RP Net',
      icon: 'chart'
    }
  ];

  return (
    <>
      <div className="section-divider" aria-hidden="true"></div>
      <section id="about" className={styles.about}>
        <div className="container">
          <h2 className={styles.title}>SOBRE MIM</h2>
          
          <div className={styles.content}>
            <p className={styles.paragraph}>
              Formado como técnico em Mecatrônica, atualmente curso Superior de
              Tecnologia em Análise e Desenvolvimento de Sistemas. 
              Tenho experiência como estagiário na 2RP Net, onde venho aprimorando minhas habilidades
              em desenvolvimento e análise de sistemas.
            </p>
            
            <p className={styles.paragraph}>
              Sou uma pessoa organizada e comprometida, sempre buscando a excelência em cada projeto. 
              Minha paixão por aprendizado contínuo me motiva a explorar novas tecnologias 
              e aprimorar minhas habilidades no campo de programação.
            </p>
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                title={stat.title}
                icon={stat.icon}
              />
            ))}
          </div>

          <div className={styles.buttonContainer}>
            <button 
              onClick={() => setIsModalOpen(true)}
              className={styles.resumeButton}
            >
              Ver Currículo
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
              <IoClose />
            </button>
            <img src={curriculoImg} alt="Currículo de Pablo" className={styles.resumeImage} />
          </div>
        </div>
      )}
    </>
  );
};

export default About;