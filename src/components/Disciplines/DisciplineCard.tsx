import React from 'react';
import styles from './DisciplineCard.module.css';

interface DisciplineCardProps {
  title: string;
  description: string;
  image: string;
  onViewProject: () => void; // Nova propriedade: uma função a ser chamada no clique
}

const DisciplineCard: React.FC<DisciplineCardProps> = ({
  title,
  description,
  image,
  onViewProject // Recebemos a função aqui
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
        <button
          className={styles.viewButton}
          aria-label={`View details for ${title}`}
          onClick={onViewProject} // Adicionamos o evento onClick aqui
        >
          Ver Projeto
        </button>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  );
};

export default DisciplineCard;