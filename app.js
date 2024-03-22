const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors');

const usersRouter = require("./routes/users.route");
const app = express();



app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// USERS ROUTE

app.use("/users",usersRouter)

// HOME ROUTE

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})


// ROUTE NOT FOUND

app.use((req,res,next)=>{
    res.status(404).json({
        success:true,
        message: "404! not valid route"
    })
})

// SERVER ERROR

app.use((err,req,res,next)=>{
    res.status(500).json({
        success:true,
        message: "500! something is broke"
    })
})



module.exports=app;