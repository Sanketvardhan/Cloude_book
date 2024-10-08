const connectToMongo=require('./db')

const express = require('express')
connectToMongo();

var cors = require("cors")

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

//avalible routs
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/note'))

app.listen(port, () => {
  console.log(`Colud Book backend listening on port http://localhost:${port}`)
})
