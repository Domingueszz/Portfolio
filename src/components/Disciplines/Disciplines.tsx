import React, { useState } from 'react';
import DisciplineCard from './DisciplineCard';
// Presumindo que o modal está na pasta components
import ProjectModal from '../ProjectModal/ProjectModal'; 
import styles from './Disciplines.module.css';

// Images:
import starRageImage from '../../assets/images/starRage.png'
import cafeteriaImage from '../../assets/images/cafeteria.png'
import fiscalImage from '../../assets/images/fiscal.png'
import loginImage from '../../assets/images/login.png'
import todoImage from '../../assets/images/todo.png'
import notesImage from '../../assets/images/notes.png'
import contadorImage from '../../assets/images/contador.png'
import formsImage from '../../assets/images/forms.png'
import quizImage from '../../assets/images/quiz.png'
import iphoneImage from '../../assets/images/iphone.png'
import starVideo from '../../assets/videos/star.mp4'



interface Discipline {
  id: number;
  title: string;
  description: string;
  image: string; // Imagem para o card
  mainImage?: string; // NOVO: Imagem principal opcional para o modal
  detailedDescription?: string; // NOVO: Descrição detalhada opcional para o modal
  galleryImages?: string[]; // Para mais imagens na galeria do modal
  videos?: string[]; // Para vídeos no modal
}

const Disciplines: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  // NOVO: Estado para controlar o modal
  const [selectedProject, setSelectedProject] = useState<Discipline | null>(null);

  const disciplines: Discipline[] = [
    {
      id: 1,
      title: "Game - Java: Star Rage",
      description: "Jogo desenvolvido com Java em Squad, aplicando POO como base do projeto.",
      image: starRageImage,
      mainImage: starVideo,
      detailedDescription: "Star Rage é um jogo de nave 2D do gênero 'shoot 'em up', criado em Java puro com a biblioteca Swing para a interface gráfica. O projeto foi desenvolvido em equipe utilizando metodologias ágeis, com foco principal na aplicação dos conceitos de Programação Orientada a Objetos, como herança, polimorfismo e encapsulamento. O jogo inclui múltiplos tipos de inimigos, power-ups e um sistema de pontuação persistente.",
    },
    {
      id: 2,
      title: "Fiscal API",
      description: "API em python de leitura e extração de campos de nota fiscal.",
      image: fiscalImage,
    },
    {
      id: 3,
      title: "Cafeteria",
      description: "Projeto desenvolvido em C# e ASP.NET MVC, que simula o gerenciamento de uma cafeteria.",
      image: cafeteriaImage,
    },
    {
      "id": 4,
      "title": "Contador",
      "description": "Contador regressivo desenvolvido com React + JS.",
      "image": contadorImage,
    },
    {
      "id": 5,
      "title": "To do List",
      "description": "Projeto visado para o desenvolvimento do método To do.",
      "image": todoImage,
    },
    {
      "id": 6,
      "title": "Notes",
      "description": "Página web de anotações. Elaborada com HTML&CSS + JS.",
      "image": notesImage,
    },
    {
      "id": 7,
      "title": "Formulário de Feedback",
      "description": "Projeto que simula formulário de feedback de uma página. Visando a validação dos campos e interação dos usuários.",
      "image": formsImage,
    },
    {
      "id": 8,
      "title": "Clone Iphone page",
      "description": "Reprodução da página do iphone 13. Elaborado com HTML + CSS somente.",
      "image": iphoneImage,
    },
    {
      id: 9,
      title: "Quiz",
      description: "Construído com React + JS, este projeto consiste em um quiz sobre front-end básico.",
      image: quizImage,
    },
  ];

  const visibleDisciplines = showAll ? disciplines : disciplines.slice(0, 6);

  // NOVO: Funções para abrir e fechar o modal
  const handleViewProject = (project: Discipline) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="section-divider" aria-hidden="true"></div>
      <section id="disciplines" className={styles.disciplines}>
        <div className="container">
          <h2 className={styles.title}>PROJETOS</h2>

          <div className={styles.grid}>
            {visibleDisciplines.map((discipline) => (
              <DisciplineCard
                key={discipline.id}
                title={discipline.title}
                description={discipline.description}
                image={discipline.image}
                // ATUALIZADO: Passando a função para o card
                onViewProject={() => handleViewProject(discipline)}
              />
            ))}
          </div>

          {disciplines.length > 6 && (
            <div className={styles.showMoreContainer}>
              <button
                onClick={() => setShowAll(!showAll)}
                className={styles.showMoreButton}
              >
                {showAll ? "Ver menos" : "Ver mais"}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* NOVO: Renderização condicional do Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Disciplines;