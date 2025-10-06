import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Certificates.module.css';

// Importe suas imagens aqui
// import certReact from '../../assets/certificates/cert-react.jpg';

const certificatesData = [
  {
    id: 1,
    title: 'Desenvolvimento Moderno com React',
    issuer: 'Udemy',
    date: 'Setembro 2025',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Certificado+React',
  },
  {
    id: 2,
    title: 'Java Spring Boot Avançado',
    issuer: 'Alura Cursos',
    date: 'Agosto 2025',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Certificado+Java',
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    date: 'Julho 2025',
    imageUrl: 'https://via.placeholder.com/400x250.png?text=Certificado+UI/UX',
  },
];

const Certificates: React.FC = () => {
  // Um 'ref' para o título
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Outro 'ref' para o grid de cards
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certificates" className={styles.certificates}>
      <div className="container">
        <div ref={titleRef} className={`${styles.titleContent} ${titleInView ? styles.isVisible : ''}`}>
          <h2 className={styles.heading}>
            Meus <span className={styles.highlight}>Certificados</span>
          </h2>
          <p className={styles.subheading}>
            Uma coleção das minhas conquistas e qualificações profissionais.
          </p>
        </div>

        <div ref={gridRef} className={styles.certificatesGrid}>
          {certificatesData.map((cert, index) => (
            <div
              key={cert.id}
              className={`${styles.certificateCard} ${gridInView ? styles.isVisible : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }} // Aumentei o delay para um efeito mais visível
            >
              <div className={styles.cardContentWrapper}> {/* Wrapper para o conteúdo */}
                <img src={cert.imageUrl} alt={`Certificado de ${cert.title}`} className={styles.cardImage} />
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cert.title}</h3>
                  <p className={styles.cardIssuer}>{`${cert.issuer} - ${cert.date}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;