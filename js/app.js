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

app.get("/:id", function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        const users = JSON.parse(data)
        const user = users["user" + req.params.id]
        console.log(user)
        res.end(JSON.stringify(user))
    })
})

app.delete("/deleteUser", function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        data = JSON.parse(data)
        delete data["user" + 2]
        console.log(data)
        res.end(JSON.stringify(data))
    })
})

// con este código hacemos el GET de los planes de compra una vez escoga en el carrito de compra

app.get("/planes.json", function(req, res){
    fs.readFile(__dirname + "/" + "planes.json", 'utf8', function(err, data){
        console.log(data)
        res.end(data)
        if (req === "Plan 1") {
            res.end(data)
        } else if (req === "Plan 2") {
            res.end(data)
        } else if (req === "Plan 3") {
            res.end(data)
        } else if (req === "Plan 4") {
            res.end(data)
        } else if (req === "Plan 5") {
            res.end(data)
        } else if (req === "Plan 6") {
            res.end(data)
        } else if (req === "Plan 7") {
            res.end(data)
        } else if (req === "Plan 8") {
            res.end(data)
        } else if (req === "Plan 9") {
            res.end(data)
        } else if (req === "Plan 10") {
            res.end(data)
        } else if (req === "Plan 11") {
            res.end(data)
        } else if (req === "Plan 12") {
            res.end(data)
        } else if (req === "Plan 13") {
            res.end(data)
        } else if (req === "Plan 14") {
            res.end(data)
        } else if (req === "Plan 15") {
            res.end(data)
        } else if (req === "Plan 16") {
            res.end(data)
        } else if (req === "Plan 17") {
            res.end(data)
        } else if (req === "Plan 18") {
            res.end(data)
        } else if (req === "Plan 19") {
            res.end(data)
        } else if (req === "Plan 20") {
            res.end(data)
        } else if (req === "Plan 21") {
            res.end(data)
        } else if (req === "Plan 22") {
            res.end(data)
        } else if (req === "Plan 23") {
            res.end(data)
        } else if (req === "Plan 24") {
            res.end(data)
        } else if (req === "Plan 25") {
            res.end(data)
        } else if (req === "Plan 26") {
            res.end(data)
        } else if (req === "Plan 27") {
            res.end(data)
        } else if (req === "Plan 28") {
            res.end(data)
        } else if (req === "Plan 29") {
            res.end(data)
        } else if (req === "Plan 30") {
            res.end(data)
        } else if (req === "Plan 31") {
            res.end(data)
        } else if (req === "Plan 32") {
            res.end(data)
        } else if (req === "Plan 33") {
            res.end(data)
        } else if (req === "Plan 34") {
            res.end(data)
        } else if (req === "Plan 35") {
            res.end(data)
        } else if (req === "Plan 36") {
            res.end(data)
        } else if (req === "Plan 37") {
            res.end(data)
        } else if (req === "Plan 38") {
            res.end(data)
        } else if (req === "Plan 39") {
            res.end(data)
        } else if (req === "Plan 40") {
            res.end(data)
        } else if (req === "Plan 41") {
            res.end(data)
        } else if (req === "Plan 42") {
            res.end(data)
        } else if (req === "Plan 43") {
            res.end(data)
        } else if (req === "Plan 44") {
            res.end(data)
        } else if (req === "Plan 45") {
            res.end(data)
        } else if (req === "Plan 46") {
            res.end(data)
        } else if (req === "Plan 47") {
            res.end(data)
        } else if (req === "Plan 48") {
            res.end(data)
        } else if (req === "Plan 49") {
            res.end(data)
        } else if (req === "Plan 50") {
            res.end(data)
        } else if (req === "Plan 51") {
            res.end(data)
        } else if (req === "Plan 52") {
            res.end(data)
        } else if (req === "Plan 53") {
            res.end(data)
        } else if (req === "Plan 54") {
            res.end(data)
        } else if (req === "Plan 55") {
            res.end(data)
        } else if (req === "Plan 56") {
            res.end(data)
        } else if (req === "Plan 57") {
            res.end(data)
        } else if (req === "Plan 58") {
            res.end(data)
        } else if (req === "Plan 59") {
            res.end(data)
        } else if (req === "Plan 60") {
            res.end(data)
        } else if (req === "Plan 61") {
            res.end(data)
        } else if (req === "Plan 62") {
            res.end(data)
        } else if (req === "Plan 63") {
            res.end(data)
        } else if (req === "Plan 64") {
            res.end(data)
        } else if (req === "Plan 65") {
            res.end(data)
        } else if (req === "Plan 66") {
            res.end(data)
        } else if (req === "Plan 67") {
            res.end(data)
        } else if (req === "Plan 68") {
            res.end(data)
        } else if (req === "Plan 69") {
            res.end(data)
        } else if (req === "Plan 70") {
            res.end(data)
        } else if (req === "Plan 71") {
            res.end(data)
        } else if (req === "Plan 72") {
            res.end(data)
        } else if (req === "Plan 73") {
            res.end(data)
        } else if (req === "Plan 74") {
            res.end(data)
        } else if (req === "Plan 75") {
            res.end(data)
        } else if (req === "Plan 76") {
            res.end(data)
        } else if (req === "Plan 77") {
            res.end(data)
        } else if (req === "Plan 78") {
            res.end(data)
        } else if (req === "Plan 79") {
            res.end(data)
        } else if (req === "Plan 80") {
            res.end(data)
        } else if (req === "Plan 81") {
            res.end(data)
        } else if (req === "Plan 82") {
            res.end(data)
        } else if (req === "Plan 83") {
            res.end(data)
        } else if (req === "Plan 84") {
            res.end(data)
        } else if (req === "Plan 85") {
            res.end(data)
        } else if (req === "Plan 86") {
            res.end(data)
        } else if (req === "Plan 87") {
            res.end(data)
        } else if (req === "Plan 88") {
            res.end(data)
        } else if (req === "Plan 89") {
            res.end(data)
        } else if (req === "Plan 90") {
            res.end(data)
        } else if (req === "Plan 91") {
            res.end(data)
        } else if (req === "Plan 92") {
            res.end(data)
        } else if (req === "Plan 93") {
            res.end(data)
        } else if (req === "Plan 94") {
            res.end(data)
        } else if (req === "Plan 95") {
            res.end(data)
        } else if (req === "Plan 96") {
            res.end(data)
        } else {
            err = res.end("No hay planes")
        }
    })
})