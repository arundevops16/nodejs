// Add this to the VERY top of the first file loaded in your app
const apm = require('elastic-apm-node').start({
  // Override service name from package.json
  // Allowed characters: a-z, A-Z, 0-9, -, _, and space
  serviceName: '',

  // Use if APM Server requires a token
  secretToken: '',

  // Use if APM Server uses API keys for authentication
  apiKey: '',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://10.0.1.127:8200',
})

const app = require('express')()

app.get('/', function (req, res) {
  res.send('Hi Arun! Nodejs Service is Up and Running')
})

app.listen(3000)
