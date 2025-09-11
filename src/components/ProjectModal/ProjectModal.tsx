import React from 'react';
import styles from './ProjectModal.module.css';

// Interface atualizada para incluir a nova descrição
interface ProjectData {
  title: string;
  description: string;
  detailedDescription?: string; // NOVO
  image: string;
  mainImage?: string;
  galleryImages?: string[];
  videos?: string[];
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Determina qual imagem e descrição serão exibidas no modal
  const displayImage = project.mainImage || project.image;
  const displayDescription = project.detailedDescription || project.description; // NOVO

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>

        <h1 className={styles.projectTitle}>{project.title}</h1>

        <img
          src={displayImage}
          alt={`Imagem principal do projeto ${project.title}`}
          className={styles.mainImage}
        />

        <div className={styles.projectDescription}>
          <h2>Sobre o Projeto</h2>
          <p>{displayDescription}</p> {/* AQUI: Usamos a descrição determinada */}
        </div>

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