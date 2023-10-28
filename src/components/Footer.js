import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Elysium Innovations</h3>
                        <p>Creating an AI-driven metaverse for everyone.</p>
                    </div>
                    <div className="col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/offerings">Our Offerings</a></li>
                            <li><a href="/developers">Developer's Corner</a></li>
                            <li><a href="/marketplace">AI Marketplace</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Contact Us</h4>
                        <p>Email: info@elysiuminnovations.com</p>
                        <p>Phone: +1 234 567 890</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>&copy; {new Date().getFullYear()} Elysium Innovations. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;