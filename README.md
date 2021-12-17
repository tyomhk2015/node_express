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

<br id="">
💡 Express.js
<br>Homepage: https://expressjs.com/
<br>Enables to concentrate more on business logic than detailed coding.