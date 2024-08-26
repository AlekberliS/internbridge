import React, { useState } from 'react';

import projects from '../data/project.json'; // Adjust path as needed
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Project.module.css';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; 


import { Pagination} from 'swiper/modules';

export default function Project() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id='projects' className={styles.projectSection}>
            <h2>Projects</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1224: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },

                }}
                pagination={{ clickable: true }}
                
                modules={[Pagination]} 
                className={styles.projectSwiper}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className={styles.projectCard}>
                        <img src={project.image} alt={project.name} className={styles.projectImage} />
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <ul className={styles.tools}>
  {Array.isArray(project.tools) && project.tools.length > 0
    ? project.tools.map((tool, idx) => (
        <li key={idx} className={styles.toolItem}>{tool}</li>
      ))
    : <li>Invalid tools format</li>}
</ul>

                        <p className={styles.projectAbout}>
                            {expandedIndex === index
                                ? project.about
                                : `${project.about.substring(0, 50)}...`}
                            <button onClick={() => handleToggle(index)} className={styles.toggleButton}>
                                {expandedIndex === index ? 'Read Less' : 'Read More'}
                            </button>
                        </p>
                        <div className={styles.links}>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Project</a>
                            <a href={project.source_code} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Source code</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
