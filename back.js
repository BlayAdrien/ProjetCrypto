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
var app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded());



app.get('/crypto', function (req,res){
    con.query("SELECT * FROM transactions", function(err, result){
        if(err) throw err;

        res.json(result);
    })
})

app.post('/crypto/:nomCrypto', function (req,res){
    var requete = "SELECT SUM(`NOMBRES_CRYPTOS`) as nbCrypto FROM `transactions` WHERE `nomCrypto`= ? GROUP BY nomCrypto "
    con.query(requete, req.params.nomCrypto, function(err, result){
        if(err) throw err;
        res.json(result);  
        console.log(result);      
    })
})

app.get('/crypto/:ID_TRANSACTIONS', function (req, res){
    console.log(req.params.ID_TRANSACTIONS);
    con.query('DELETE FROM `transactions` WHERE ID_TRANSACTIONS = ?', [req.params.ID_TRANSACTIONS], (err, results) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/crypto', function(req,res){
    console.log("Insertion crypto");
    console.log(req.body);
    console.log(req.body.cryptochoix);
    console.log(req.body.nomCrypto);
    console.log(req.body.NOMBRES_CRYPTOS);
    console.log(req.body.prixCrypto);
    var NOMBRES_CRYPTOS = req.body.NOMBRES_CRYPTOS;
    con.query("INSERT INTO `transactions` VALUES (NULL, '" + req.body.cryptochoix + "', '" + req.body.nomCrypto + "','" + req.body.prixCrypto + "', NOW() ,'" + NOMBRES_CRYPTOS + "')", function(err, result){
        if(err){
            throw err;
        }
        res.json(result);
    })
})

var server = http.createServer(app)

server.listen(port, hostname, function () {
    console.log('serveur lancé');
})
