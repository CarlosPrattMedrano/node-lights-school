const express = require('express');
const app = express();
const cors = require('cors')({ origin: true });
app.get('/', (req, res) =>{
    cors(req, res, () => {
        res.send("Welcome :D");
    })
   
});

const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
