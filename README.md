# node_express

Recording progress of hanging out with Node.js & Express.js

---
 - Node.js
 - <a href="#user-content-express">Express.js</a>
 - <a href="#user-content-template">Dynamic Content & Template Engine</a>
---

💡 Node.js

**Breif**

A program that enables you to use Javascript code at outside of the browser, OS.
<br>Uses V8 engine, built by Google, enables to run Javascript in the browser.
<br>V8 engine: Takes Javascript code and compile it to machine code.
<br>V8 engine is written in C++.
<br>Thanks to V8, Node.js offers more features that were not possible with the browser JS.

**Usage**

Node.js is a Javascript Runtime, using is not limited to the Server.
<br>Eg. Reading/Writing files that are on the OS.
<br>In Web dev
<pre>
1. Run Server: 
   Creating server & listening to incoming request and more.
2. Write business logics: 
   Handling req, res. Validating Input, Connecting to DB, Authentication and more.
</pre>

**REPL**

One of ways of working with node.js
<br>Accessible by type 'node' in the command line.
<pre>
R - Read the user input
E - Evaluate the user input
P - Print out user input
L - Loop the process.
</pre>

**Node.js Program Lifecycle**
1. A node.js file is executed.
2. Node.js starts the script written in the file.
3. V8 parses the code of file, and register variables & functions to the memory.
4. Event loop gets activated.
<pre> Event loop: An endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.

To exit the event loop, process.exit().
</pre>

**Stream & Buffers**
* Steam: A long line of a process.
<br>Request bodies are aligned in the stream.
* Buffer: A construct that that holds chunks of multiple data before the data is fully parsed or released.
<br>Able to arbitrarily do something to the buffer with codes.

**Event Loop**
<br>Handler of event callbacks that have less time consuming operations.
<br>A process that keeps javascript process keep running.

⚠️ Heavy operations with heavy files are handled by worker pool, which runs on different threads.
<br> When the heavy task is finished, the worker pool triggers a callback to event loop, notifying the job is done.

**Package.json**
<br>Customized scripts are executable by using 'run'.
<pre>
"scripts": {
   ...
   "start-server": "node server.js"
   ...
},

  $ npm run start-server

--
install --save     = install the dependency for the production only.
install --save-dev = install the dependency for the development only.
install -g         = install the dependency as global, accesible anywhere in the computer.
</pre>

---
<br id="express">
💡 Express.js
<br>Homepage: <a href="https://expressjs.com/">https://expressjs.com/</a>
<br>Doc: <a href="https://expressjs.com/en/4x/api.html#app">https://expressjs.com/</a>
<br>Enables to write server logic more simpler than node.js.
<br>Depending on the type of data you handle, the logic has to be different.
<br>To solve the problem, mentioned right above this sentence, a framework is used.
<br>Framework: Tools filled with Helper functions & rules for building an application.
<br>Alternative choice for express.js
<pre>
Adonis.js / Koa / Sails.js
(Larvel 
inspired)
</pre>

**Middleware**

Express.js is all about middle wares.
<br>Middleware: One or more functions that intervene an incoming request until a responses is returned.

<pre>
Request   =>    Middleware    =>    Middleware    =>    Response => ...
          (req, res, next) = {} | (req, res, next) = {}

----

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

  // Sends response.
  // The HTML Header, and Content-Type is done for you depending on what you insert as an argument.
  // Default is text/html.
  res.send('&#60;h1&#62;UI BEAM!!&#60;/h1&#62;');
});
</pre>

**express.js method setting**

For specifying HTTP methods
* app.use : Listens to all types of requests.
* app.get : Listens to GET request.
* app.post : Listens to POST request.
* app.put : Listens to PUT request.
* and more.

**Returning File & Path**

To acquire the correct path for the project, using 'path' feature of express.js is recommended.
<br>Otherwise, errors will be occured.
<br>join() will concatenate the path by using arguments.
<br>Thus manually specifiying the path with ' \\ ' or ' / ' is unnecessary, which may cause errors depending on the OS the project is deployed on.
<pre>
const path = require('path');
...
  res.sendFile(path.join(__dirname, '../', 'views', 'home.html'));  << ★★
...

// BTW, express.js will automatically handle the HTTP header of the response, text/html.

---

// To get the root path of the app.

const path = require('path');
module.exports = path.dirname(require.main.filename);
</pre>

To serve file statically from a different directory.
<pre>
// server.js

// Add a read-only path for files in 'public' folder.
express_app.use(
  express.static(path.join(__dirname, 'public'))  << ★★
);
</pre>

---
<br id="template">
💡 Template Engines

<br>Blueprint of how the view of the application should be structured.
<br>Dynamically changes depending on the data you send to the template.
<br>Template is a plan that can be reused.
<br>Engine is a motor or function that fills the template with data and create a normal HTML as output.

**EJS**
* Uses normal HTML & vanilla JS in the templates.
<pre>
// Similar to Ruby on Rails
&#60;p&#62;&#60;%= name&#62;&#60;p&#62;
</pre>

**Pug (Jade)**
* Use minimal HTML & custom template language.
<pre>
p #{name}
</pre>

**Handlebars**
* Use normal HTML & custom template language.
<pre>
&#60;p&#62;&#60;{{name}}&#62;&#60;p&#62;
</pre>