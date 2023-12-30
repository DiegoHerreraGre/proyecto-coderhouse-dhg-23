const express = require("express")
const app = express()
const fs = require("fs")

app.get("/getUsers", function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data)
        res.end(data)
    })
})

const server = app.listen(8080, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

const arrayJson = require("./formapp.js")

app.post("/addUser", function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data)
        data["user4"] = arrayJson["user4"]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})