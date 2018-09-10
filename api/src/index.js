const express = require('express')
const app = express()

app.use(express.json());



app.get('/status', (req, res) => res.send('Server Responding'))

app.post('/uptime', function(req, res){
    console.log(req.body);
    res.send("okay")
});

app.get('/report', function(req, res){

});



app.listen(3000, () => console.log('Example app listening on port 3000!'))