const express = require("express")
const cors = require("cors")
require("dotenv").config()
const mongoose = require("mongoose")
const app = express()
const compose = require("./utils/compose_data")
const route = require('./routes/server/route')

app.use(cors())
app.use(express.json())
app.use('/', route)

const port = process.env.EXPRESS_PORT||8050

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

app.get("/", (req,res)=>{
    res.send("Welcome to Stock Analysis Plus")
})


