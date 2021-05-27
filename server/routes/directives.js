const express = require('express');
const directives = require('../db/directives.json');

const directivesRouter = express.Router();

directivesRouter.get('/', async (req, res) => {
    const result = await directives
        
    res.json(result);
});

module.exports = { directivesRouter };