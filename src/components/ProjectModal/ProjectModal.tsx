import React from 'react';
import styles from './ProjectModal.module.css';

interface ProjectData {
  title: string;
  description: string;
  detailedDescription?: string; 
  repoUrl?: string;
  image: string;
  mainImage?: string;
  galleryImages?: string[];
  videos?: string[];
}

interface ProjectModalProps {
  project: ProjectData;
  onClose: () => void;
}

const getMediaType = (url: string): 'image' | 'video' | 'unknown' => {
  if (!url) return 'unknown';
  const extension = url.split('.').pop()?.toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'];
  const videoExtensions = ['mp4', 'webm', 'ogg'];

  if (imageExtensions.includes(extension!)) {
    return 'image';
  }
  if (videoExtensions.includes(extension!)) {
    return 'video';
  }
  return 'unknown';
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  React.useEffect(() => {}, []);

  const displayMediaUrl = project.mainImage || project.image;
  const displayDescription = project.detailedDescription || project.description;
  
  const mediaType = getMediaType(displayMediaUrl);

  const renderMedia = () => {
    switch (mediaType) {
      case 'image':
        return (
          <img
            src={displayMediaUrl}
            alt={`Imagem principal do projeto ${project.title}`}
            className={styles.mainMedia} 
          />
        );
      case 'video':
        return (
          <video
            src={displayMediaUrl}
            className={styles.mainMedia} 
            controls 
            autoPlay 
            muted   
            loop    
            playsInline 
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        );
      default:
        return (
          <img
            src={displayMediaUrl}
            alt={`Mídia do projeto ${project.title}`}
            className={styles.mainMedia}
          />
        );
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar modal">
          &times;
        </button>

        <h1 className={styles.projectTitle}>{project.title}</h1>

        {renderMedia()} 

        <div className={styles.projectDescription}>
          <h2>Sobre o Projeto</h2>

          <div className={styles.projectText}>
            {displayDescription.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>

          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.repoButton}
            >
              Ver Repositório no GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
