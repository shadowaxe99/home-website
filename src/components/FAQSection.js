import React from 'react';
import '../styles/faq.css';

const FAQSection = () => {
    return (
        <div id="faq" className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
                <div className="faq-item">
                    <h3>Question 1</h3>
                    <p>Answer to question 1...</p>
                </div>
                <div className="faq-item">
                    <h3>Question 2</h3>
                    <p>Answer to question 2...</p>
                </div>
                <div className="faq-item">
                    <h3>Question 3</h3>
                    <p>Answer to question 3...</p>
                </div>
                {/* More FAQ items... */}
            </div>
        </div>
    );
};

export default FAQSection;