const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Yo soy un users');
});


module.exports = router;
