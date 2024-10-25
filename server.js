const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
const compose = require("./utils/compose_data")

app.use(cors())
app.use(express.json())

const port = process.env.EXPRESS_PORT||6000

mongoose
.connect(process.env.DB_CONNECT)
.then(()=>{
    console.log("Database Initialized\nServer Starting...")
    console.log("Server Starting..")
    console.log("Server Starting.")
    app.listen(port, ()=> console.log(`Server Started Successfully!\nhttp://localhost:${port}`))
    // compose()
})
.catch(e =>{
    console.error(`Error connecting to database: ${e}`)
})


