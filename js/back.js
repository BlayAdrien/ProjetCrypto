var http = require('http')
var express = require('express')
var mysql = require('mysql')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'test',
    database: 'quizz',
})