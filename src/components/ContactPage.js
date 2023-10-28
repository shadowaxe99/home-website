```javascript
import React from 'react';
import '../styles/contact.css';

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        // Here, we would typically send the form data to the server
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    render() {
        return (
            <div id="contact">
                <h1>Contact Us</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleInputChange} required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" value={this.state.message} onChange={this.handleInputChange} required />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div className="contact-details">
                    <p>Email: info@elysiuminnovations.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Location: 123 Elysium Street, AI City, 45678</p>
                </div>
                <div className="social-links">
                    <a href="https://www.facebook.com/elysiuminnovations" target="_blank" rel="noreferrer">Facebook</a>
                    <a href="https://www.twitter.com/elysiuminnovations" target="_blank" rel="noreferrer">Twitter</a>
                    <a href="https://www.linkedin.com/company/elysiuminnovations" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        );
    }
}

export default ContactPage;
```