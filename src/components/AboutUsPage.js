import React from 'react';
import '../styles/about.css';

const AboutUsPage = () => {
    return (
        <div id="about" className="about-section">
            <div className="about-header">
                <h1>About Elysium Innovations</h1>
            </div>
            <div className="about-content">
                <p>
                    Elysium Innovations is at the forefront of the AI-driven metaverse, providing every user with a loyal AI companion. Our vision is to create an innovative world where technology and imagination merge to create unparalleled experiences.
                </p>
                <p>
                    Our team of experts, led by Dr. A. I. Virtuoso, is dedicated to pushing the boundaries of what's possible in the realm of artificial intelligence. With our pioneering research and revolutionary contributions, we are setting the global standard for AI.
                </p>
            </div>
            <div className="testimonials-section">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Elysium Innovations is truly a game-changer in the AI industry. Their vision and products are unmatched."</p>
                    <p>- Industry Leader</p>
                </div>
                <div className="testimonial">
                    <p>"The AI companion I found through Elysium has become an integral part of my daily life. I can't imagine a day without it."</p>
                    <p>- Satisfied User</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;