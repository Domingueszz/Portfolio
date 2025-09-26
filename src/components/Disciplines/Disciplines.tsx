import React, { useState } from 'react';
import DisciplineCard from './DisciplineCard';
import ProjectModal from '../ProjectModal/ProjectModal'; 
import styles from './Disciplines.module.css';

// Images:
import starRageImage from '../../assets/images/starRage.png'
import cafeteriaImage from '../../assets/images/cafeteria.png'
import fiscalImage from '../../assets/images/fiscal.png'
import todoImage from '../../assets/images/todo.png'
import notesImage from '../../assets/images/notes.png'
import contadorImage from '../../assets/images/contador.png'
import formsImage from '../../assets/images/forms.png'
import quizImage from '../../assets/images/quiz.png'
import iphoneImage from '../../assets/images/iphone.png'

// Videos:
import starVideo from '../../assets/videos/star.mp4'
import fiscalVIdeo from '../../assets/videos/fiscal.mp4'
import cafeVideo from '../../assets/videos/cafeteria.mp4'
import contadorVideo from '../../assets/videos/contador.mp4'
import todoVideo from '../../assets/videos/todo.mp4'
import notesVideo from '../../assets/videos/notes.mp4'
import formsVideo from '../../assets/videos/forms.mp4'
import cloneVideo from '../../assets/videos/clone.mp4'
import quizVideo from '../../assets/videos/quiz.mp4'




interface Discipline {
  id: number;
  title: string;
  description: string;
  image: string; 
  mainImage?: string; 
  detailedDescription?: string; 
  galleryImages?: string[]; 
  videos?: string[]; 
  repoUrl?: string;
}

const Disciplines: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<Discipline | null>(null);

  const disciplines: Discipline[] = [
    {
      id: 1,
      title: "Game - Java: Star Rage",
      description: "Jogo desenvolvido com Java em Squad, aplicando POO como base do projeto.",
      image: starRageImage,
      mainImage: starVideo,
      detailedDescription: `Em 2024, tive a oportunidade de participar de um projeto muito especial durante meu período 
      de faculdade e estágio: o desenvolvimento do jogo STAR RAGE, feito em Squad com outros estagiários da 2RP Net.
      \n
      O desafio foi implementar um jogo em Java, com foco em explorar os conceitos de POO (Programação Orientada a Objetos) 
      na prática.
      \n
      Além da parte técnica, foi uma experiência incrível de colaboração, troca de conhecimento e 
      aprendizado em equipe.`,

      repoUrl: "https://github.com/Domingueszz/Game-STAR-RAGE.git",
    },
    {
      id: 2,
      title: "Fiscal API",
      description: "API em python de leitura e extração de campos de nota fiscal.",
      image: fiscalImage,
      mainImage: fiscalVIdeo,
      detailedDescription: `O projeto trata-se de uma API que recebe uma Nota Fiscal como um arquivo de imagem ou PDF, 
      "lê" o documento com inteção a IA do Gemini para encontrar o Valor Total, a Data de Emissão e o CNPJ, 
      salva essas informações em um banco de dados e retorna esses mesmos dados para o usuário em formato JSON.`,
      repoUrl: "https://github.com/Avaliacao-de-Desempenho/Pablo-Sanches",
    },
    {
      id: 3,
      title: "Cafeteria",
      description: "Projeto desenvolvido em C# e ASP.NET MVC, que simula o gerenciamento de uma cafeteria.",
      image: cafeteriaImage,
      mainImage: cafeVideo,
      detailedDescription: `projeto desenvolvido em C# e ASP.NET MVC, que simula o gerenciamento de uma cafeteria. 
      O sistema implementa as operações CRUD (Create, Read, Update, Delete) para manipulação de pedidos, produtos 
      e clientes, proporcionando um exemplo prático de como estruturar um aplicativo web funcional.`,
    
      repoUrl: "https://github.com/Domingueszz/Projeto_Cafeteria.git",
    },
    {
      id: 4,
      title: "Contador",
      description: "Contador regressivo desenvolvido com React + JS.",
      image: contadorImage,
      mainImage: contadorVideo,
      detailedDescription: `Este projeto consiste em um contador regressivo (countdown timer) desenvolvido com React.js 
      utilizando o Vite como bundler para otimizar performance e tempo de desenvolvimento.
      \n
      A aplicação permite ao usuário escolher entre datas pré-definidas (como feriados, datas comemorativas ou eventos) 
      ou definir manualmente uma data e hora personalizada, e exibe um cronômetro regressivo em tempo real.`,
      
      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/REACT/React_JS/4_Contador",
    },
    {
      id: 5,
      title: "To do List",
      description: "Projeto visado para o desenvolvimento do método To do.",
      image: todoImage,
      mainImage: todoVideo,
      detailedDescription: `Este projeto tem como objetivo desenvolver uma Lista de Tarefas (ToDo) avançada,
      utilizando HTML, CSS e JavaScript, com persistência de dados por meio do LocalStorage.
      
      A aplicação permite adicionar, editar, remover e marcar tarefas como concluídas, mesmo após fechar ou recarregar a página.`,
      
      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/J.S/11_TodoList",
    },
    {
      id: 6,
      title: "Notes",
      description: "Página web de anotações. Elaborada com HTML&CSS + JS.",
      image: notesImage,
      mainImage: notesVideo,
      detailedDescription: `Este projeto tem como objetivo o desenvolvimento de um organizador de notas completo, 
      no qual o usuário pode criar, editar, excluir e exportar anotações de forma intuitiva e eficiente. 
      \n
      Utilizando HTML, CSS e JavaScript, a aplicação armazena os dados no LocalStorage, 
      garantindo persistência mesmo após o fechamento do navegador.`,
      

      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/J.S/13_DevNotes",
    },
    {
      id: 7,
      title: "Formulário de Feedback",
      description: "Projeto que simula formulário de feedback de uma página. Visando a validação dos campos e interação dos usuários.",
      image: formsImage,
      mainImage: formsVideo,
      detailedDescription: `Este projeto consiste na criação de um formulário de avaliação dividido em três etapas, 
      desenvolvido com React.js.
      \n
      O objetivo é coletar informações do usuário de forma progressiva — como nome, e-mail e feedback — e garantir que os 
      dados preenchidos em cada etapa permaneçam salvos durante a navegação entre as telas.`,

      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/REACT/React_JS/2_Forms",
    },
    {
      id: 8,
      title: "Clone Iphone page",
      description: "Reprodução da página do iphone 13. Elaborado com HTML + CSS somente.",
      image: iphoneImage,
      mainImage: cloneVideo,
      detailedDescription: `Este projeto tem como objetivo recriar a página oficial da Apple do iPhone 13 Pro Max, 
      aplicando conceitos de HTML, CSS, JavaScript e design responsivo.
      \n
      A proposta é replicar o layout e algumas das interações da página original.`,


      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/HTML%26CSS/8_iPhone",
    },
    {
      id: 9,
      title: "Quiz",
      description: "Construído com React + JS, este projeto consiste em um quiz sobre front-end básico.",
      image: quizImage,
      mainImage: quizVideo,
      detailedDescription: `Este projeto tem como objetivo desenvolver um quiz interativo sobre programação, 
      utilizando React.js e JavaScript. 
      \n
      A aplicação apresenta perguntas de múltipla escolha sobre temas como HTML, CSS, JavaScript e 
      lógica de programação, fornecendo feedback imediato ao usuário e exibindo a pontuação final ao término do quiz.`,
      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/REACT/React_JS/3_Quiz",
    },
    {
      id: 10,
      title: "Memories",
      description: "Projeto Full-Stack - Backend + Banco de dados integrado com Frontend.",
      image: quizImage,
      mainImage: quizVideo,
      detailedDescription: `É uma aplicação web completa que permite aos usuários registrar e revisitar seus momentos especiais. Funciona como um diário digital moderno, onde cada "memória" é composta por uma foto, um título e uma descrição. 
      \n
      A aplicação apresenta perguntas de múltipla escolha sobre temas como HTML, CSS, JavaScript e 
      lógica de programação, fornecendo feedback imediato ao usuário e exibindo a pontuação final ao término do quiz.`,
      repoUrl: "https://github.com/Domingueszz/ProjetosFrontEnd/tree/main/REACT/React_JS/3_Quiz",
    },
  ];

  const visibleDisciplines = showAll ? disciplines : disciplines.slice(0, 6);

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