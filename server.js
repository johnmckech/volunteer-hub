const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/',function(req,res){
    var mainReq = req.body
    console.log({mainReq})
})
 
app.listen(3000)