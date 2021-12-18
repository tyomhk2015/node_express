# node_express

Recording progress of hanging out with Node.js & Express.js

<br id="">
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


<br id="">
💡 Express.js
<br>Homepage: <a href="https://expressjs.com/">https://expressjs.com/</a>
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
Express.js is all about middle wares.
<br>Middleware: One or more functions that intervene an incoming request until a responses is returned.
<pre>
Request   =>    Middleware    =>    Middleware    =>    Response => ...
          (req, res, next) = {} | (req, res, next) = {}
</pre>
