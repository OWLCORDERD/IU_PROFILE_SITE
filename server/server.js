const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 4000;

app.get('/db', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    db.query("select * from Gallary", (err, data) => {
        if(err) {
            throw err;
        }else{
            console.log('User info is :' , data);
        }
        res.send(data);
    })
})

app.get('/db2', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    db.query("select * from GallarySign", (err, data) => {
        if(err) {
            throw err;
        }else{
            console.log('User info is :' , data);
        }
        res.send(data);
    })
})

app.listen(PORT, ()=> {
    console.log(`Server On : http://localhost:${PORT}/`);
})