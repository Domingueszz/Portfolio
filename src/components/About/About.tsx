import React from 'react';
import StatCard from './StatCard';
import styles from './About.module.css';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const stats = [
    {
      id: 'technical-mec',
      title: 'Completed Technical Mechatronics',
      icon: 'mortarboard'
    },
    {
      id: 'graduating-ads',
      title: 'Graduating in Technology ADS',
      icon: 'document'
    },
    {
      id: 'working-2rp',
      title: 'Working at 2RP Net',
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
        </div>
      </section>
    </>
  );
};

export default About;