var express = require ('express');

var pool = require('./connection');

var app = express();
app.use(express.json());

app.post('/createUser',(req,res)=>{
var username = req.body.username;
var password = req.body.password;
pool.query(
    `INSERT INTO messenger (username,password) VALUES (?,?);`,[username,password],(err,rows)=>{
        if (err) throw err;
        res.send (rows);
    }
)

})


app.listen(3000,()=>{
    console.log ('listening on port 3000')
})