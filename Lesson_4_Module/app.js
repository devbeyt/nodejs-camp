var express = require('express')
var prod_ctrl = require('./ProductsController');


var app = express();
app.use(express.static('public'))



app.get("/products",prod_ctrl.products)
app.get("/products/electronics",prod_ctrl.electronics)






app.listen(8000)


