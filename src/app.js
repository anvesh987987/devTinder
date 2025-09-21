const express = require("express")
const app = express()

app.get("/spouse",(req,res) => {
    res.send("Hello Rani from server")
})

app.get("/",(req,res) => {
    res.send("Hello Rani and Anvesh from server")
})

// Dynamic routes able to give the user name and password
app.get("/user/:userId/:name/:password",(req,res) => {
    console.log(req.params)
    res.send({firstName:"Anvesh",lastName:"Sodisetti"})
})

//
app.post("/user",(req,res) => {
    res.send("Hello posted successfully")
})

app.delete("/user",(req,res) => {
    res.send("Hello Deleted successfully")
})

app.get("/bride",(req,res) => {
    res.send("Hello anvesh from server")
})

app.listen(3000,() => {
    console.log("Server runnning smoothly....")
})