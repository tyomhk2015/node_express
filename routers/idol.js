const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/idol', (req, res, next) => {
  console.log("In the add-idol middleware.");
  res.sendFile(path.join(__dirname, '..', 'views', 'idol.html'));
});

// app.use() accepts all requests.
// Accept 'POST' requests only! <=> app.get() accepts only 'GET's.
router.post('/idol', (req, res, next) => {
  console.log("In the idol middleware.");
  console.log(req.body.idol);
  res.redirect('/');
});


module.exports = router;