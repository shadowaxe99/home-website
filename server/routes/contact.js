```javascript
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    await dbConnect();

    try {
        const contactInfo = await Contact.find();
        res.status(200).json(contactInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    await dbConnect();

    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    try {
        const savedContact = await contact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
```