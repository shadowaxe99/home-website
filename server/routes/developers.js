const express = require('express');
const router = express.Router();
const Developers = require('../models/Developers');
const dbConnect = require('../utils/dbConnect');

router.get('/', async (req, res) => {
    try {
        await dbConnect();
        const developers = await Developers.find();
        res.status(200).json(developers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        await dbConnect();
        const developer = await Developers.findById(req.params.id);
        if (developer == null) {
            return res.status(404).json({ message: 'Cannot find developer' });
        }
        res.status(200).json(developer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;