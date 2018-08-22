fs = require('fs')
https = require('https')
path = require('path')
express = require('express')

const app = express()
const DirToServe = 'client'
const port = 3000

app.use('/', express.static(path.join(__dirname,'..', DirToServe)))

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpsOptions, app).listen(port, function (){
    console.log('Server is serving at https://locahost:3000')
})
