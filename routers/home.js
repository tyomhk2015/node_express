const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("常に稼働中");
  res.send('<h1>HOME TOWN</h1>');
});


module.exports = router;