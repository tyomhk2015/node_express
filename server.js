// Brief web server.
const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/home');
const idolRouter = require('./routers/idol');
const exceptionRouter = require('./routers/exception');

const express_app = express();

// Parses HTML data.
// Without this, req.Body will return undefined.
// req.Body of express.js returns null unless it is parsed to desired data type.
express_app.use(bodyParser.urlencoded({extended: false}));

// Eventhough you can control the flow of requests with express features,
// it may a good practice to align the router as if you were using use().
// For the sake of readability and maintenance.
express_app.use('/add', idolRouter); // Added with prefix for common path, a.k.a filtering paths
express_app.use(homeRouter);

// Adding 404 page.
express_app.use(exceptionRouter);

// Start the server and listens for requests.
express_app.listen(9000);