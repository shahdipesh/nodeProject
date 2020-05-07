var express = require ('express');
var pool = require('./connection');

var app = express();
app.use(express.json());

//Using Query param
app.get('/profile',(req,res)=>{
    const id = req.query.id;
    console.log('query:: ==>> ', req.query);
    console.log('id:: ==>> ', req.query.id);
    pool.query(
        `SELECT * FROM messenger where idmessenger = ${id};`,(err,rows)=>{
            if (err) throw err;
            res.send (rows);
        }
    )
}); 


app.post('/createUser',(req,res)=>{
var username = req.body.username;
var password = req.body.password;
pool.query(
    `INSERT INTO messenger (username,password) VALUES (?,?);`,[username,password],(err,rows)=>{
        if (err) throw err;
        res.send (rows);
    }
)

});

app.get('/allUser',(req,res)=>{
    pool.query(
        `SELECT * FROM messenger;`,(err,rows)=>{
            if (err) throw err;
            res.send (rows);
        }
    )
});




app.listen(3000,()=>{
    console.log ('listening on port 3000')
})