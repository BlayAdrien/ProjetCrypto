var http = require('http')
var express = require('express')
var mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database: 'crypto',
})

var hostname = 'localhost'
var port = 3000

var app = express()
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('/crypto', function (req,res,next){
    con.query("SELECT * FROM crypto", function(err, result){
        if(err) throw err;

        res.json(result)
    })
})
app.get('/crypto/:cryptoId', function (req,res,next){
    con.query("SELECT SUM(`NOMBRES_CRYPTOS`) as nbCrypto FROM `transactions` WHERE `ID_CRYPTO`= ? ", req.params.cryptoId, function(err, result){
        if(err) throw err;

        res.json(result)
    })
})

app.post('/crypto',function(req,res, next){
    let laDate = new Date()
    con.query("INSERT INTO transactions (`ID_TRANSACTIONS`, `ID_UTILISATEUR`, `ID_CRYPTO`, `ACHATOUVENTE`, `DATE`, `NOMBRES_CRYPTOS`) VALUES (NULL, '1', '"+ req.body.cryptochoix + "' , "+ req.body.transaction+"', '" + laDate.getFullYear() + "-" + laDate.getMonth() + "-" + laDate.getDay() + "', '"+ req.body.nombre + "' )", function(err, result){
        if(err) throw err;

        res.json(result)
    })
})


var server = http.createServer(app)

server.listen(port, hostname, function () {
    console.log('serveur lancé');
})
