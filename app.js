const express = require('express');
const app = express();
let nodeOne = {
    trafficLight1:{
        id:98878,
        number: 1,
        status: "Verde",
        street:"Patria"

    },
    trafficLight2:{
        id:98878,
        number: 1,
        status: "Verde",
        street:"Avila Camacho"
    },

}
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
app.get('/', (req, res) =>{
    console.log("get");  
    return res.status(200).json({
        nodeOne
      });
});
app.post('/', (request, response) =>{
    console.log(request.body);      
    response.send(request.body);  
  });
const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
