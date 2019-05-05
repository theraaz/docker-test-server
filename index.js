const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World. If you see this you are good!<br>Keep changing..<br> Here are the env variables: <pre>' + JSON.stringify(process.env) + '</pre>'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 