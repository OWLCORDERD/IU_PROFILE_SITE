const express = require('express');
const app = express();
const db = require('./config/db');
const PORT = process.env.PORT || 4000;

app.get('/Gallary', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    db.query("select * from Gallary", (err, data) => {
        if(err) {
            throw err;
        }else{
            console.log('Gallary info is :' , data);
        }
        res.send(data);
    })
})

app.get('/GallarySign', (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    db.query("select * from GallarySign", (err, data) => {
        if(err) {
            throw err;
        }else{
            console.log('GallarySign info is :' , data);
        }
        res.send(data);
    })
})

app.get("/Youtube", (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    db.query("select * from Youtube", (err, data) => {
        if(err){
            throw err;
        }else{
            console.log('Youtube Data is :', data)
        }
        res.send(data);
    })
})

app.listen(PORT, ()=> {
    console.log(`Server On : http://localhost:${PORT}/`);
})