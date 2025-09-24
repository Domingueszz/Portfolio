import React from 'react';
import { useInView } from 'react-intersection-observer'; // Importa o hook
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
import profilePhoto from '../../assets/images/perfilOficial.png';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          
          <div 
            ref={textRef} 
            className={`${styles.textContent} ${textInView ? styles.isVisible : ''}`}
          >
            <h1 className={styles.heading}>
              Olá, eu sou <span className={styles.highlight}>Pablo</span>
            </h1>
            <p className={styles.subheading}>Desenvolvedor Front-end</p>

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