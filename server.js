const http = require('http');
const fs = require('fs');
const path = require('path');
const types = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain','.ico':'image/x-icon'};
const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url.split('?')[0];
  const file = path.join(__dirname, decodeURIComponent(url));
  const ext = path.extname(file);
  fs.readFile(file, (err, data) => {
    if (err) {
      const notFoundPage = path.join(__dirname, '404.html');
      fs.readFile(notFoundPage, (err404, data404) => {
        if (err404) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end(data404);
      });
      return;
    }
    res.writeHead(200, {'Content-Type': types[ext] || 'application/octet-stream'});
    res.end(data);
  });
});
server.listen(3000, () => console.log('Server running on port 3000'));
