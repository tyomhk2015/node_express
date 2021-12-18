const express = require('express');

const router = express.Router();

router.use('/add-idol', (req, res, next) => {
  console.log("In the add-idol middleware.");
  const form = '<html><body><h1>WATAME\'s UI BEAM!!!</h1><form action="/idol" method="POST"><input type="text" name="idol" placeholder="Seiso"><button>JOIN US</button></form></body></html>';
  res.send(form);
});

// app.use() accepts all requests.
// Accept 'POST' requests only! <=> app.get() accepts only 'GET's.
router.post('/idol', (req, res, next) => {
  console.log("In the idol middleware.");
  console.log(req.body.idol);
  res.redirect('/');
});


module.exports = router;