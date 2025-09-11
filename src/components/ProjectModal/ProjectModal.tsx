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
  React.useEffect(() => {
    // ... (código do useEffect)
  }, []);

  const displayMediaUrl = project.mainImage || project.image;
  const displayDescription = project.detailedDescription || project.description;
  
  // NOVO: Chama a função para saber o que renderizar
  const mediaType = getMediaType(displayMediaUrl);

  // NOVO: Função para renderizar o conteúdo de mídia
  const renderMedia = () => {
    switch (mediaType) {
      case 'image':
        return (
          <img
            src={displayMediaUrl}
            alt={`Imagem principal do projeto ${project.title}`}
            className={styles.mainMedia} // CSS ATUALIZADO
          />
        );
      case 'video':
        return (
          <video
            src={displayMediaUrl}
            className={styles.mainMedia} // CSS ATUALIZADO
            controls // Adiciona controles de play, pause, volume, etc.
            autoPlay // Inicia o vídeo automaticamente
            muted   // Necessário para o autoplay funcionar na maioria dos navegadores
            loop    // Faz o vídeo reiniciar ao terminar
            playsInline // Importante para mobile
          >
            Seu navegador não suporta o elemento de vídeo.
          </video>
        );
      default:
        // Fallback: se não reconhecer, tenta renderizar como imagem
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

        {/* AQUI: Chamamos a função que renderiza a mídia correta */}
        {renderMedia()} 

        <div className={styles.projectDescription}>
          <h2>Sobre o Projeto</h2>
          <p>{displayDescription}</p>
        </div>

        {/* ... (resto do seu componente) */}
      </div>
    </div>
  );
};

export default ProjectModal;