```javascript
const express = require('express');
const router = express.Router();
const Marketplace = require('../models/Marketplace');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const marketplaceItems = await Marketplace.find({});
        res.status(200).json(marketplaceItems);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        await dbConnect();
        const marketplaceItem = await Marketplace.findById(req.params.id);
        if (!marketplaceItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.status(200).json(marketplaceItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
```