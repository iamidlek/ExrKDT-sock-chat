const express = require('express');
const router = express.Router();

router.route('/').get((req, res, next) => {
  //views 안의 index
  res.render('index')
});


module.exports = router;
