import React from 'react';
import '../styles/offerings.css';

const OurOfferingsPage = () => {
    return (
        <div id="offerings">
            <h1>Our Offerings</h1>
            <div className="offerings-container">
                <div className="offering">
                    <h2>Elysium OS</h2>
                    <p>Experience the power of our AI-driven operating system.</p>
                    <button>Experience Demo</button>
                    <button>Contact Sales</button>
                </div>
                <div className="offering">
                    <h2>Butler</h2>
                    <p>Meet Butler, your personal AI assistant in the Elysium metaverse.</p>
                    <button>Experience Demo</button>
                    <button>Contact Sales</button>
                </div>
            </div>
        </div>
    );
}

export default OurOfferingsPage;