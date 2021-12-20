const express = require('express');
const path = require('path');
const rootPath = require('../util/rootPath');

const idolData = require('./idol');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log("常に稼働中");
  // res.sendFile(path.join(rootPath, 'views', 'home.html'));

  // Use default template engine, that has been set,
  // render the template, idol.pug, and return a normal HTML file to the user.
  res.render('home', {idols: idolData.idols, docTitle: 'IDOL PAGE', currentPath: '/'});
});


module.exports = router;