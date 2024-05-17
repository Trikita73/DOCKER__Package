const express = require('express')

const app = express()

app.get('/', (_, res) => res.send('<h1>OK</h1>'))

const port = 8080

app.listen(port, () => console.log(`Server has been started on port ${port}`))