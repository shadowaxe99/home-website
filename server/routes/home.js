```javascript
const express = require('express');
const router = express.Router();
const Home = require('../models/Home');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const homeData = await Home.find();
        res.status(200).json(homeData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
```