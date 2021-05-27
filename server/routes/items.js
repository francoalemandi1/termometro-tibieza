const express = require('express');
const items = require('../db/items.json');

const itemsRouter = express.Router();

itemsRouter.get('/', async (req, res) => {
    const result = await items
        
    res.json(result);
});

module.exports = { itemsRouter };