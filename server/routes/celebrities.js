
const express = require('express');
const celebrities = require('../db/celebrities.json');

const celebritiesRouter = express.Router();

celebritiesRouter.get('/', async (req, res) => {
    const result = await celebrities
        
    res.json(result);
});

module.exports = { celebritiesRouter };