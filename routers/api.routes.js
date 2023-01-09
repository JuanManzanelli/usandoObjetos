const express = require('express');
const numberGenerator = require('../utils/numberGenerator.js');
const { fork } = require('child_process');

const router = express.Router();

router.get('/random', (req, res) => {
  const { qty = 100000000 } = req.query;
  const calc = fork('./utils/numberGenerator.js');
  calc.send(qty);
  calc.on('message', (result) => {
    // res.render('random', { result });
    res.json(result);
  });
});

module.exports = router;