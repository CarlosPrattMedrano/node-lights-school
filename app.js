const express = require('express');
const app = express();

app.AllowAnyOrigin();  
app.get('/', (req, res) =>{
    res.send("Welcomssssssssss");
});

const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
