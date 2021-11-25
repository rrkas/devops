const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello there, welcome!");
});

app.listen(8080, ()=>{
    console.log("listening on port 8080!");
});