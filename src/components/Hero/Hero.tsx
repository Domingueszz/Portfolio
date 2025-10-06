import React, { useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

import styles from './Hero.module.css';
import { SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiReact, SiExpo } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { TbBrandReact } from 'react-icons/tb';
import profilePhoto from '../../assets/images/perfilOficial.png';

const Hero: React.FC = () => {
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log("Particles loaded!", container);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
              fullScreen: { enable: false }, 
              background: {
                  color: {
                      value: "var(--color-white)",
                  },
              },
              fpsLimit: 60,
              interactivity: {
                  events: {
                      onHover: {
                          enable: true,
                          mode: "repulse",
                      },
                      resize: true,
                  },
                  modes: {
                      repulse: {
                          distance: 80,
                          duration: 0.4,
                      },
                  },
              },
              particles: {
                  color: {
                      value: "#759eff9e", // Cor primária para as partículas
                  },
                  links: {
                      color: "#759eff9e", // Cor primária para as linhas
                      distance: 150,
                      enable: true,
                      opacity: 0.3,
                      width: 1,
                  },
                  move: {
                      direction: "none",
                      enable: true,
                      outModes: {
                          default: "bounce",
                      },
                      random: false,
                      speed: 1,
                      straight: false,
                  },
                  number: {
                      density: {
                          enable: true,
                          area: 800,
                      },
                      value: 60,
                  },
                  opacity: {
                      value: 0.3,
                  },
                  shape: {
                      type: "circle",
                  },
                  size: {
                      value: { min: 1, max: 3 },
                  },
              },
              detectRetina: true,
          }}
      />

      <div className={`container ${styles.containerContent}`}>
        <div className={styles.content}>
          <div 
            ref={textRef} 
            className={`${styles.textContent} ${textInView ? styles.isVisible : ''}`}
          >
            <h1 className={styles.heading}>
              Olá, eu sou <span className={styles.highlight}>Pablo</span>
            </h1>
            <p className={styles.subheading}>
              <Typewriter
                words={['Desenvolvedor Front-end', 'Criador de Experiências', 'Apaixonado por UI/UX']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </p>
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
          
          <div 
            ref={imageRef}
            className={`${styles.imageContent} ${imageInView ? styles.isVisible : ''}`}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.animatedBlob}></div>
              <div className={styles.profileContainer}>
                <img
                  src={profilePhoto}
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