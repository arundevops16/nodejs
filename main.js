var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hi ARUN your Service is Up and Running\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://192.168.0.103:8081/');

// Add this to the VERY top of the first file loaded in your app
require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: 'Arun',

  // Use if APM Server requires a token
  secretToken: '',

  // Use if APM Server uses API keys for authentication
  apiKey: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: '',

  // Only activate the agent if it's running in production
  define:process.env.NODE_ENV=""
})
