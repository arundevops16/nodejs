var apm = require('elastic-apm-node').start({
  serviceName: 'arun-nodejs',
  serverUrl: 'http://10.0.1.109:8200'
})


const express = require('express')
const app = express()
app.get('/', (req, res) => {
 res.send('HEY!')
})
app.listen(3000, () => console.log('Server running on port 3000'))
