```javascript
import React from 'react';
import '../styles/legal.css';

const LegalComplianceSection = () => {
    return (
        <div id="legal" className="legal-section">
            <h2>Legal & Compliance</h2>
            <div className="legal-content">
                <p>At Elysium Innovations, we are committed to maintaining the highest standards of legal and ethical conduct. We comply with all applicable laws, rules, and regulations in the jurisdictions in which we operate.</p>
                <ul>
                    <li><a href="/terms-of-service">Terms of Service</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/cookie-policy">Cookie Policy</a></li>
                    <li><a href="/gdpr">GDPR Compliance</a></li>
                    <li><a href="/ada-compliance">ADA Compliance</a></li>
                </ul>
            </div>
        </div>
    );
}

export default LegalComplianceSection;
```