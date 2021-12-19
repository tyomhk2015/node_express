const express = require('express');
const path = require('path');
const rootPath = require('../util/rootPath');

const router = express.Router();

router.use((req, res, next) => {
  console.log("Page not found.");
  res.status(404).sendFile(path.join(rootPath, 'views', '404.html'));
});

module.exports = router;