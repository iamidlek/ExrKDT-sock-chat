const express = require('express');
const router = express.Router();
const path = require('path');
const csv = require('../data')

// clubs가 자동으로 붙음
router.route('/').get((req, res, next) => {
  return res.send('clubsRouter works!');
});

router.route('/:filename/').get((req,res) => {
  const fileName = req.params.filename;
  const filePath = path.join(__dirname, "..", "data", fileName + ".csv");

  const toSend = csv(filePath);
  res.json(toSend);
});

module.exports = router;
