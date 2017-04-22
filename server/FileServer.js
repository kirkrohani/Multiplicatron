const http = require('http');
const fs = require('fs');
let server = undefined;
let PORT = process.env.PORT || 4000;

class FileServer {
  
  loadServer() {
    server = http.createServer()
      .listen(PORT, console.log(`Server listening on port ${PORT}`))
      .on("request", this.processRequest );
  }

  processRequest(request, response) {
    //grab the current url requested
    const requestedURL = request.url;

    const fileRequested = requestedURL.indexOf('html') !== -1 ? `./client${request.url}` : `./client/index.html`;
    console.log(`Request URL is ${request.url} and appended file is ${fileRequested}`);

    //check if the file exists by attempting to read it
    fs.readFile(fileRequested, (err, data) => {
      if (err) {
        response.end(`The file you requested ${fileRequested} does not exist.....`);
      } else {
        response.end(data.toString('UTF-8'));
      }
    });
  }

}

const fileServer = new FileServer();
fileServer.loadServer();