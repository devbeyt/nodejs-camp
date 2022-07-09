// var http = require('http')
var fs = require('fs')
var express = require('express')



var app = express();
app.use(express.static('public'))
// app.use(express.static(__dirname + '/public'));

// ********* Express *************

app.get("/",function(req,res){
    fs.readFile('index.html',function(err,data){
       
        res.write(data)
        res.end()
    })
})

app.get("/login",function(req,res){
    fs.readFile("login.html",function(err,data){
        res.write(data)
     })
})


app.listen(8000)

