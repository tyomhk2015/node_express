// Brief web server.
const express = require('express');
const bodyParser = require('body-parser');

const express_app = express();

// Parses HTML data.
// Without this, req.Body will return undefined.
// req.Body of express.js returns null unless it is parsed to desired data type.
express_app.use(bodyParser.urlencoded({extended: false}));

// Due to wide range of root page path, the root router must be specified at the bottom of the code.
// Otherwise this will be called, eventhough the URL path is different.
express_app.use('/', (req, res, next) => {
  console.log("常に稼働中");
  next();
});

express_app.use('/add-idol', (req, res, next) => {
  console.log("In the add-idol middleware.");
  const form = '<html><body><h1>WATAME\'s UI BEAM!!!</h1><form action="/idol" method="POST"><input type="text" name="idol" placeholder="Seiso"><button>JOIN US</button></form></body></html>';
  res.send(form);
});

// app.use() accepts all requests.
// Accept 'POST' requests only! <=> app.get() accepts only 'GET's.
express_app.post('/idol', (req, res, next) => {
  console.log("In the idol middleware.");
  console.log(req.body.idol);
  res.redirect('/');
});

// Due to wide range of root page path, the root router must be specified at the bottom of the code.
express_app.use('/', (req, res, next) => {
  console.log("In the root middleware.");
  res.send('<h1>HOME TOWN</h1>');
});

// Start the server and listens for requests.
express_app.listen(9000);