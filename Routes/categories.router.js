const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Yo soy un category');
});


module.exports = router;
