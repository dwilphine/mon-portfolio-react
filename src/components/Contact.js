import React, { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pour l'instant, nous affichons juste une alerte
        alert('Merci pour votre message ! (Fonctionnalité d\'envoi à implémenter)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contactez-moi</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Restons en contact</h3>
                        <p>
                            Je suis toujours ouvert aux nouvelles opportunités et collaborations.
                            N'hésitez pas à me contacter !
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <strong>Email:</strong> votre.email@example.com
                            </div>
                            <div className="contact-item">
                                <strong>LinkedIn:</strong> linkedin.com/in/votre-profil
                            </div>
                            <div className="contact-item">
                                <strong>GitHub:</strong> github.com/votre-username
                            </div>
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Votre nom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Votre email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Votre message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
