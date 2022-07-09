var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    
    if(req.url == '/'){
        fs.readFile('index.html',function(err,data){
       
            res.write(data)
            // res.write("Hello")
            res.end()
        })
    }

    if(req.url == "/login"){
        fs.readFile("login.html",function(err,data){
           res.write(data)
        })
    }
    
    
    
}).listen(8000)