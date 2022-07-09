var express = require('express')
var path = require('path')
var routerElectronic = require('./server/routers/ElectronicRouter')
var ejsLayouts = require('express-ejs-layouts')

// ***************************** start server ***************************************


var app = express();
app.use(express.static('public'))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/server/views'))


app.use(ejsLayouts)
app.use('/',routerElectronic)
app.use("/notebooks",routerElectronic)











//  end of server

app.listen(8000)


