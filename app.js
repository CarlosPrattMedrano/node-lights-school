const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send("Welcome :D");
});

const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
