
const links = ["Home","About","Contact","More"]


module.exports.electronic = function(req,res){
    res.render('electronic',{title:"Nodejs tutorials",links})
} 

module.exports.notebooks = function(req,res){
   res.render('notebooks')
}