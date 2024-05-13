const express = require('express')
const app = express()
const routes = require('./routes/routes')

require('dotenv').config()

const dbConnection =  require('./config/config.js')
dbConnection()

const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const PORT = process.env.PORT || 1993
app.listen(PORT,()=>{
    console.log(`listen on http://localhost:${PORT}`)
})
app.use('/',routes)



