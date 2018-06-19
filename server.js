const express = require("express")
const ws = require("./ws")

const app = express()

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/ws.html")
})

app.listen(3000, function() {
  console.log("App listening on port 3000")
})
