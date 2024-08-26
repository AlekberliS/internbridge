import React from 'react';
import styles from "./About.module.css";

import aboutImg from '../../assets/about/aboutImage.png';
import htmlIcon from '../../assets/skills/html.png';
import cssIcon from '../../assets/skills/css.png';
import figmaIcon from '../../assets/skills/figma.png';
import reactIcon from '../../assets/skills/react.png';
import jsIcon from '../../assets/skills/java-script.png';
import responsiveIcon from '../../assets/skills/responsive.png'; 

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImg}
          alt="Me working on front-end projects"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={htmlIcon} alt="HTML icon" />
            <div className={styles.aboutItemText}>
              <h3>HTML & Semantic Markup</h3>
              <p>
                Expertise in crafting well-structured, semantic HTML for accessible and SEO-friendly websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cssIcon} alt="CSS icon" />
            <div className={styles.aboutItemText}>
              <h3>CSS & Preprocessors</h3>
              <p>
                Skilled in using CSS and preprocessors like SASS for creating visually appealing, responsive layouts.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={figmaIcon} alt="Figma icon" />
            <div className={styles.aboutItemText}>
              <h3>Figma & UI Design</h3>
              <p>
                Proficient in using Figma for creating intuitive, user-friendly interfaces and design systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={reactIcon} alt="React icon" />
            <div className={styles.aboutItemText}>
              <h3>React & Component-based Architecture</h3>
              <p>
                Experience in building scalable, maintainable web applications using React and component-based architecture.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={jsIcon} alt="JavaScript icon" />
            <div className={styles.aboutItemText}>
              <h3>JavaScript & ES6+</h3>
              <p>
                Proficient in modern JavaScript, including ES6+ features, for building dynamic and interactive web experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={responsiveIcon} alt="Responsive design icon" />
            <div className={styles.aboutItemText}>
              <h3>Responsive & Mobile-First Design</h3>
              <p>
                Specializing in creating responsive, mobile-first designs to ensure a seamless experience across all devices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
