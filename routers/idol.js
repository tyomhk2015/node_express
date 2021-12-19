const express = require('express');
const path = require('path');
const rootPath = require('../util/rootPath');

const router = express.Router();

const idols = [];

router.get('/idol', (req, res, next) => {
  res.sendFile(path.join(rootPath, 'views', 'idol.html'));
});

// app.use() accepts all requests.
// Accept 'POST' requests only! <=> app.get() accepts only 'GET's.
router.post('/idol', (req, res, next) => {
  idols.push({idol: req.body.idol}); // The saved variable will be shares throughout the server.
  console.log(idols);
  res.redirect('/');
});


exports.router = router;
exports.idols = idols;