import React, { useEffect, useState } from 'react';
import styles from './Experience.module.css';
import data from '../data/data.json'; 

export default function Experience() {
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    // Set state from imported JSON data
    setEducation(data.education);
    setExperience(data.experience);
  }, []);

  return (
    <section id='experience'>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setActiveTab('education')}
            className={activeTab === 'education' ? styles.activeButton : styles.button}>
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={activeTab === 'experience' ? styles.activeButton : styles.button}>
            Experience
          </button>
        </div>
        <div className={styles.content}>
          {activeTab === 'education' ? (
            <ul className={styles.list}>
              {education.map((edu, index) => (
                <li key={index} className={styles.listItem}>
                  <b>{edu.institution}</b>
                  <p><i>{edu.degree}</i></p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                  {edu.grade && <p>Grade: {edu.grade}</p>}
                  {edu.successRate && <p>Success Rate: {edu.successRate}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.list}>
              {experience.map((exp, index) => (
                <li key={index} className={styles.listItem}>
                  <b>{exp.company}</b>
                  <p><i>{exp.role}</i></p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
