// Brief web server.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const homeRouter = require('./routers/home');
const idolRouter = require('./routers/idol');
const exceptionRouter = require('./routers/exception');

const express_app = express();

// Set global configuration value.
// view engine: 'Use this template engine when rendering the page!'
// view: 'The temple resource is here!'
express_app.set('view engine', 'pug'); // 'Use pug engine for rendering page w/ template'.
express_app.set('views', 'views') // Default location is ./views/


// Parses HTML data.
// Without this, req.Body will return undefined.
// req.Body of express.js returns null unless it is parsed to desired data type.
express_app.use(bodyParser.urlencoded({extended: false}));

// Add a read-only path for files in 'public' folder.
// Serving the file statically to users.
// This will invoke the first matched link.
express_app.use(express.static(path.join(__dirname, 'public')));

// Eventhough you can control the flow of requests with express features,
// it may a good practice to align the router as if you were using use().
// For the sake of readability and maintenance.
express_app.use('/add', idolRouter.router); // Added with prefix for common path, a.k.a filtering paths
express_app.use(homeRouter);

// Adding 404 page.
express_app.use(exceptionRouter);

// Start the server and listens for requests.
express_app.listen(9000);