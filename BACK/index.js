const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')
app.use(cors())

const PORT = process.env.PORT || 1993


app.listen(PORT,()=>{
    console.log(`listen on http://localhost:${PORT}`)
})



