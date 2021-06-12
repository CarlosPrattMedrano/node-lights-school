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
        status: "Rojo",
        street:"Avila Camacho"
    },

}
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', true)
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
app.get('/', (req, res) =>{

    return res.status(200).json({
        nodeOne
      });
});
app.post('/', (request, response) =>{
    nodeOne.trafficLight1.status= request.body.trafficLight1.status;
    nodeOne.trafficLight2.status= request.body.trafficLight2.status;
    console.log(request.body);      
    response.send(request.body);  
  });
const port = process.env.port || 4500
app.listen(port, () => {
    console.log("quibo");
});
