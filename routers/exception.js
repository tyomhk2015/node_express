const express = require('express');
const path = require('path');

const router = express.Router();

router.use((req, res, next) => {
  console.log("Page not found.");
  res.status(404).sendFile(path.join(__dirname, '..', 'views', '404.html'));
});

module.exports = router;