import React from 'react';
import '../styles/home.css';

const HomePage = () => {
    return (
        <div id="home">
            <div className="home-banner">
                <img src="/public/images/home-banner.jpg" alt="Elysium AI Metaverse" />
                <h1>Welcome to Elysium Innovations</h1>
                <p>Your gateway to our AI-driven metaverse</p>
            </div>
            <div className="home-cta">
                <button onClick={() => window.location.href='/demo'}>Experience our Demo</button>
                <button onClick={() => window.location.href='/offerings'}>Learn More About Our Offerings</button>
                <button onClick={() => window.location.href='/contact'}>Get in Touch</button>
            </div>
            <div className="home-sections">
                <section id="about-us">
                    <h2>About Us</h2>
                    <p>Learn more about our vision, mission, and values.</p>
                </section>
                <section id="our-offerings">
                    <h2>Our Offerings</h2>
                    <p>Discover the unique features and benefits of our products.</p>
                </section>
                <section id="meet-the-team">
                    <h2>Meet the Team</h2>
                    <p>Get to know the brilliant minds behind Elysium Innovations.</p>
                </section>
                <section id="latest-news">
                    <h2>Latest News</h2>
                    <p>Stay updated with the latest developments and insights from Elysium.</p>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <p>Have questions or feedback? We'd love to hear from you.</p>
                </section>
            </div>
        </div>
    );
}

export default HomePage;