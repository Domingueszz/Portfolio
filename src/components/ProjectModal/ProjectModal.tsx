import React from 'react';
import styles from './ProjectModal.module.css';

// Definindo os tipos para os dados do projeto (deve ser o mesmo que Discipline)
interface ProjectData {
  title: string;
  description: string;
  image: string; // Imagem do card
  mainImage?: string; // Imagem principal opcional para o modal
  galleryImages?: string[];
  videos?: string[];
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void; // Função para fechar o modal
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Determina qual imagem será exibida como principal no modal
  const displayImage = project.mainImage || project.image;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>

        <h1 className={styles.projectTitle}>{project.title}</h1>

        <img
          src={displayImage} // AQUI: Usamos a imagem determinada
          alt={`Imagem principal do projeto ${project.title}`}
          className={styles.mainImage}
        />

        <div className={styles.projectDescription}>
          <h2>Sobre o Projeto</h2>
          <p>{project.description}</p>
        </div>

        {/* Espaço para mais fotos e vídeos */}
        <div className={styles.gallerySection}>
          <h2>Galeria de Fotos e Vídeos</h2>
          <div className={styles.galleryGrid}>
            {project.galleryImages && project.galleryImages.length > 0 ? (
              project.galleryImages.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Imagem ${index + 1} da galeria`} />
              ))
            ) : (
              <p>Nenhuma imagem adicional na galeria.</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;