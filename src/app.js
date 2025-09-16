const express = require("express")
const app = express()

app.use("/hello",(req,res) => {
    res.send(" Hello server")
})

app.listen(3000,() => {
    console.log("sucessfully server listening")
})