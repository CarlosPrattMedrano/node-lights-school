const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send("Welcome :D");
});

app.listen(4500, () => {
    console.log("quibo");
});
