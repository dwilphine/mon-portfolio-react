import React from 'react';
import './About.css';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2>À propos de moi</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Bonjour ! Je suis un étudiant en informatique passionné par le développement web.
                            Je me spécialise dans la création d'applications web modernes et responsives
                            en utilisant les dernières technologies.
                        </p>
                        <p>
                            Mon objectif est de créer des expériences utilisateur exceptionnelles tout en
                            écrivant du code propre et maintenable. J'aime apprendre de nouvelles technologies
                            et relever des défis techniques stimulants.
                        </p>
                    </div>
                    <div className="about-image">
                        <div className="placeholder-image">
                            <p>Votre photo ici</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
