const http = require('http');
const fs = require('fs');
let PORT = process.env.PORT || 4000;

class FileServer {
  
  loadServer() {
    http.createServer()
      .listen(PORT, console.log(`Server listening on port ${PORT}`))
      .on("request", this.processRequest );
  }

  processRequest(request, response) {
    let fileRequested = `./client${request.url}`;

    //check if the file exists by attempting to read it
    fs.stat( fileRequested, (err, fileStats) => {
      let responseToRequestor = undefined;
      
      if (err) {
        if(err.code === 'ENOENT')   
          responseToRequestor = `The file you requested ${fileRequested} does NOT EXIST.`;
        else    
          responseToRequestor = 'Unable to load file requested due to ${err}';

        response.end(responseToRequestor);
      } else {
        fileRequested = fileStats.isDirectory() ? `./client/index.html` : fileRequested;

        fs.readFile(fileRequested, (err, fileData) => {
          responseToRequestor = (err) ? `ERROR on server ${err}` : fileData.toString('UTF-8'); //try toLocaleString
          response.end(responseToRequestor);
        });
      } // end if err else
    }); //end fs.stat
  } //end process request
}

const fileServer = new FileServer();
fileServer.loadServer();