var path = require('path')

module.exports.electronic = function(req,res){
    res.sendFile(path.join(__dirname +'./../../electronic.html'))
} 

module.exports.notebooks = function(req,res){
    res.sendFile(path.join(__dirname + "./../../notebooks.html"))
}