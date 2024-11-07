const express = require('express')

const app = express()

app.use("/dashboard", (req, res) => {
    res.send("Welcome Dashboard")
})
app.use("/test", (req, res) => {
    res.send("Welcome Test")
})

app.listen(3000, () => {
    console.log("Server is listing to 3000 port")
})