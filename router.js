const fs = require('fs');

const reqHandler = (req, res)  => {
  const url = req.url;
  const method = req.method;
  if(url === '/yagoo') {
    res.setHeader('Content-Type', 'text/plain');
    res.write('SEISO DREAM HAS BEEN FALLEN');
    res.end();
    return;
  }
  if (url === '/message' && method === "POST"){
    // Listen to event.
    const reqBody = [];
    req.on('data', (chunk) => {
      console.log("Chunk", chunk);
      reqBody.push(chunk);
    });
    // Listening finished.
    req.on('end', () => {
      // Parse the data that were in the buffer.
      const parseBody = Buffer.concat(reqBody).toString();
      const idolName = parseBody.split('=')[1].replaceAll('+',' ');
      // Sync: Blocks the code execution until the file is created.
      // fs.writeFileSync('idolList.txt', idolName);
      // An example of Event Driven Architecture's product.
      fs.writeFile('idolList.txt', idolName, (err) => {
        console.log(err);
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
      });
    });
  }
  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>HOLOLIVE SAIKOU!</title></head>');
    res.write('<body><h1>WATAME\'s UI BEAM!!!!!</h1><form action="/message" method="POST"><input type="text" name="idol" placeholder="seiso"><button>JOIN US</button></form></body>');
    res.write('</html>');
    res.end();
  }
}

module.exports = reqHandler;