```javascript
const express = require('express');
const router = express.Router();
const About = require('../models/About');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const aboutData = await About.find();
        res.status(200).json(aboutData);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
```