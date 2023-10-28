```javascript
const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const faqs = await FAQ.find({});
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
```