const  adminAuth = (req, res, next) => {
    console.log("checking valid demon")
    const token = "xyz"
    const isAuthorized = token === "xyz"
    if (!isAuthorized) {
        res.status(401).send("Unauthorized Entry")
    } else {
        next()
    }
}

module.exports = {adminAuth};

