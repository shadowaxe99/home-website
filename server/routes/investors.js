```javascript
const express = require('express');
const router = express.Router();
const Investors = require('../models/Investors');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const investors = await Investors.find();
        res.status(200).json(investors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        await dbConnect();
        const investor = await Investors.findById(req.params.id);
        if (investor == null) {
            return res.status(404).json({ message: 'Cannot find investor' });
        }
        res.status(200).json(investor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
```