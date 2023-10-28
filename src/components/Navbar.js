```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="/">
                    <img src="/public/images/logo.png" alt="Elysium Innovations" />
                </Link>
            </div>
            <ul className="navbar__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/offerings">Our Offerings</Link></li>
                <li><Link to="/developers">Developer's Corner</Link></li>
                <li><Link to="/marketplace">AI Marketplace</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/blog">Blog/News</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/investors">Investor Relations</Link></li>
                <li><Link to="/legal">Legal & Compliance</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
```