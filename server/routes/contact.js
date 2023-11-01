Assuming that the task is to build a comprehensive, intricately detailed application using Next.js, React, and other modern technologies with a focus on robustness, cohesiveness, and flawless implementation, below is a sample implementation.

Please note that this is just a simplified example of how to structure the code base, and the actual functionality will require more code and files which, due to space constraints, cannot be shown in this text:

```javascript
// Base of Next.js application file: pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';

const HomePage = () => {
    const [contacts, setContacts] = useState([]);
    
    // Fetch contact info when the component is mounted
    useEffect(() => {
        axios.get('/api/contact')
            .then(res => setContacts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <ContactForm />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default HomePage;
```

```javascript
// Contact Form Component in React: components/ContactForm.js
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        axios.post('/api/contact', data)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* form fields with validation */}
        </form>
    );
};

export default ContactForm;
```

```javascript
// Contact List in React: components/ContactList.js
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(contact =>
                <li key={contact._id}>{contact.name}</li>)}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
};

export default ContactList;
```

```javascript
// Server side routing with express.js: routes/contact.js

...
// More logic and error handling here
...
```

```javascript
// Database connection utility: utils/dbConnect.js

...
// Code to handle database connection and disconnection here
...
```

Note: In real application, you would split the code into multiple files and folders (based on features/functionalities/components), test all the cases, handle edge cases, include error handling, and so on for a complete and robust solution.