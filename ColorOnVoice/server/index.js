const fs = require('fs')
const path = require('path')
const express = require('express')
const https = require('https')

const app = express()
const DirToServe = 'client'
const port = 3000

app.use('/', express.static(path.join(__dirname, '..', DirToServe)))

const httpsOptions = {
    cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
}

https.createServer(httpsOptions, app).listen(port, function(){
    console.log("Server is running at https://localhost:3000")
})


