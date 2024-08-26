import React from 'react'
import styles from './Contact.module.css'
import linkedinImg from '../../assets/contact/linkedinIcon.png';
import emailImg from '../../assets/contact/emailIcon.png';
import githubImg from '../../assets/contact/githubIcon.png';
export default function Contact() {
   return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={emailImg} alt="Email icon" />
        <a href="mailto:sonalkbrli4@gmail.com">sonalkbrli4@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={linkedinImg}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/sona-alekberli-a66654249">Sona Alekberli</a>
      </li>
      <li className={styles.link}>
        <img src={githubImg} alt="Github icon" />
        <a href="https://github.com/AlekberliS">AlekberliS</a>
      </li>
    </ul>
  </footer>
  )

}