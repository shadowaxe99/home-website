```javascript
const express = require('express');
const router = express.Router();
const Legal = require('../models/Legal');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const legal = await Legal.find();
        res.status(200).json(legal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
```