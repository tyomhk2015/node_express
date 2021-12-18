// Brief web server.
const http = require('http');
const express = require('express');

// This has a valid request handler.
const express_app = express();

// Allows to add middleware functions.
express_app.use((req, res, next) => {
  // next: A function that allows the request to travel on to the next middleware.

  // IMO: No next function means the request will no longer go to next middleware 
  // and should be submitted for response.

  // This function will be invoked on every requests.
  console.log("Int the 1st middleware.");

  // Allows the request to move to the next middleware!
  // If not the specified, the req will keep staying in this scope.
  next();
});

express_app.use((req, res, next) => {
  console.log("Int the 2nd middleware.");
});

const server = http.createServer(express_app);
server.listen(9000);