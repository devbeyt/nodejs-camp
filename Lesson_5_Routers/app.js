var express = require('express')
var routerElectronic = require('./server/routers/ElectronicRouter')


var app = express();
app.use(express.static('public'))



app.use('/',routerElectronic)
app.use("/notebooks",routerElectronic)






app.listen(8000)


