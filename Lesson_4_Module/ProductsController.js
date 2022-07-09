
module.exports.products = function(req,res){
    res.sendFile(__dirname +'/products.html')
} 

module.exports.electronics = function(req,res){
    res.sendFile(__dirname + "/electronic.html")
}