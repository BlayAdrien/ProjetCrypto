var http = require('http')
var express = require('express')
var mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'test',
    database: 'crypto',
})

var hostname = 'localhost'
var port = 3000

var app = express()
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('crypto', function (req,res,next){
    con.query("SELECT * FROM crypto", function(err, result){
        if(err) throw err;

        res.json(result)
    })
})

var server = http.createServer(app)

server.listen(port, hostname, function () {
    console.log('serveur lancé');
})