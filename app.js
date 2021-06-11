const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
app.get('/', (req, res) =>{
    return res.status(200).json({
        message: "holi"
      });
});

const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
