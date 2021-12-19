const express = require('express');
const path = require('path');
const rootPath = require('../util/rootPath');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("常に稼働中");
  res.sendFile(path.join(rootPath, 'views', 'home.html'));
});


module.exports = router;