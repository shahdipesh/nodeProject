var express = require ('express');

var pool = require('./connection');

console.log(pool);

var app = express();



app.listen(3000,()=>{
    console.log ('listening on port 3000')
})