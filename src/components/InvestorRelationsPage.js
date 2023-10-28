```javascript
import React from 'react';
import '../styles/investors.css';

const InvestorRelationsPage = () => {
    return (
        <div id="investors">
            <h1>Investor Relations</h1>
            <section>
                <h2>Financial Reports</h2>
                <p>Here you can find our latest financial reports.</p>
                <a href="/reports" className="cta">View Reports</a>
            </section>
            <section>
                <h2>Pitch Deck</h2>
                <p>Interested in investing? Check out our pitch deck.</p>
                <a href="/pitch-deck" className="cta">View Pitch Deck</a>
            </section>
            <section>
                <h2>Contact Investor Relations</h2>
                <p>Have questions or want to get in touch with our Investor Relations team?</p>
                <a href="/contact" className="cta">Contact Us</a>
            </section>
        </div>
    );
}

export default InvestorRelationsPage;
```