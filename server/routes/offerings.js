```javascript
const express = require('express');
const router = express.Router();
const Offerings = require('../models/Offerings');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const offerings = await Offerings.find();
        res.status(200).json(offerings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        await dbConnect();
        const offering = await Offerings.findById(req.params.id);
        if (offering == null) {
            return res.status(404).json({ message: 'Cannot find offering' });
        }
        res.status(200).json(offering);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
```