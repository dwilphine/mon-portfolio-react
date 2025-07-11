import React from 'react';
import './Projects.css';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Site Web E-commerce",
            description: "Un site de commerce électronique moderne avec panier d'achat et système de paiement.",
            technologies: ["React", "Node.js", "MongoDB"],
            image: "/images/projects/ecommerce.jpeg", // Ajoutez cette ligne
            link: "#"
        },
        {
            id: 2,
            title: "Application de Gestion de Tâches",
            description: "Une application web pour organiser et suivre les tâches quotidiennes.",
            technologies: ["JavaScript", "HTML", "CSS"],
            image: "/images/projects/image2.jpeg", // Ajoutez cette ligne
            link: "#"
        },
        {
            id: 3,
            title: "Portfolio Personnel",
            description: "Ce portfolio que vous consultez actuellement, développé avec React.",
            technologies: ["React", "CSS", "GitHub"],
            image: "/images/projects/portfolio.png", // Ajoutez cette ligne
            link: "#"
        }
    ];


    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Mes Projets</h2>
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">Voir le projet</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
