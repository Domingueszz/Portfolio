import React from 'react';
import styles from './Hero.module.css';
import { 
  SiCplusplus, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiExpo
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandReact } from 'react-icons/tb';
import profilePhoto from '../../assets/images/perfil.png'; // Verifique se o caminho está correto

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.heading}>
              Olá, eu sou <span className={styles.highlight}>Pablo</span>
            </h1>
            <p className={styles.subheading}>Web Designer</p>

            {/* Seus ícones permanecem aqui, sem alterações */}
            <div className={styles.icons}>
              <SiCplusplus className={styles.icon} title="C++" />
              <DiJava className={styles.icon} title="Java" />
              <SiJavascript className={styles.icon} title="JavaScript" />
              <SiHtml5 className={styles.icon} title="HTML5" />
              <SiCss3 className={styles.icon} title="CSS3" />
              <SiReact className={styles.icon} title="ReactJS" />
              <TbBrandReact className={styles.icon} title="ReactTS" />
              <SiExpo className={styles.icon} title="Expo" />
            </div>

          </div>
          
          <div className={styles.imageContent}>
            <div className={styles.imageWrapper}>
              {/* Blob animado azul atrás da foto */}
              <div className={styles.animatedBlob}></div>

              {/* Foto de perfil */}
              <div className={styles.profileContainer}>
                <img
                  src={"profilePhoto"} /* CORRIGIDO: Caminho da imagem */
                  alt="Pablo - Web Designer"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;