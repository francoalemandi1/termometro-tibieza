const express = require('express');
const questions = require('../db/questions.json');

const questionsRouter = express.Router();

questionsRouter.get('/', async (req, res) => {
    const result = await questions
        
    res.json(result);
});

module.exports = { questionsRouter };