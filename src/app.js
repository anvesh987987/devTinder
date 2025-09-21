const express = require("express")
const app = express()

const {adminAuth} = require("./middlewares/auth")

/* Here in this we handling the multiple routes with next() by calling the routes 
until server responseds with response */
app.get("/user", (req, res, next) => {
    console.log("Handling the route user with 1st response")
    next()

}, (req, res) => {
    res.send("2nd reesponse for user")
    console.log("Handling the route user with 2nd response")
}, (req, res) => {
    res.send("3rd reesponse for user")
    console.log("Handling the route user with 3rd response")
})

/*  Here another type we handling the multiple routes with next() by calling the routes in array 
until server responseds with response */
app.get("/testUser",
    [(req, res, next) => {
        console.log("Handling the route testUser with 1st response")
        next()
    }, (req, res, next) => {
        // res.send("2nd reesponse for testUser")
        console.log("Handling the route testUser with 2nd response")
        next()
    }, (req, res) => {
        res.send("3rd reesponse for testUser")
        console.log("Handling the route testUser with 3rd response")
    }, (req, res) => {
        res.send("4th reesponse for testUser")
        console.log("Handling the route testUser with 4tgh response")
    }, (req, res) => {
        res.send("5th reesponse for testUser")
        console.log("Handling the route testUser with 5th response")
    }])


/*  Here another type we handling the multiple routes with next() by calling
 the some routes in array and some are like objects like taditional method
until server responseds with response */

// app.use("/route,rH,[rH2,rH3],rH4,rH5")

app.get("/testUser2",
    (req, res, next) => {
        console.log("Handling the route testUser2 with 1st response")
        next()
    }, [(req, res, next) => {
        // res.send("2nd reesponse for testUser2")
        console.log("Handling the route testUser2 with 2nd response")
        next()
    }, (req, res) => {
        res.send("3rd reesponse for testUser2")
        console.log("Handling the route testUser2 with 3rd response")
    }], (req, res) => {
        res.send("4th reesponse for testUser2")
        console.log("Handling the route testUser2 with 4tgh response")
    }, (req, res) => {
        res.send("5th reesponse for testUser2")
        console.log("Handling the route testUser2 with 5th response")
    })

app.get("/spouse", (req, res) => {
    res.send("Hello Rani from server")
})

app.get("/", (req, res) => {
    res.send("Hello Rani and Anvesh from server")
})

// Dynamic routes able to give the user name and password
app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params)
    res.send({ firstName: "Anvesh", lastName: "Sodisetti" })
})

//
app.post("/user", (req, res) => {
    res.send("Hello posted successfully")
})

app.delete("/user", (req, res) => {
    res.send("Hello Deleted successfully")
})

app.get("/bride", (req, res) => {
    res.send("Hello anvesh from server")
})

app.use("/admin", adminAuth)

app.get("/admin/getAllData", (req, res) => {
    console.log("Get All data")
    res.send("Demon fethed all data")
})

app.listen(3000, () => {
    console.log("Server runnning smoothly....")
})