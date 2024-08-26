import React from 'react'
import styles from './Hero.module.css';
import heroImg from '../../assets/hero/heroImage.png';

function Hero() {
  return (
   <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sona</h1>
        <p className={styles.description}>I'm front-end developer</p>
        <a className={styles.contactBtn} href="mailto:sonalkbrli4@gmail.com" >
          Contact Me
        </a>
    </div>
    <img className={styles.heroImg} src={heroImg} alt="heroimg" />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
   </section>
  )
}

export default Hero