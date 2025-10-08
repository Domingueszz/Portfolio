import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './Certificates.module.css';
import udemyImg from '../../assets/images/udemy.png';
import awsImg from '../../assets/images/aws.png';
import cloudImg from '../../assets/images/cloud.png';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  url: string;
};

const certificatesData: Certificate[] = [
  {
    id: 1,
    title: 'Formação Front-end - HTML, CSS, JavaScript, React e +',
    issuer: 'Udemy',
    date: 'Setembro 2025',
    image: udemyImg,
    url: 'https://www.udemy.com/certificate/UC-34f68886-bb7b-4c68-ad91-f7d129cfbebd/',
  },
  {
    id: 2,
    title: 'AWS Academy Graduate - Cloud Foundations - Training Badge',
    issuer: 'Amazon Web Services Training and Certification',
    date: 'Maio 2025',
    image: awsImg,
    url: 'https://www.credly.com/badges/771c4bf2-4fad-4be0-b7d9-d51c6e79f56d/linked_in_profile',
  },
  {
    id: 3,
    title: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
    date: 'Julho 2025',
    image: cloudImg,
    url: 'https://www.credly.com/badges/2137f9cb-b278-44d7-a81e-0c3cf302127c/linked_in_profile',
  }
];

const Certificates: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certificates" className={styles.certificates}>
      <div className="container">
        <div
          ref={titleRef}
          className={`${styles.titleContent} ${titleInView ? styles.isVisible : ''}`}
        >
          <h2 className={styles.heading}>
            Principais <span className={styles.highlight}>Certificados</span>
          </h2>
          <p className={styles.subheading}>
            Uma coleção das minhas conquistas e qualificações profissionais.
          </p>
        </div>

        <div ref={gridRef} className={styles.certificatesGrid}>
          {certificatesData.map((cert, index) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir certificado: ${cert.title} — ${cert.issuer} (${cert.date})`}
              className={`${styles.certificateCard} ${gridInView ? styles.isVisible : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={styles.cardContentWrapper}>
                <div className={styles.imageWrap}>
                  <img
                    src={cert.image}
                    alt={`Certificado: ${cert.title} (${cert.issuer})`}
                    className={styles.cardImageContain}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src =
                        'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250"><rect width="100%" height="100%" fill="lightgray"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="16">Imagem indisponível</text></svg>';
                    }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{cert.title}</h3>
                  <p className={styles.cardIssuer}>
                    {cert.issuer} — {cert.date}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;