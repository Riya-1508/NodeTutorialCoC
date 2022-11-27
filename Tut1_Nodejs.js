const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Rohan Das');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Navigation</title>
  </head>
  <style>
      .navbar {
          background-color: black;
          border-radius: 30px;
      }
  
      .navbar ul {
          overflow: auto;
      }
  
      .navbar li {
          float: left;
          list-style: none;
          margin: 13px 20px;
      }
  
      .navbar li a {
          color: azure;
          text-decoration: none;
          padding: 3px 3px;
          font-size: larger;
      }
  
      .navbar li a:hover {
          color: cadetblue;
  
      }
  
      .search {
          color: white;
          float: right;
          padding: 12px 23px;
      }
  
      .navbar input {
          border: 2px solid black;
          border-radius: 4px;
          width: 130px;
      }
  </style>
  
  <body>
      <header>
          <nav class="navbar">
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Contact us</a></li>
                  <div class="search">
                      <input type="search" name="search" id="search" placeholder="Type here to search">
                  </div>
              </ul>
  
          </nav>
      </header>
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});