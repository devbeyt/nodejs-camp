



module.exports.electronic = function(req,res){
    const links = ["Home","About","Contact","Mors"]
    res.render('electronic',{title:"Nodejs tutorials",links})
} 

module.exports.notebooks = function(req,res){
   res.render('notebooks')
}